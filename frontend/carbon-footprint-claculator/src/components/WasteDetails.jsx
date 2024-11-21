import '../css/WasteDetails.css';
import { useNavigate } from 'react-router-dom';
import { FormContext } from "../FormContext";
import React, { useContext, useState } from 'react';

function WasteDetails() {

  const wasteUrl = "http://localhost:9096/carbonFootprint/waste";
  const token = sessionStorage.getItem("token");

  const {wasteData, setWasteData} = useContext(FormContext);
  //console.log(wasteData.statsticsId);

  const [displayFlag, setDisplayFlag] = useState(false);
  let navigate = useNavigate();

  const handleAmountChange = (e, field) => {
    const { value } = e.target;
    const amount = parseFloat(value) || 0;
    setWasteData((prevData) => ({
      ...prevData,
      [field]: amount,
    }));

    if (amount === 0) {
      setDisplayFlag(true);
    }
  };

  const handleCheckboxChange = (e, field) => {
    const { checked } = e.target;
    setWasteData((prevData) => ({
      ...prevData,
      [field]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWasteData = { 
      ...wasteData,
      statisticsId: sessionStorage.getItem("statisticsId"),
      wasteFoodAmount: wasteData.wasteFoodAmount || 0,
      wastePlasticAmount: wasteData.wastePlasticAmount || 0,
      wastePaperAmount: wasteData.wastePaperAmount || 0,
      wasteGlassAmount: wasteData.wasteGlassAmount || 0,
      wasteMetalAmount: wasteData.wasteMetalAmount || 0,
      ewasteAmount: wasteData.ewasteAmount || 0,
    };
    console.log('Waste Data entered:', wasteData);
    console.log('Waste Data Submitted:', updatedWasteData);

    fetch(wasteUrl + "/addDetails", {
      method: "POST",
      body: JSON.stringify(updatedWasteData),
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    })
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem("wasteId",data.wasteId);
      navigate("/houseEnergy")
    });
      
  };

  const handleDiscard = () => {
    navigate('/userHomePage'); 
  };

  return (
    <div className="waste-details-container">
      <h2>Waste Management Details</h2>
      <div className="form-card">
        <form onSubmit={handleSubmit} className="waste-form">
          <div className="scrollable-form">
            {/* Food Waste */}
            <div className="waste-item" style={{ marginTop: '0.7em' }}>
              <label style={{ marginLeft: '2em' }}>Food Waste (kg/month):</label>
              <input
                type="number"
                step=".1"
                min="0"
                value={wasteData.wasteFoodAmount}
                onChange={(e) => handleAmountChange(e, 'wasteFoodAmount')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.foodCompost}
                  onChange={(e) => handleCheckboxChange(e, 'foodCompost')}
                />
                Composted
              </label>
            </div>
            {displayFlag && wasteData.wasteFoodAmount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for food waste.
              </div>
            )}

            {/* Plastic Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Plastic Waste (kg/month):</label>
              <input
                type="number"
                step=".1"
                min="0"
                value={wasteData.wastePlasticAmount}
                onChange={(e) => handleAmountChange(e, 'wastePlasticAmount')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.plasticRecycle}
                  onChange={(e) => handleCheckboxChange(e, 'plasticRecycle')}
                />
                Recycled
              </label>
            </div>
            {displayFlag && wasteData.wastePlasticAmount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for plastic waste.
              </div>
            )}

            {/* Paper Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Paper Waste (kg/month):</label>
              <input
                type="number"
                step=".1"
                min="0"
                value={wasteData.wastePaperAmount}
                onChange={(e) => handleAmountChange(e, 'wastePaperAmount')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.paperRecycle}
                  onChange={(e) => handleCheckboxChange(e, 'paperRecycle')}
                />
                Recycled
              </label>
            </div>
            {displayFlag && wasteData.wastePaperAmount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for paper waste.
              </div>
            )}

            {/* Metal Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Metal Waste (kg/month):</label>
              <input
                type="number"
                step=".1"
                min="0"
                value={wasteData.wasteMetalAmount}
                onChange={(e) => handleAmountChange(e, 'wasteMetalAmount')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.metalRecycle}
                  onChange={(e) => handleCheckboxChange(e, 'metalRecycle')}
                />
                Recycled
              </label>
            </div>
            {displayFlag && wasteData.wasteMetalAmount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for metal waste.
              </div>
            )}

            {/* Glass Waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>Glass Waste (kg/month):</label>
              <input
                type="number"
                step=".1"
                min="0"
                value={wasteData.wasteGlassAmount}
                onChange={(e) => handleAmountChange(e, 'wasteGlassAmount')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.glassRecycle}
                  onChange={(e) => handleCheckboxChange(e, 'glassRecycle')}
                />
                Recycled
              </label>
            </div>
            {displayFlag && wasteData.wasteGlassAmount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for glass waste.
              </div>
            )}

            {/* E-waste */}
            <div className="waste-item">
              <label style={{ marginLeft: '2em' }}>E-Waste (kg/month):</label>
              <input
                type="number"
                step=".1"
                min="0"
                value={wasteData.ewasteAmount}
                onChange={(e) => handleAmountChange(e, 'ewasteAmount')}
                onFocus={(e) => e.target.select()}
                placeholder="Enter amount"
              />
              <label>
                <input
                  type="checkbox"
                  checked={wasteData.ewasteRecycle}
                  onChange={(e) => handleCheckboxChange(e, 'ewasteRecycle')}
                />
                Recycled
              </label>
            </div>
            {displayFlag && wasteData.ewasteAmount === 0 && (
              <div style={{ color: '#C49102', fontSize: '0.8em', marginBottom: '2em', marginLeft: '16.5em' }}>
                NOTE: You have entered 0 Kg for e-waste.
              </div>
            )}
          </div>

          <button type="submit" className="submit-button">Save & Next</button>
          <button type="button" className="discard-button" onClick={handleDiscard}>Discard</button>
        </form>
      </div>
    </div>
  );
}

export default WasteDetails;
