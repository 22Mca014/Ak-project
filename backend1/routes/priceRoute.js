import express from 'express';
import { upsertPrice } from '../controller/priceController.js';
// Adjust the path

const priceRouter = express.Router();

priceRouter.post('/price', upsertPrice); // Handle both create and update

export default priceRouter;
