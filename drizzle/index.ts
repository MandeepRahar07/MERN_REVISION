import cors from "cors";
import 'dotenv/config';
import express from "express";
import api from "./src/index";
console.log(api)
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ?? 5000;

app.use("/api", api);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});