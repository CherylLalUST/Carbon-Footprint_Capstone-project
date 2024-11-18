import React, { useState, useEffect } from 'react';
import '../css/ViewStatistics.css';

const ViewStatistics = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyData, setMonthlyData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmissions = async () => {
      try {
        const response = await fetch(
          `http://your-backend-url/statistics/emissions?year=${year}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setMonthlyData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setMonthlyData([]);
      }
    };

    fetchEmissions();
  }, [year]);

  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
  };

  return (
    <div className="statistics-container">
      <div className="year-selector">
        <label htmlFor="year">Select Year:</label>
        <select id="year" value={year} onChange={handleYearChange}>
          {[2024, 2023, 2022, 2021].map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="card-container">
        {monthlyData.length > 0 ? (
          monthlyData.map((data, index) => {
            const isHigher =
              index > 0 &&
              monthlyData[index - 1].emission !== null &&
              data.emission !== null &&
              data.emission > monthlyData[index - 1].emission;

            return (
              <div key={data.month} className="card">
                <h3>{data.month}</h3>
                {data.emission !== null ? (
                  <>
                    <p>Carbon Emission: {data.emission} kg</p>
                    <button className={`indicator ${isHigher ? 'red' : 'green'}`}>
                      {isHigher ? 'High' : 'Low'}
                    </button>
                  </>
                ) : (
                  <p>No data available</p>
                )}
              </div>
            );
          })
        ) : (
          <p className="no-data">Nothing is there to be seen</p>
        )}
      </div>
    </div>
  );
};

export default ViewStatistics;
