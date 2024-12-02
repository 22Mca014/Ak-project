import mongoose from 'mongoose';

// Define the schema
const priceSchema = new mongoose.Schema(
    {
        fiveinchprice: {
            type: Number,
            required: true
        },
        sixinchprice: {
            type: Number,
            required: true
        },
        seveninchprice: {
            type: Number,
            required: true
        },
        eightinchprice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true // Automatically manage createdAt and updatedAt fields
    }
);

// Create the model
const PriceModel = mongoose.model('PriceModel', priceSchema);

// Export the model
export default PriceModel;
