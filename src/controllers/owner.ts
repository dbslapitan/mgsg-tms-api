import { Request, Response } from 'express';
import { Owner } from '../models/owner.js';

export const createOwner = async (req: Request, res: Response) => {
  try {
    const owner = new Owner(req.body);
    const savedOwner = await owner.save();
    res.status(201).json({data: savedOwner});
  } catch (error) {
    res.status(400).json({ message: 'Error creating owner', error });
  }
}

export const getOwners = async (req: Request, res: Response) => {
  try {
    const owners = await Owner.find();
    res.status(200).json({data: owners});
  } catch (error) {
    res.status(400).json({ message: 'Error fetching owners', error });
  }
}

export const getOwnerById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const owner = await Owner.findById(id);
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json({data: owner});
  } catch (error) {
    res.status(400).json({ message: 'Error fetching owner', error });
  }
}

export const updateOwner = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const owner = await Owner.findByIdAndUpdate(id, req.body);
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json({data: owner});
  } catch (error) {
    res.status(400).json({ message: 'Error updating owner', error });
  }
}

export const deleteOwner = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const owner = await Owner.findByIdAndDelete(id);
    console.log(owner);
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json({ message: 'Owner deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting owner', error });
  }
}