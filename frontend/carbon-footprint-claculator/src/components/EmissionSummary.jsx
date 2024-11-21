// import React, { useEffect, useState } from 'react';
// import '../css/EmissionSummary.css';

// function EmissionSummary() {
//   const [emissions, setEmissions] = useState({
//     houseEnergy: 0,
//     waste: 0,
//     transportation: 0,
//     total: 0,
//   });
//   const [insight, setInsight] = useState('');

//   const fetchEmissions = async () => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const responses = await Promise.all([
//         fetch("http://localhost:9097/carbonFootprint/houseEnergy/emission", { headers: { Authorization: `Bearer ${token}` } }),
//         fetch("http://localhost:9096/carbonFootprint/waste/emission", { headers: { Authorization: `Bearer ${token}` } }),
//         fetch("http://localhost:9098/carbonFootprint/transportation/emission", { headers: { Authorization: `Bearer ${token}` } }),
//       ]);
//       const [houseEnergy, waste, transportation] = await Promise.all(responses.map((res) => res.json()));

//       const total = houseEnergy.emission + waste.emission + transportation.emission;
//       setEmissions({ houseEnergy: houseEnergy.emission, waste: waste.emission, transportation: transportation.emission, total });

//       generateInsight(houseEnergy.emission, waste.emission, transportation.emission, total);
//     } catch (error) {
//       console.error('Error fetching emissions:', error);
//     }
//   };

//   const generateInsight = (houseEnergy, waste, transportation, total) => {
//     const treesNeeded = Math.round(total / 21); // Average tree absorbs 21kg CO₂ annually
//     const kmDriven = Math.round(total / 0.25); // Avg car emits 0.25kg CO₂ per km
//     const bulbDays = Math.round(total / 0.6); // 100-watt bulb emits ~0.6kg CO₂/day

//     if (total > 500) {
//       setInsight(`Your total emissions of **${total} kg CO₂** are quite high! To offset this, you'd need to plant approximately **${treesNeeded} trees**, or avoid driving a car for **${kmDriven} km.** Consider switching to renewable energy and reducing waste.`);
//     } else if (waste > houseEnergy && waste > transportation) {
//       setInsight(`Waste emissions are your largest contributor at **${waste} kg CO₂.** This is equivalent to leaving a 100-watt bulb on for **${bulbDays} days.** Focus on waste reduction and recycling.`);
//     } else if (houseEnergy > transportation && houseEnergy > waste) {
//       setInsight(`House energy emissions of **${houseEnergy} kg CO₂** are the largest contributor. This would require planting **${Math.round(houseEnergy / 21)} trees** to offset. Consider switching to renewable energy sources.`);
//     } else {
//       setInsight(`Transportation emissions of **${transportation} kg CO₂** are the largest contributor. This is equivalent to driving a car for **${Math.round(transportation / 0.25)} km.** Consider opting for public transport or carpooling.`);
//     }
//   };


//   useEffect(() => {
//     fetchEmissions();
//   }, []);

//   return (
//     <div className="emission-summary-container">
//       <h2>Emission Summary</h2>
//       <div className="emission-details">
//         <p><strong>House Energy Emission:</strong> {emissions.houseEnergy} kg CO2</p>
//         <p><strong>Waste Emission:</strong> {emissions.waste} kg CO2</p>
//         <p><strong>Transportation Emission:</strong> {emissions.transportation} kg CO2</p>
//         <p><strong>Total Emission:</strong> {emissions.total} kg CO2</p>
//       </div>
//       <div className="emission-insight">
//         <h3>Insight</h3>
//         <p>{insight}</p>
//       </div>
//     </div>
//   );
// }

// export default EmissionSummary;







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
      houseEnergy: houseResponseData.totalHouseEmission,
    }))}

    let wasteResponse = await fetch(wasteUrl + "/getWasteDetailsById/" + wasteId, { headers: { Authorization: `Bearer ${token}` } });
    let wasteResponseData = await wasteResponse.json();
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      waste: wasteResponseData.totalWasteEmission,
    }))

    let transportationResponse = await fetch(transportationUrl + "/getTransportationDetailsById/" + transportationDetailsId, { headers: { Authorization: `Bearer ${token}` } });
    let transportationResponseData = await transportationResponse.json();
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      transportation: transportationResponseData.totalTransportationEmission,
    }))
    // Fetch and update all emission values
    // fetch(houseEnergyUrl + "/getHouseEnergyDetailsById/" + houseId, { headers: { Authorization: `Bearer ${token}` } })
    //   .then((res) => res.json())
    //   .then((resData) => {
    //     setEmissions((prevEmissions) => ({
    //       ...prevEmissions,
    //       houseEnergy: resData.totalHouseEmission,
    //     }));
    //   });

    // fetch(wasteUrl + "/getWasteDetailsById/" + wasteId, { headers: { Authorization: `Bearer ${token}` } })
    //   .then((res) => res.json())
    //   .then((resData) => {
    //     setEmissions((prevEmissions) => ({
    //       ...prevEmissions,
    //       waste: resData.totalWasteEmission,
    //     }));
    //   });

    // fetch(transportationUrl + "/getTransportationDetailsById/" + transportationDetailsId, { headers: { Authorization: `Bearer ${token}` } })
    //   .then((res) => res.json())
    //   .then((resData) => {
    //     setEmissions((prevEmissions) => ({
    //       ...prevEmissions,
    //       transportation: resData.totalTransportationEmission,
    //     }));
    //   });

    console.log("emissions : ", emissions);
    console.log("new total ", houseResponseData.totalHouseEmission + wasteResponseData.totalWasteEmission + transportationResponseData.totalTransportationEmission)
    //console.log("total : ", emissions.houseEnergy + emissions.waste + emissions.transportation)
    const tE = houseResponseData.totalHouseEmission + wasteResponseData.totalWasteEmission + transportationResponseData.totalTransportationEmission;
    setTotalEmission(tE);
    console.log("set",totalEmission);

    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      total: totalEmission,
    }))

    generateInsight(houseResponseData.totalHouseEmission, wasteResponseData.totalWasteEmission, transportationResponseData.totalTransportationEmission, tE);
    generateAnnualInsight(houseResponseData.totalHouseEmission, wasteResponseData.totalWasteEmission, transportationResponseData.totalTransportationEmission, tE);
  };

  function generateInsight(houseEnergy, waste, transportation, total) {
    const treesNeeded = Math.round(total / 21); // Average tree absorbs 21kg CO₂ annually
    const kmDriven = Math.round(total / 0.25); // Avg car emits 0.25kg CO₂ per km
    const bulbDays = Math.round(total / 0.6); // 100-watt bulb emits ~0.6kg CO₂/day

    if (total > 500) {
      setInsight(`Your total emissions of ${total} kg CO₂ are quite high! To offset this, you'd need to plant approximately ${treesNeeded} trees, or avoid driving a car for ${kmDriven} km. Consider switching to renewable energy and reducing waste.`);
    } else if (waste > houseEnergy && waste > transportation) {
      setInsight(`Waste emissions are your largest contributor at ${waste} kg CO₂. This is equivalent to leaving a 100-watt bulb on for ${bulbDays} days. Focus on waste reduction and recycling.`);
    } else if (houseEnergy > transportation && houseEnergy > waste) {
      setInsight(`House energy emissions of ${houseEnergy} kg CO₂ are the largest contributor. This would require planting ${Math.round(houseEnergy / 21)} trees to offset. Consider switching to renewable energy sources.`);
    } else {
      setInsight(`Transportation emissions of ${transportation} kg CO₂ are the largest contributor. This is equivalent to driving a car for ${Math.round(transportation / 0.25)} km. Consider opting for public transport or carpooling.`);
    }
  };

  function generateAnnualInsight(houseEnergy, waste, transportation, totalEmission) {
    const annualTotal = totalEmission * 12;
    const annualTrees = Math.round(annualTotal / 21);
    const annualKmDriven = Math.round(annualTotal / 0.25);
    const annualBulbDays = Math.round(annualTotal / 0.6);

    setAnnualInsight(`
      Over the course of a year, your estimated carbon footprint totals ${annualTotal} kg CO₂.
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
          <p><strong>House Energy Emission:</strong> {emissions.houseEnergy} kg CO2</p>
          <p><strong>Waste Emission:</strong> {emissions.waste} kg CO2</p>
          <p><strong>Transportation Emission:</strong> {emissions.transportation} kg CO2</p>
          <p><strong>Total Emission:</strong> {totalEmission} kg CO2</p>
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
