import { Truck } from "../models/truck.js";
import { Request, Response } from "express";

export const createTruck = async (req: Request, res: Response) => {
    try {
        const { licensePlate, type, owner } = req.body;
        const truck = new Truck({ licensePlate, type, owner });
        await truck.save();
        res.status(201).json({data: truck});
    } catch (error) {
        res.status(400).json({ message: 'Error creating truck', error });
    }
};

export const getTrucks = async (req: Request, res: Response) => {
    try {
        const trucks = await Truck.find().populate('owner', "truckingName _id");
        res.status(200).json({data: trucks});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trucks', error });
    }
};

export const getTruckById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const truck = await Truck.findById(id).populate('owner');
        if (!truck) {
            return res.status(404).json({ message: 'Truck not found' });
        }
        res.status(200).json({data: truck});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching truck', error });
    }
};

export const updateTruckById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const truck = await Truck.findByIdAndUpdate(id, updates);
        if (!truck) {
            return res.status(404).json({ message: 'Truck not found' });
        }
        res.status(200).json({data: truck});
    } catch (error) {
        res.status(500).json({ message: 'Error updating truck', error });
    }
};

export const deleteTruckById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const truck = await Truck.findByIdAndDelete(id);
        if (!truck) {
            return res.status(404).json({ message: 'Truck not found' });
        }
        res.status(200).json({ message: 'Truck deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting truck', error });
    }
};