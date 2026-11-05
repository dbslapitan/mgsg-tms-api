import { Router } from 'express';
import { createOwner, getOwners, getOwnerById, updateOwner, deleteOwner, getActiveOwners } from '../controllers/owner.js';

export const ownerRoute = Router();

ownerRoute.post('/', createOwner);

ownerRoute.get('/', getOwners);

ownerRoute.get('/active', getActiveOwners);

ownerRoute.get('/:id', getOwnerById);

ownerRoute.patch('/:id', updateOwner);

ownerRoute.delete('/:id', deleteOwner);