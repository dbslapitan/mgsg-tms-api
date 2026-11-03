import { Request, Response } from 'express';
import { Company } from '../models/company.js';

export const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.find();
    res.status(200).json({ data: companies });
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to fetch companies', details: error });
    return;
  }
};

export const postCompany = async (req: Request, res: Response) => {
  const company = req.body;
  try{
    const newCompany = await Company.create(company);

    res.status(201).json({ data: newCompany });
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to create company', details: error });
    return;
  }
};