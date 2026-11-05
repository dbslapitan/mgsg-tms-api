import { Router } from 'express';
import { createTruck, getTrucks, getTruckById, updateTruckById, deleteTruckById } from '../controllers/truck.js';

export const truckRouter = Router();

truckRouter.post('/', createTruck);

truckRouter.get('/', getTrucks);

truckRouter.get('/:id', getTruckById);

truckRouter.patch('/:id', updateTruckById);

truckRouter.delete('/:id', deleteTruckById);