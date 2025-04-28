import { Router } from "express";
import profile from "./profile";


const designer = Router();

designer.use("/profile", profile);

export default designer;