import React, { useState } from "react";
import "./Customer.css";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    purchases: [
      { product: "5inch", quantity: 0, mrp: 0, amount: 0 },
      { product: "6inch", quantity: 0, mrp: 0, amount: 0 },
      { product: "7inch", quantity: 0, mrp: 0, amount: 0 },
      { product: "8inch", quantity: 0, mrp: 0, amount: 0 },
    ],
  });

  const [message, setMessage] = useState("");

  // Handle input change for name and address
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle change for purchase details
  const handlePurchaseChange = (index, field, value) => {
    const updatedPurchases = [...customer.purchases];
    updatedPurchases[index][field] = value;
    if (field === "quantity" || field === "mrp") {
      updatedPurchases[index].amount =
        updatedPurchases[index].quantity * updatedPurchases[index].mrp;
    }
    setCustomer((prev) => ({ ...prev, purchases: updatedPurchases }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(customer); // Replace this with API call to submit data
    setMessage("Customer details submitted successfully!");
  };

  return (
    <div className="form-container">
      <h1>Customer Purchase Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <h2>Purchase Details</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>MRP</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {customer.purchases.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase.product}</td>
                <td>
                  <input
                    type="number"
                    value={purchase.quantity}
                    onChange={(e) =>
                      handlePurchaseChange(index, "quantity", +e.target.value)
                    }
                    required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={purchase.mrp}
                    onChange={(e) =>
                      handlePurchaseChange(index, "mrp", +e.target.value)
                    }
                    required
                  />
                </td>
                <td>{purchase.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Customer;
