import React, { useState } from 'react';
import '../css/WasteDetails.css';

function WasteDetails() {
  const [wasteData, setWasteData] = useState({
    waste_food: { amount: '', composted: false },
    plastic_waste: { amount: '', recycled: false },
    paper_waste: { amount: '', recycled: false },
    metal_waste: { amount: '', recycled: false },
    glass_waste: { amount: '', recycled: false },
    e_waste: { amount: '', recycled: false },
  });

  const handleAmountChange = (e, wasteType) => {
    const { value } = e.target;
    setWasteData((prevData) => ({
      ...prevData,
      [wasteType]: { ...prevData[wasteType], amount: parseFloat(value) || 0 },
    }));
  };

  const handleCheckboxChange = (e, wasteType, field) => {
    const { checked } = e.target;
    setWasteData((prevData) => ({
      ...prevData,
      [wasteType]: { ...prevData[wasteType], [field]: checked },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waste Data Submitted:', wasteData);
  };

  return (
    <div className="waste-details-container">
      <h2>Waste Management Details</h2>
      <div className="form-card">
        <form onSubmit={handleSubmit} className="waste-form">
          <div className="scrollable-form">
            {/* Waste Food */}
            <div className="waste-item" style={{ marginTop: '0.7em' }}>
              <label style={{ marginLeft: '2em' }}>Food Waste (kg):</label>
              <input
                type="number"
                min="0"
                value={wasteData.waste_food.amount}
                onChange={(e) => handleAmountChange(e, 'waste_food')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.waste_food.composted}
                  onChange={(e) => handleCheckboxChange(e, 'waste_food', 'composted')}
                />
                Composted
              </label>
            </div>
            {wasteData.waste_food.amount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for food waste.
              </div>
            )}

            {/* Plastic Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Plastic Waste (kg):</label>
              <input
                type="number"
                min="0"
                value={wasteData.plastic_waste.amount}
                onChange={(e) => handleAmountChange(e, 'plastic_waste')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.plastic_waste.recycled}
                  onChange={(e) => handleCheckboxChange(e, 'plastic_waste', 'recycled')}
                />
                Recycled
              </label>
            </div>
            {wasteData.plastic_waste.amount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for plastic waste.
              </div>
            )}

            {/* Paper Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Paper Waste (kg):</label>
              <input
                type="number"
                min="0"
                value={wasteData.paper_waste.amount}
                onChange={(e) => handleAmountChange(e, 'paper_waste')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.paper_waste.recycled}
                  onChange={(e) => handleCheckboxChange(e, 'paper_waste', 'recycled')}
                />
                Recycled
              </label>
            </div>
            {wasteData.paper_waste.amount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for paper waste.
              </div>
            )}

            {/* Metal Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Metal Waste (kg):</label>
              <input
                type="number"
                min="0"
                value={wasteData.metal_waste.amount}
                onChange={(e) => handleAmountChange(e, 'metal_waste')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.metal_waste.recycled}
                  onChange={(e) => handleCheckboxChange(e, 'metal_waste', 'recycled')}
                />
                Recycled
              </label>
            </div>
            {wasteData.metal_waste.amount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for metal waste.
              </div>
            )}

            {/* Glass Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Glass Waste (kg):</label>
              <input
                type="number"
                min="0"
                value={wasteData.glass_waste.amount}
                onChange={(e) => handleAmountChange(e, 'glass_waste')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.glass_waste.recycled}
                  onChange={(e) => handleCheckboxChange(e, 'glass_waste', 'recycled')}
                />
                Recycled
              </label>
            </div>
            {wasteData.glass_waste.amount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for glass waste.
              </div>
            )}

            {/* E-waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>E-Waste (kg):</label>
              <input
                type="number"
                min="0"
                value={wasteData.e_waste.amount}
                onChange={(e) => handleAmountChange(e, 'e_waste')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.e_waste.recycled}
                  onChange={(e) => handleCheckboxChange(e, 'e_waste', 'recycled')}
                />
                Recycled
              </label>
            </div>
            {wasteData.e_waste.amount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for e-waste.
              </div>
            )}
          </div>

          <button type="submit" className="submit-button">Save & Next</button>
        </form>
      </div>
    </div>
  );
}

export default WasteDetails;
