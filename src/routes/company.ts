import { Router } from 'express';
import { getAllCompanies, postCompany, getCompanyById, deleteCompanyById, updateCompanyById } from '../controllers/company.js';

export const companyRoute = Router();

companyRoute.get('/', getAllCompanies);

companyRoute.post('/', postCompany);

companyRoute.get('/:id', getCompanyById);

companyRoute.delete('/:id', deleteCompanyById);

companyRoute.patch('/:id', updateCompanyById);