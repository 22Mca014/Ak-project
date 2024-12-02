import CustomerModel from "../model/customerModel.js";

// Add or update customer with purchase details
export const addCustomerWithPurchase = async (req, res) => {
    try {
        const { customerName, address, fiveinch, sixinch, seveninch, eightinch, total,date } = req.body;

        // Validate required fields
        if (!customerName || !address || fiveinch == null || sixinch == null || seveninch == null || eightinch == null ||total==null) {
            return res.status(400).json({ message: 'Customer name, address, and purchase details are required.' });
        }

        // Create new purchase object
        const newPurchase = {
            fiveinch,
            sixinch,
            seveninch,
            eightinch,
            total,
            date: date || Date.now(), // Use provided date or default to now
        };

        // Find if customer already exists
        let customer = await CustomerModel.findOne({ customerName });

        if (customer) {
            // Append new purchase to existing customer's purchaseDetails
            customer.purchaseDetails.push(newPurchase);
            await customer.save();
            res.status(200).json({
                message: 'Existing customer updated with new purchase details.',
                customer,
            });
        } else {
            // Create a new customer
            customer = new CustomerModel({
                customerName,
                address,
                purchaseDetails: [newPurchase], // Initialize purchaseDetails as an array
            });
            await customer.save();
            res.status(201).json({
                message: 'New customer and purchase details saved successfully.',
                customer,
            });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error saving customer and purchase details.', error: error.message });
    }
};

// Fetch all customers
export const getAllCustomers = async (req, res) => {
    try {
        const customers = await CustomerModel.find();
        res.status(200).json({ message: 'Customers fetched successfully.', data: customers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customers.', error: error.message });
    }
};
