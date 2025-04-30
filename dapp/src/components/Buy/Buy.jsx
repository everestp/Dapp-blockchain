import React, { useState } from "react";
import "./Buy.css"; // ✅ Import external styling

const Buy = ({ state }) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const buyChai = async (event) => {
    event.preventDefault();
    console.log("Buying chai for:", formData);
    // ✅ Add blockchain logic here!
  };

  return (
    <div className="buy-container">
      <h1>Dapp for Supporting Creator</h1>
      <h2>Buy Chai ☕</h2>
      <form onSubmit={buyChai}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Enter your name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message</label>
        <input 
          type="text" 
          id="message" 
          name="message" 
          placeholder="Enter a message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Buy Chai ☕</button>
      </form>
    </div>
  );
};

export default Buy;