import { Router } from "express";
import { getLocations, getLocation, createLocation, updateLocation, deleteLocation } from "../controllers/location.js";

export const locationRoute = Router();

locationRoute.get('/', getLocations);

locationRoute.get('/:id', getLocation);

locationRoute.post('/', createLocation);

locationRoute.patch('/:id', updateLocation);

locationRoute.delete('/:id', deleteLocation);