import { Router } from 'express';
import { getAllCompanies, postCompany } from '../controllers/company.js';
export const previewRoute = Router();

previewRoute.get('/', getAllCompanies);

previewRoute.post('/', postCompany);