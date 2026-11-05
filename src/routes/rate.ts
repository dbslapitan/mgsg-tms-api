import { Router } from "express";
import { createRate, getRates, getRateById, updateRateById, deleteRateById } from "../controllers/rate.js";

export const rateRoute = Router();

rateRoute.post("/", createRate);

rateRoute.get("/", getRates);

rateRoute.get("/:id", getRateById);

rateRoute.put("/:id", updateRateById);

rateRoute.delete("/:id", deleteRateById);