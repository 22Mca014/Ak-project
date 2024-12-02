import React, { useState } from "react";
import axios from "axios";
import "./priceSetter.css";

const PriceSetter = () => {
  const [priceData, setPriceData] = useState({
    fiveinchprice: "",
    sixinchprice: "",
    seveninchprice: "",
    eightinchprice: "",
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPriceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/price", priceData); // Update to your backend URL
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating price.");
    }
  };

  return (
    <div className="container">
      <h1>Price Upsert Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>5 Inch Price:</label>
          <input
            type="number"
            name="fiveinchprice"
            value={priceData.fiveinchprice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>6 Inch Price:</label>
          <input
            type="number"
            name="sixinchprice"
            value={priceData.sixinchprice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>7 Inch Price:</label>
          <input
            type="number"
            name="seveninchprice"
            value={priceData.seveninchprice}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>8 Inch Price:</label>
          <input
            type="number"
            name="eightinchprice"
            value={priceData.eightinchprice}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn">Save Price</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default PriceSetter ;
