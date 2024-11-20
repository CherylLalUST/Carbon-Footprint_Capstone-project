import React, { useEffect, useState } from 'react';
import '../css/EmissionSummary.css';

function EmissionSummary() {
  const [emissions, setEmissions] = useState({
    houseEnergy: 0,
    waste: 0,
    transportation: 0,
    total: 0,
  });
  const [insight, setInsight] = useState('');

  const fetchEmissions = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const responses = await Promise.all([
        fetch("http://localhost:9097/carbonFootprint/houseEnergy/emission", { headers: { Authorization: `Bearer ${token}` } }),
        fetch("http://localhost:9096/carbonFootprint/waste/emission", { headers: { Authorization: `Bearer ${token}` } }),
        fetch("http://localhost:9098/carbonFootprint/transportation/emission", { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      const [houseEnergy, waste, transportation] = await Promise.all(responses.map((res) => res.json()));
      
      const total = houseEnergy.emission + waste.emission + transportation.emission;
      setEmissions({ houseEnergy: houseEnergy.emission, waste: waste.emission, transportation: transportation.emission, total });

      generateInsight(houseEnergy.emission, waste.emission, transportation.emission, total);
    } catch (error) {
      console.error('Error fetching emissions:', error);
    }
  };

  const generateInsight = (houseEnergy, waste, transportation, total) => {
    const treesNeeded = Math.round(total / 21); // Average tree absorbs 21kg CO₂ annually
    const kmDriven = Math.round(total / 0.25); // Avg car emits 0.25kg CO₂ per km
    const bulbDays = Math.round(total / 0.6); // 100-watt bulb emits ~0.6kg CO₂/day
  
    if (total > 500) {
      setInsight(`Your total emissions of **${total} kg CO₂** are quite high! To offset this, you'd need to plant approximately **${treesNeeded} trees**, or avoid driving a car for **${kmDriven} km.** Consider switching to renewable energy and reducing waste.`);
    } else if (waste > houseEnergy && waste > transportation) {
      setInsight(`Waste emissions are your largest contributor at **${waste} kg CO₂.** This is equivalent to leaving a 100-watt bulb on for **${bulbDays} days.** Focus on waste reduction and recycling.`);
    } else if (houseEnergy > transportation && houseEnergy > waste) {
      setInsight(`House energy emissions of **${houseEnergy} kg CO₂** are the largest contributor. This would require planting **${Math.round(houseEnergy / 21)} trees** to offset. Consider switching to renewable energy sources.`);
    } else {
      setInsight(`Transportation emissions of **${transportation} kg CO₂** are the largest contributor. This is equivalent to driving a car for **${Math.round(transportation / 0.25)} km.** Consider opting for public transport or carpooling.`);
    }
  };
  

  useEffect(() => {
    fetchEmissions();
  }, []);

  return (
    <div className="emission-summary-container">
      <h2>Emission Summary</h2>
      <div className="emission-details">
        <p><strong>House Energy Emission:</strong> {emissions.houseEnergy} kg CO2</p>
        <p><strong>Waste Emission:</strong> {emissions.waste} kg CO2</p>
        <p><strong>Transportation Emission:</strong> {emissions.transportation} kg CO2</p>
        <p><strong>Total Emission:</strong> {emissions.total} kg CO2</p>
      </div>
      <div className="emission-insight">
        <h3>Insight</h3>
        <p>{insight}</p>
      </div>
    </div>
  );
}

export default EmissionSummary;
