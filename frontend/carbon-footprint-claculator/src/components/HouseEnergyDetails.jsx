import React, { useContext, useState } from 'react';
import '../css/HouseEnergyDetails.css';
import { FormContext } from "../FormContext";
import { useNavigate } from 'react-router-dom';

function HouseEnergyDetails() {

  const houseEnergyUrl = "http://localhost:9097/carbonFootprint/houseEnergy";
  const statisticsUrl = "http://localhost:9098/carbonFootprint/statistics";
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const {houseEnergyData, setHouseEnergyData} = useContext(FormContext);
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
      statisticsId: sessionStorage.getItem("statisticsId"),
      houseElectricity: houseEnergyData.houseElectricity || 0,
      houseNaturalGas: houseEnergyData.houseNaturalGas * 28 || 0,
    };
    console.log('Updated House Energy Data:', updatedHouseData);
    // Code to send data to backend or handle it within the app
    fetch(houseEnergyUrl + "/addDetails", {
      method: "POST",
      body: JSON.stringify(updatedHouseData),
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    })
    .then((res) => res.json())
    .then((houseData) => {
      sessionStorage.setItem("houseId",houseData.houseId);
      console.log("house id: " + sessionStorage.getItem("houseId"));
      fetch(statisticsUrl + "/getFullDetailsByStatisticsId/" + sessionStorage.getItem("statisticsId"),{
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
      })
      .then((res) => res.json())
      .then((resdata) => {
        console.log(resdata);
      });
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
            <label htmlFor="houseElectricity">Electricity Usage (kWh):</label>
            <input
              type="number"
              id="houseElectricity"
              name="houseElectricity"
              value={houseEnergyData.houseElectricity}
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
                  name="houseElectricityType"
                  value="Renewable"
                  checked={houseEnergyData.houseElectricityType === 'Renewable'}
                  onChange={handleChange}
                />
                Renewable
              </label>
              <label>
                <input
                  type="radio"
                  name="houseElectricityType"
                  value="Non-Renewable"
                  checked={houseEnergyData.houseElectricityType === 'Non-Renewable'}
                  onChange={handleChange}
                />
                Non-Renewable
              </label>
              <label>
                <input
                  type="radio"
                  name="houseElectricityType"
                  value="Hybrid"
                  checked={houseEnergyData.houseElectricityType === 'Hybrid'}
                  onChange={handleChange}
                />
                Hybrid
              </label>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="houseNaturalGas">Gas Usage (cylinders):</label>
            <input
              type="number"
              id="houseNaturalGas"
              name="houseNaturalGas"
              value={houseEnergyData.houseNaturalGas}
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
                  name="houseNaturalGasType"
                  value="LPG"
                  checked={houseEnergyData.houseNaturalGasType === 'LPG'}
                  onChange={handleChange}
                />
                LPG
              </label>
              <label>
                <input
                  type="radio"
                  name="houseNaturalGasType"
                  value="Hybrid"
                  checked={houseEnergyData.houseNaturalGasType === 'Hybrid'}
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
