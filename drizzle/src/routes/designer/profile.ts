import { Router } from "express";
import { db } from "../../db";
import { Designer } from "../../db/schema";
import { eq } from "drizzle-orm";
import multer from "multer";
import crypto from "crypto";
import { body, validationResult } from "express-validator";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/images/");
    },
    filename: (req, file, cb) => {
        cb(null, crypto.randomUUID() + file.mimetype.replace("image/", "."));
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    },
});

const profile = Router();

profile.get("/", async (req, res) => {
    const data = await db.select().from(Designer);
    res.json(data);
});

profile.get("/:id", async (req, res) => {
    const { id } = req.params;

    const data = await db.select().from(Designer).where(eq(Designer.id, parseInt(id)));

    if (data.length === 0) {
        res.status(404).json({ message: "Designer Not Found" });
        return;
    }

    res.json(data[0]);
});

profile.post("/",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "indentityProof", maxCount: 1 },
    ]),
    body("name").isString().isLength({ min: 1, max: 255 }).withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("address").isString().isLength({ min: 1, max: 255 }).withMessage("Address is required"),
    body("phone").isNumeric().isLength({ min: 10, max: 10 }).withMessage("Phone Number is required"),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array().map((error) => error.msg) });
        }

        if (Object.keys(req.files as Express.Multer.File[]).length < 2) {
            return res.status(400).json({ message: "Image and Identity Proof is required" });
        }

        try {
            const { name, email, address, phone } = req.body;

            await db.transaction(async (tx) => {
                try {
                    await tx.insert(Designer).values({
                        name,
                        email,
                        address,
                        phone,
                        imageURL: (req.files as any).image[0].path,
                        identityProof: (req.files as any).indentityProof[0].path,
                    });
                } catch (error) {
                    console.error(error);
                    tx.rollback();
                    throw error;
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
            return;
        }

        res.status(201).json({ message: "Designer Created Successfully" });
    }
);

export default profile;
