import { Location } from "../models/location.js";
import { Request, Response } from "express";

export const getLocation = async (req: Request, res: Response) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        res.json({data: location});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching location', error });
    }
};

export const getLocations = async (req: Request, res: Response) => {
    try {
        const locations = await Location.find();
        res.json({data: locations});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching locations', error });
    }
};

export const createLocation = async (req: Request, res: Response) => {
    try {
        const location = new Location(req.body);
        await location.save();
        res.status(201).json({data: location});
    } catch (error) {
        res.status(500).json({ message: 'Error creating location', error });
    }
};

export const updateLocation = async (req: Request, res: Response) => {
    try {
        const location = await Location.findByIdAndUpdate(req.params.id, req.body);
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        res.json({data: location});
    } catch (error) {
        res.status(500).json({ message: 'Error updating location', error });
    }
};

export const deleteLocation = async (req: Request, res: Response) => {
    try {
        const location = await Location.findByIdAndDelete(req.params.id);
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        res.json({data: location});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting location', error });
    }
};