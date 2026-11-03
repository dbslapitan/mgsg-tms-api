import { Router } from 'express';
import { getAllCompanies, postCompany, getCompanyById, deleteCompanyById } from '../controllers/company.js';
export const previewRoute = Router();

previewRoute.get('/', getAllCompanies);

previewRoute.post('/', postCompany);

previewRoute.get('/:id', getCompanyById);

previewRoute.delete('/:id', deleteCompanyById);