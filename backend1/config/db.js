import mongoose from "mongoose";

// Local MongoDB connection string
const connectionString = "mongodb://127.0.0.1:27017/akEnterprice";

// Connect to MongoDB
export const connectToDb = () => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,    // Use the new URL parser
        useUnifiedTopology: true  // Use the new Server Discover and Monitoring engine
    })
    .then(() => console.log("Connected to MongoDB (akEnterprice) successfully!"))
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Re-throw the error to handle it in the calling code
    });
};
