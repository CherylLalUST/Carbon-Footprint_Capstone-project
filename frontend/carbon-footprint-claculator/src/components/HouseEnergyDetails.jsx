import React, { useState } from 'react';
import '../css/HouseEnergyDetails.css';

function HouseEnergyDetails() {
  const [formData, setFormData] = useState({
    electricityUsage: '',
    gasUsage: '',
    electricityType: '',
    naturalGasType: '',
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
    console.log('Submitted Energy Usage:', formData);
    const updatedHouseData = { 
      ...formData,
      electricityUsage: formData.electricityUsage || 0,
      gasUsage: formData.gasUsage * 28 || 0,
    };
    console.log('Updated House Energy Data:', updatedHouseData);
    // Code to send data to backend or handle it within the app
  };

  return (
    <div className="house-energy-container">
      <h2>House Energy Details</h2>
      <form onSubmit={handleSubmit} className="house-energy-form">
        <div className="input-card">
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
            <label>Electricity Type:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="electricityType"
                  value="Renewable"
                  checked={formData.electricityType === 'Renewable'}
                  onChange={handleChange}
                />
                Renewable
              </label>
              <label>
                <input
                  type="radio"
                  name="electricityType"
                  value="Non-Renewable"
                  checked={formData.electricityType === 'Non-Renewable'}
                  onChange={handleChange}
                />
                Non-Renewable
              </label>
              <label>
                <input
                  type="radio"
                  name="electricityType"
                  value="Hybrid"
                  checked={formData.electricityType === 'Hybrid'}
                  onChange={handleChange}
                />
                Hybrid
              </label>
            </div>
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

          <div className="form-field">
            <label>Natural Gas Type:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="naturalGasType"
                  value="LPG"
                  checked={formData.naturalGasType === 'LPG'}
                  onChange={handleChange}
                />
                LPG
              </label>
              <label>
                <input
                  type="radio"
                  name="naturalGasType"
                  value="Hybrid"
                  checked={formData.naturalGasType === 'Hybrid'}
                  onChange={handleChange}
                />
                Hybrid
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">Track</button>
      </form>
    </div>
  );
}

export default HouseEnergyDetails;
