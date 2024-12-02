import mongoose from 'mongoose';

// Define the schema for purchase
const purchaseSchema = new mongoose.Schema({
    fiveinch: {
        type: Number,
        required: true,
    },
    sixinch: {
        type: Number,
        required: true,
    },
    seveninch: {
        type: Number,
        required: true,
    },
    eightinch: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now, // Automatically set the purchase date to the current date
    },
});

// Create the model
const PurchaseModel = mongoose.model('Purchase', purchaseSchema);

// Export the model
export default PurchaseModel;
