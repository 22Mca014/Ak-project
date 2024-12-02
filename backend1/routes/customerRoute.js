import express from 'express';
import { addCustomerWithPurchase } from '../controller/customerController.js';
 // Adjust the path

const purchaseRouter = express.Router();

purchaseRouter.post('/customers', addCustomerWithPurchase); // Endpoint to add a new customer with purchase details

export default purchaseRouter;
