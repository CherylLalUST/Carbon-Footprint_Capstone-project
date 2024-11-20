import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CarbonEmissionModal from './CarbonEmissionModal.jsx';
import { FaGlobe } from 'react-icons/fa';
import '../css/Statistics.css';

function Statistics() {

  const [userDetails, setUserDetails] = useState();
  const [userStatisticsData, setUserStatisticsData] = useState();
  const [isTrackedThisMonth, setIsTrackedThisMonth] = useState(false);
  let username = sessionStorage.getItem("username");
  console.log("username : " + username);
  const userDetailsUrl = "http://localhost:9092/carbonFootprint/userDetails";
  const statisticsUrl = "http://localhost:9098/carbonFootprint/statistics";
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
        fetch(userDetailsUrl + "/getStatisticsByUserDetailsId/" + userDetailsData.userDetailsId, {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` },
        })
        .then((res) => res.json())
        .then((statData) => {
          setUserStatisticsData({...statData});
          console.log(statData);
          // Check if emissions have already been tracked for the current month
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
        const currentYear = currentDate.getFullYear();

        const trackedThisMonth = (statData.statisticsResponses || []).some((stat) => {
          const statisticsDate = new Date(stat.statisticsDate);
          return (
            statisticsDate.getMonth() + 1 === currentMonth &&
            statisticsDate.getFullYear() === currentYear
          );
        })
        setIsTrackedThisMonth(trackedThisMonth);
      })
    })
  }, []);

  function handleTrackEmissions(){
    if (isTrackedThisMonth) return;
    fetch(statisticsUrl + "/addDetails", {
      method: "POST",
      body: JSON.stringify({userDetailsId : userDetails.userDetailsId}),
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    })
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem("statisticsId",data.statisticsId);
      console.log(sessionStorage.getItem("statisticsId"));
      navigate('/transportation');
    });
    
  }

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
            <h1 onClick={()=> (navigate("/userHomePage"))} style={{ cursor: "pointer" }}>Carbon-Wise</h1>
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

      <div className="statistics-page">
        {/* Modal for Carbon Emission */}
        <CarbonEmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Cards Section */}
        <div className="cards-container">
          <div className="card" onClick={() => navigate('/view-statistics')}>
            <h4>View Statistics</h4>
            <p>Click here to view your emissions by month.</p>
          </div>
          <div
            className={`card ${isTrackedThisMonth ? 'disabled-card' : ''}`}
            onClick={handleTrackEmissions}
            style={{ pointerEvents: isTrackedThisMonth ? 'none' : 'auto', opacity: isTrackedThisMonth ? 0.6 : 1 }}
          >
            <h4>Track Emissions</h4>
            <p>
              {isTrackedThisMonth
                ? 'You have already tracked emissions for this month.'
                : 'Click here to track your Monthly Carbon Emissions!'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
