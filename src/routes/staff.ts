import { Router } from "express";


export const staffRoute = Router();

import { getAllStaff, postStaff, getStaffById, deleteStaffById, updateStaffById } from "../controllers/staff.js";

staffRoute.get("/", getAllStaff);

staffRoute.post("/", postStaff);

staffRoute.get("/:id", getStaffById);

staffRoute.delete("/:id", deleteStaffById);

staffRoute.put("/:id", updateStaffById);