import { Router } from "express";
import designer from "./routes/designer";

const api = Router();

api.use("/designer", designer);
export default api;