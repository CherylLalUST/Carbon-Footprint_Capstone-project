import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CarbonEmissionModal from './CarbonEmissionModal.jsx';
import { FaGlobe } from 'react-icons/fa';
import '../css/Statistics.css';

function Statistics() {

  const [userDetails, setUserDetails] = useState();
  let username = sessionStorage.getItem("username");
  console.log("username : " + username);
  const userDetailsUrl = "http://localhost:9092/carbonFootprint/userDetails";
  const statisticsUrl = "http://localhost:9098/carbonFootprint/statistics"
  const token = sessionStorage.getItem("token");

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from the backend
    fetch(userDetailsUrl + "/getUserDetailsByUsername/" + username, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((userDetailsData) => {
        console.log("userDetailsData : ", userDetailsData);
        sessionStorage.setItem('userDetails', JSON.stringify(userDetailsData));
        // put userDEtailsData in state variable userDetails
        setUserDetails({ ...userDetailsData });
        //
      });
  }, []);

  function handleTrackEmissions(){
    fetch(statisticsUrl + "/addDetails", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    })
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem("statisticsId",data.statisticsId);
      navigate('/transportation');
    });
    
  }

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <>
      {userDetails ?
        <div className="navbar">
          <div className="navbar-left" onClick={() => setIsModalOpen(true)}>
            <p>What is Carbon Emission?</p>
          </div>
          <div className="navbar-center">
            <h1>Carbon-Wise</h1>
            <p>Welcome {userDetails.username}, you're tracking for {userDetails.numberOfHousehold} people!</p>
          </div>
          <div className="navbar-right">
            <FaGlobe size={24} />
            <span>{userDetails.countryName}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div> : ""}


      <div className="statistics-page">
        {/* Navbar */}


        {/* Modal for Carbon Emission */}
        <CarbonEmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Cards Section */}
        <div className="cards-container">
          <div className="card" onClick={() => navigate('/view-statistics')}>
            <h4>View Statistics</h4>
            <p>Click here to view your emissions by month.</p>
          </div>
          <div className="card" onClick={handleTrackEmissions}>
            <h4>Track Emissions</h4>
            <p>Click here to track emissions your Monthly Carbon Emissions!.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
