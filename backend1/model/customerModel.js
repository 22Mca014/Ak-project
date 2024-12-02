import mongoose from 'mongoose';

// Define the schema for purchase details
const purchaseDetailsSchema = new mongoose.Schema({
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
    total:{
        type:Number,
        required:true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now, // Automatically set the purchase date to the current date
    },
});

// Define the schema for customer
const customerSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        purchaseDetails: {
            type: [purchaseDetailsSchema], // Array of purchase details
            default: [],
        },
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
    }
);

const CustomerModel = mongoose.model('Customer', customerSchema);

export default CustomerModel;
