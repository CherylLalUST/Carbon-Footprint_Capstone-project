import React, { useEffect, useState } from 'react';
import '../css/EmissionSummary.css';
import { useNavigate } from 'react-router-dom';
import CarbonEmissionModal from './CarbonEmissionModal';
import { FaGlobe } from 'react-icons/fa';

function EmissionSummary() {

  let navigate = useNavigate();
  const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [emissions, setEmissions] = useState({
    houseEnergy: 0,
    waste: 0,
    transportation: 0,
    total: 0,
  });
  const [insight, setInsight] = useState('');
  const [annualInsight, setAnnualInsight] = useState('');
  const [totalEmission, setTotalEmission] = useState(0);

  const transportationUrl = "http://localhost:9094/carbonFootprint/transportationDetails";
  const transportationDetailsId = sessionStorage.getItem("transportationDetailsId");

  const wasteUrl = "http://localhost:9096/carbonFootprint/waste";
  const wasteId = sessionStorage.getItem("wasteId");

  const houseEnergyUrl = "http://localhost:9097/carbonFootprint/houseEnergy";
  const houseId = sessionStorage.getItem("houseId");
  const token = sessionStorage.getItem("token");

  async function fetchEmissions() {

    let houseResponse = await fetch(houseEnergyUrl + "/getHouseEnergyDetailsById/" + houseId, { headers: { Authorization: `Bearer ${token}` } });
    let houseResponseData = await houseResponse.json();
    if(houseResponse.ok){
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      houseEnergy: houseResponseData.totalHouseEmission.toFixed(2),
    }))}

    let wasteResponse = await fetch(wasteUrl + "/getWasteDetailsById/" + wasteId, { headers: { Authorization: `Bearer ${token}` } });
    let wasteResponseData = await wasteResponse.json();
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      waste: wasteResponseData.totalWasteEmission.toFixed(2),
    }))

    let transportationResponse = await fetch(transportationUrl + "/getTransportationDetailsById/" + transportationDetailsId, { headers: { Authorization: `Bearer ${token}` } });
    let transportationResponseData = await transportationResponse.json();
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      transportation: transportationResponseData.totalTransportationEmission.toFixed(2),
    }))

    const tE = houseResponseData.totalHouseEmission + wasteResponseData.totalWasteEmission + transportationResponseData.totalTransportationEmission;
    setTotalEmission(tE.toFixed(2));
    
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      total: totalEmission.toFixed(2),
    }))

    generateInsight(houseResponseData.totalHouseEmission, wasteResponseData.totalWasteEmission, transportationResponseData.totalTransportationEmission, tE);
    generateAnnualInsight(houseResponseData.totalHouseEmission, wasteResponseData.totalWasteEmission, transportationResponseData.totalTransportationEmission, tE);
  };

  function generateInsight(houseEnergy, waste, transportation, total) {
    const treesNeeded = Math.round(total / 21); // Average tree absorbs 21kg CO₂ annually
    const kmDriven = Math.round(total / 0.25); // Avg car emits 0.25kg CO₂ per km
    const bulbDays = Math.round(total / 0.6); // 100-watt bulb emits ~0.6kg CO₂/day

    if (total <= 900) {
      setInsight(`Great job! Your carbon emissions are below 900, which is a commendable effort toward sustainability. This shows that you’re making conscious choices to reduce your environmental impact. Keep up the good work and inspire others to follow your example. Together, we can build a greener, healthier planet!`);
    } else if (waste > houseEnergy && waste > transportation) {
      setInsight(`Your total emissions of ${total} KgCO₂e of GHG emissions are quite high! To offset this, you'd need to plant approximately ${treesNeeded} trees, or avoid driving a car for ${kmDriven} km. Consider switching to renewable energy and reducing waste. Waste emissions are your largest contributor at ${waste} KgCO₂e of GHG emissions. This is equivalent to leaving a 100-watt bulb on for ${bulbDays} days. Focus on waste reduction and recycling.`);
    } else if (houseEnergy > transportation && houseEnergy > waste) {
      setInsight(`Your total emissions of ${total} KgCO₂e of GHG emissions are quite high! To offset this, you'd need to plant approximately ${treesNeeded} trees, or avoid driving a car for ${kmDriven} km. Consider switching to renewable energy and reducing waste. House energy emissions of ${houseEnergy} KgCO₂e of GHG emissions are the largest contributor. This would require planting ${Math.round(houseEnergy / 21)} trees to offset. Consider switching to renewable energy sources.`);
    } else {
      setInsight(`Your total emissions of ${total} KgCO₂e of GHG emissions are quite high! To offset this, you'd need to plant approximately ${treesNeeded} trees, or avoid driving a car for ${kmDriven} km. Consider switching to renewable energy and reducing waste. Transportation emissions of ${transportation} KgCO₂e of GHG emissions are the largest contributor. This is equivalent to driving a car for ${Math.round(transportation / 0.25)} km. Consider opting for public transport or carpooling.`);
    }
  };

  function generateAnnualInsight(houseEnergy, waste, transportation, totalEmission) {
    const annualTotal = totalEmission * 12;
    const annualTrees = Math.round(annualTotal / 21);
    const annualKmDriven = Math.round(annualTotal / 0.25);
    const annualBulbDays = Math.round(annualTotal / 0.6);

    setAnnualInsight(`
      Over the course of a year, your estimated carbon footprint totals ${annualTotal}KgCO₂e of GHG emissions.
      - 🌳 This would require planting approximately ${annualTrees} trees to offset.
      - 🚗 It's equivalent to driving a car for ${annualKmDriven} km.
      - 💡 It's like keeping a 100-watt bulb on for ${annualBulbDays} days.
    `);
  };

  useEffect(() => {
    fetchEmissions();
  }, []);


  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (

    <>
      {userDetails ? (
        <div className="navbar">
          <div className="navbar-left" onClick={() => setIsModalOpen(true)}>
            <p>What is Carbon Emission?</p>
          </div>
          <div className="navbar-center">
            <h1 onClick={() => navigate("/userHomePage")} style={{ cursor: "pointer" }}>Carbon Print</h1>
            <p>Welcome {userDetails.username}, you're tracking for {userDetails.numberOfHousehold} people!</p>
          </div>
          <div className="navbar-right">
            <FaGlobe size={24} />
            <span>{userDetails.countryName}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        ""
      )}
      <CarbonEmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />



      <div className="emission-summary-container">
        <h2>Emission Summary</h2>
        <div className="emission-details">
          <p><strong>House Energy Emission:</strong> {emissions.houseEnergy} KgCO₂e of GHG emissions</p>
          <p><strong>Waste Emission:</strong> {emissions.waste} KgCO₂e of GHG emissions</p>
          <p><strong>Transportation Emission:</strong> {emissions.transportation} KgCO₂e of GHG emissions</p>
          <p><strong>Total Emission:</strong> {totalEmission} KgCO₂e of GHG emissions</p>
        </div>
        <div className="emission-insight">
          <h3>Monthly Insight</h3>
          <p>{insight}</p>
        </div>
        <div className="annual-insight">
          <h3>Annual Projection</h3>
          <p>{annualInsight}</p>
        </div>
        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}
          onClick={() => (navigate("/userHomePage"))}>Home</button>
      </div>
    </>

  );
}

export default EmissionSummary;
