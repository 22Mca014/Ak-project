
import express from 'express';
import cors from 'cors';
import { connectToDb } from './config/db.js'; // Importing the database connection function
import priceRouter from './routes/priceRoute.js';
import purchaseRouter from './routes/customerRoute.js';




const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Enables parsing of JSON payloads

// Establish database connection
connectToDb();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Server is running.');
});
app.use('/api',priceRouter);
app.use('/api/purchase', purchaseRouter);





// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
