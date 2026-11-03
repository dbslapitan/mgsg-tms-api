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
  console.log(company);
  try{
    const newCompany = await Company.create(company);

    res.status(201).json({ data: newCompany });
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to create company', details: error });
    return;
  }
};

export const getCompanyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const company = await Company.findById(id);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }
    res.status(200).json({ data: company });
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to fetch company', details: error });
    return;
  }
};

export const deleteCompanyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const company = await Company.findByIdAndDelete(id);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }
    res.status(200).json({ data: company });
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to delete company', details: error });
    return;
  }
};

export const updateCompanyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const company = await Company.findByIdAndUpdate(id, updates);
    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }
    res.status(200).json({ data: company });
  }
  catch (error) {
    res.status(500).json({ error: 'Failed to update company', details: error });
    return;
  }
};