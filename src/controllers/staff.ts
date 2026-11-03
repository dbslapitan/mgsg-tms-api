import { Request, Response } from 'express';
import { Staff } from '../models/staff.js';

export const getAllStaff = async (req: Request, res: Response) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staff', error });
  }
};

export const postStaff = async (req: Request, res: Response) => {
    const staff = new Staff(req.body);
    try {
        await staff.save();
        res.status(201).json({data: staff});
    } catch (error) {
        res.status(500).json({ message: 'Error creating staff', error });
    }
};

export const getStaffById = async (req: Request, res: Response) => {
  const { id } = req.params;
    try {
        const staff = await Staff.findById(id);
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json({data: staff});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching staff', error });
    }
};

export const deleteStaffById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const staff = await Staff.findByIdAndDelete(id);
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json({data: staff});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting staff', error });
    }
};

export const updateStaffById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const staff = await Staff.findByIdAndUpdate(id, updates, { new: true });
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json({data: staff});
    } catch (error) {
        res.status(500).json({ message: 'Error updating staff', error });
    }
};