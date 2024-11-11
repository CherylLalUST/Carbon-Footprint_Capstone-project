import React, { useState } from 'react';
import '../css/WasteDetails.css';

function WasteDetails() {
  const [wasteData, setWasteData] = useState({
    waste_food: { amount: '', composted: '' },
    plastic_waste: { amount: '', recycled: '' },
    paper_waste: { amount: '', recycled: '' },
    metal_waste: { amount: '', recycled: '' },
    glass_waste: { amount: '', recycled: '' },
    e_waste: { amount: '', recycled: '' },
  });

  const handleAmountChange = (e, wasteType) => {
    const { value } = e.target;
    setWasteData((prevData) => ({
      ...prevData,
      [wasteType]: { ...prevData[wasteType], amount: value },
    }));
  };

  const handleRecycledChange = (e, wasteType) => {
    const { value } = e.target;
    setWasteData((prevData) => ({
      ...prevData,
      [wasteType]: { ...prevData[wasteType], recycled: value },
    }));
  };

  const handleCompostedChange = (e, wasteType) => {
    const { value } = e.target;
    setWasteData((prevData) => ({
      ...prevData,
      [wasteType]: { ...prevData[wasteType], composted: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waste Data Submitted:', wasteData);
  };

  return (
    <div className="waste-details-container">
      <h2>Waste Management Details</h2>
      <form onSubmit={handleSubmit} className="waste-form">
        {/* Waste Food */}
        <div className="waste-item">
          <label>Food Waste (kg):</label>
          <input
            type="number"
            value={wasteData.waste_food.amount}
            onChange={(e) => handleAmountChange(e, 'waste_food')}
            placeholder="Enter amount"
          />
          <label>Composted:</label>
          <select
            value={wasteData.waste_food.composted}
            onChange={(e) => handleCompostedChange(e, 'waste_food')}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Plastic Waste */}
        <div className="waste-item">
          <label>Plastic Waste (kg):</label>
          <input
            type="number"
            value={wasteData.plastic_waste.amount}
            onChange={(e) => handleAmountChange(e, 'plastic_waste')}
            placeholder="Enter amount"
          />
          <label>Recycled:</label>
          <select
            value={wasteData.plastic_waste.recycled}
            onChange={(e) => handleRecycledChange(e, 'plastic_waste')}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Paper Waste */}
        <div className="waste-item">
          <label>Paper Waste (kg):</label>
          <input
            type="number"
            value={wasteData.paper_waste.amount}
            onChange={(e) => handleAmountChange(e, 'paper_waste')}
            placeholder="Enter amount"
          />
          <label>Recycled:</label>
          <select
            value={wasteData.paper_waste.recycled}
            onChange={(e) => handleRecycledChange(e, 'paper_waste')}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Metal Waste */}
        <div className="waste-item">
          <label>Metal Waste (kg):</label>
          <input
            type="number"
            value={wasteData.metal_waste.amount}
            onChange={(e) => handleAmountChange(e, 'metal_waste')}
            placeholder="Enter amount"
          />
          <label>Recycled:</label>
          <select
            value={wasteData.metal_waste.recycled}
            onChange={(e) => handleRecycledChange(e, 'metal_waste')}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Glass Waste */}
        <div className="waste-item">
          <label>Glass Waste (kg):</label>
          <input
            type="number"
            value={wasteData.glass_waste.amount}
            onChange={(e) => handleAmountChange(e, 'glass_waste')}
            placeholder="Enter amount"
          />
          <label>Recycled:</label>
          <select
            value={wasteData.glass_waste.recycled}
            onChange={(e) => handleRecycledChange(e, 'glass_waste')}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* E-waste */}
        <div className="waste-item">
          <label>E-Waste (kg):</label>
          <input
            type="number"
            value={wasteData.e_waste.amount}
            onChange={(e) => handleAmountChange(e, 'e_waste')}
            placeholder="Enter amount"
          />
          <label>Recycled:</label>
          <select
            value={wasteData.e_waste.recycled}
            onChange={(e) => handleRecycledChange(e, 'e_waste')}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default WasteDetails;
