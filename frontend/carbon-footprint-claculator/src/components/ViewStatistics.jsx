import React, { useState, useEffect } from 'react';
import MonthCard from './MonthCard';
import YearSelector from './YearSelector';
import CarbonEmissionModal from './CarbonEmissionModal.jsx';
import '../css/ViewStatistics.css';
import { FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function ViewStatistics() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let navigate = useNavigate();

  const userStatisticsUrl = "http://localhost:9092/carbonFootprint/userDetails";
  const token = sessionStorage.getItem("token");
  const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log(userStatisticsUrl + "/getStatisticsByUserDetailsId/" + userDetails.userDetailsId);
        const response = await fetch(userStatisticsUrl + "/getStatisticsByUserDetailsId/" + userDetails.userDetailsId, {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch statistics data");
        }

        const data = await response.json(); // Assuming this returns an array of statistics for the year
        console.log(data);

        // Validate data format
        if (!data || !Array.isArray(data.statisticsResponses)) {
          throw new Error("Invalid data format from server");
        }

        // Map response data to monthly data format, ensuring we also include the year
        const formattedData = months.map((month, index) => {
          const statistic = data.statisticsResponses.find((stat) => {
            const statDate = new Date(stat.statisticsDate);
            return statDate.getMonth() === index && statDate.getFullYear() === year;
          });

          return {
            month,
            year, // Add the year here
            emission: statistic ? statistic.totalEmission : 0, // Default to 0 if no data for the month
            details: statistic ? {
              transportation: statistic.totalTransportationEmission,
              waste: statistic.totalWasteEmission,
              houseEnergy: statistic.totalHouseEnergyEmission,
            } : null
          };
        });

        setMonthlyData(formattedData);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year]);

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
      <CarbonEmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="app-container">
      <div className="content-wrapper">
        <div className="header">
          <h1 className="title">Carbon Emissions Statistics</h1>
          <YearSelector year={year} onChange={setYear} />
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner" />
          </div>
        ) : (
          <div className="grid-container">
            {monthlyData.map((data, index) => (
              <MonthCard
                key={`${data.year}-${data.month}`} // Unique key combining year and month
                month={data.month}
                year={data.year} // Pass the year here
                emission={data.emission}
                prevEmission={index > 0 ? monthlyData[index - 1].emission : null}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    </>

    
  );
}

export default ViewStatistics;
