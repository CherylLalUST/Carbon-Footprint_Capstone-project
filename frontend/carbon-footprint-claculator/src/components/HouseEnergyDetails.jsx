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
      [name]: parseFloat(value) || 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Energy Usage:", formData);
    const updatedHouseData = { 
      ...formData,
      electricityUsage: formData.electricityUsage || 0,
      gasUsage: formData.gasUsage * 28 || 0,
    };
    console.log("Submitted Energy Usage:", updatedHouseData);
    // Code to send data to backend or handle it within the app
  };

  return (
    <div className="house-energy-container">
      <h2>House Energy Details</h2>
      <form onSubmit={handleSubmit} className="house-energy-form">

        <div className='input-card'>
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
              placeholder="Enter units of electricity consumed in kWh"
            />
          </div>

          <div className="form-field">
            <label htmlFor="gasUsage">Gas Usage (cylinders):</label>
            <input
              type="number"
              id="gasUsage"
              name="gasUsage"
              value={formData.gasUsage}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
              placeholder="Enter cylinders of LPG consumed"
            />
          </div>

        </div>
        <button type="submit" className="submit-button">Track</button>
      </form>
    </div>
  );
}

export default HouseEnergyDetails;
