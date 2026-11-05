import { Rate } from "../models/rate.js";
import { Request, Response } from "express";

export const createRate = async (req: Request, res: Response) => {
  try {
    const rate = new Rate(req.body);
    await rate.save();
    res.status(201).json({data: rate});
  } catch (error) {
    if ((error as any).status === 409) {
      return res.status(409).json({ message: 'Rate already exists', rateId: (error as any).existingRateId });
    }
    res.status(400).json({ message: 'Error creating rate', error });
  }
};

export const getRates = async (req: Request, res: Response) => {
  try {
    const rates = await Rate.find().populate("origin", "_id name").populate("destination", "_id name").populate("company", "_id name");
    res.status(200).json({data: rates});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching rates', error });
  }
};

export const getRateById = async (req: Request, res: Response) => {
  try {
    const rate = await Rate.findById(req.params.id).populate("origin").populate("destination").populate("company");
    if (!rate) {
      return res.status(404).json({ message: 'Rate not found' });
    }
    res.status(200).json({data: rate});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching rate', error });
  }
};

export const updateRateById = async (req: Request, res: Response) => {    
  try {
    const rate = await Rate.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("origin").populate("destination").populate("company");
    if (!rate) {
      return res.status(404).json({ message: 'Rate not found' });
    }
    res.status(200).json({data: rate});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating rate', error });
  }
};

export const deleteRateById = async (req: Request, res: Response) => {
  try {
    const rate = await Rate.findByIdAndDelete(req.params.id);
    if (!rate) {
      return res.status(404).json({ message: 'Rate not found' });
    }
    res.status(200).json({ message: 'Rate deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error deleting rate', error });
  }
};