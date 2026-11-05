import { Router } from "express";
import { getAllStaff, postStaff, getStaffById, deleteStaffById, updateStaffById } from "../controllers/staff.js";

export const staffRoute = Router();

staffRoute.get("/", getAllStaff);

staffRoute.post("/", postStaff);

staffRoute.get("/:id", getStaffById);

staffRoute.delete("/:id", deleteStaffById);

staffRoute.patch("/:id", updateStaffById);