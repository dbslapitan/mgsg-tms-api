import { Router } from 'express';
import { createOwner, getOwners, getOwnerById, updateOwner, deleteOwner, getActiveOwners } from '../controllers/owner.js';

export const ownerRouter = Router();

ownerRouter.post('/', createOwner);

ownerRouter.get('/', getOwners);

ownerRouter.get('/active', getActiveOwners);

ownerRouter.get('/:id', getOwnerById);

ownerRouter.patch('/:id', updateOwner);

ownerRouter.delete('/:id', deleteOwner);