import React, { useContext, useState } from 'react';
import '../css/HouseEnergyDetails.css';
import { FormContext } from "../FormContext";
import { useNavigate } from 'react-router-dom';

function HouseEnergyDetails() {

  const houseEnergyUrl = "http://localhost:9097/carbonFootprint/houseEnergy";
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const {houseEnergyData, setHouseEnergyData} = useContext(FormContext)
  console.log(houseEnergyData.statisticsId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouseEnergyData({
      ...houseEnergyData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Energy Usage:', houseEnergyData);
    const updatedHouseData = { 
      ...houseEnergyData,
      electricityUsage: houseEnergyData.electricityUsage || 0,
      gasUsage: houseEnergyData.gasUsage * 28 || 0,
    };
    console.log('Updated House Energy Data:', updatedHouseData);
    // Code to send data to backend or handle it within the app
    fetch(houseEnergyUrl + "/addDetails", {
      method: "POST",
      body: JSON.stringify(updatedHouseData),
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    })
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem("houseId",data.houseId);
      navigate("/userHomePage")
    });
  };
  const handleDiscard = () => {
    navigate('/userHomePage'); 
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
              value={houseEnergyData.electricityUsage}
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
                  checked={houseEnergyData.electricityType === 'Renewable'}
                  onChange={handleChange}
                />
                Renewable
              </label>
              <label>
                <input
                  type="radio"
                  name="electricityType"
                  value="Non-Renewable"
                  checked={houseEnergyData.electricityType === 'Non-Renewable'}
                  onChange={handleChange}
                />
                Non-Renewable
              </label>
              <label>
                <input
                  type="radio"
                  name="electricityType"
                  value="Hybrid"
                  checked={houseEnergyData.electricityType === 'Hybrid'}
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
              value={houseEnergyData.gasUsage}
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
                  checked={houseEnergyData.naturalGasType === 'LPG'}
                  onChange={handleChange}
                />
                LPG
              </label>
              <label>
                <input
                  type="radio"
                  name="naturalGasType"
                  value="Hybrid"
                  checked={houseEnergyData.naturalGasType === 'Hybrid'}
                  onChange={handleChange}
                />
                Hybrid
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="submit-button">Track</button>
        <button type="button" className="discard-button" onClick={handleDiscard}>Discard</button>
      </form>
    </div>
  );
}

export default HouseEnergyDetails;
