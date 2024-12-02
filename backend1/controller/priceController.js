import PriceModel from "../model/priceModel.js";




// Function to either store a new price or update an existing one
export const upsertPrice = async (req, res) => {
    try {
        const { fiveinchprice, sixinchprice, seveninchprice, eightinchprice } = req.body;

        // Validate the input
        if (!fiveinchprice || !sixinchprice || !seveninchprice || !eightinchprice) {
            return res.status(400).json({ message: 'All price fields are required.' });
        }

        // Check if a record already exists
        let priceRecord = await PriceModel.findOne();

        if (priceRecord) {
            // Update the existing record
            priceRecord.fiveinchprice = fiveinchprice;
            priceRecord.sixinchprice = sixinchprice;
            priceRecord.seveninchprice = seveninchprice;
            priceRecord.eightinchprice = eightinchprice;

            await priceRecord.save();
            return res.status(200).json({ message: 'Price updated successfully.', data: priceRecord });
        } else {
            // Create a new record
            priceRecord = new PriceModel({
                fiveinchprice,
                sixinchprice,
                seveninchprice,
                eightinchprice
            });

            await priceRecord.save();
            return res.status(201).json({ message: 'Price created successfully.', data: priceRecord });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error processing request.', error: error.message });
    }
};
