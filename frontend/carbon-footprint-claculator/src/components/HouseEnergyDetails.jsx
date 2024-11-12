import React, { useState } from 'react';
import '../css/HouseEnergyDetails.css';

function HouseEnergyDetails() {
  const [formData, setFormData] = useState({
    electricityUsage: '',
    gasUsage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Energy Usage:", formData);
    // Code to send data to backend or handle it within the app
  };

  return (
    <div className="house-energy-container">
      <h2>House Energy Details</h2>
      <form onSubmit={handleSubmit} className="house-energy-form">
        
        <div className="form-field">
          <label htmlFor="electricityUsage">Electricity Usage (kWh):</label>
          <input
            type="number"
            id="electricityUsage"
            name="electricityUsage"
            value={formData.electricityUsage}
            onChange={handleChange}
            required
            min="0"
            step="0.1"
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="gasUsage">Gas Usage (cubic meters):</label>
          <input
            type="number"
            id="gasUsage"
            name="gasUsage"
            value={formData.gasUsage}
            onChange={handleChange}
            required
            min="0"
            step="0.1"
          />
        </div>

        <button type="submit" className="submit-button">Track</button>
      </form>
    </div>
  );
}

export default HouseEnergyDetails;
