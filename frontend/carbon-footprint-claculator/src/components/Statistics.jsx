// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/Statistics.css';

// function Statistics() {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedHouseholds, setSelectedHouseholds] = useState('');

//   const handleFilterChange = (filterType, value) => {
//     if (filterType === 'date') setSelectedDate(value);
//     else if (filterType === 'country') setSelectedCountry(value);
//     else if (filterType === 'households') setSelectedHouseholds(value);
//   };

//   const handleFilterApply = () => {
//     // Fetch data based on selected filters
//     console.log("Applying filters:", {
//       date: selectedDate,
//       country: selectedCountry,
//       households: selectedHouseholds
//     });
//   };

//   return (
//     <div className="statistics-container">
//       <h2>Statistics Overview</h2>

//       <div className="filters-container">
//         <label>
//           Filter by Date:
//           <select value={selectedDate} onChange={(e) => handleFilterChange('date', e.target.value)}>
//             <option value="">Select Date</option>
//             <option value="2024-01-01">2024-01-01</option>
//             <option value="2024-01-02">2024-01-02</option>
//             {/* Add more date options */}
//           </select>
//         </label>

//         <label>
//           Filter by Country:
//           <select value={selectedCountry} onChange={(e) => handleFilterChange('country', e.target.value)}>
//             <option value="">Select Country</option>
//             <option value="USA">USA</option>
//             <option value="Canada">Canada</option>
//             {/* Add more country options */}
//           </select>
//         </label>

//         <label>
//            Filter by Households:
//         <input
//         type="text"
//         placeholder="Enter number of Householders"
//         value={selectedHouseholds}
//         onChange={(e) => handleFilterChange('households', e.target.value)}
//         />
//         </label>


//         <button onClick={handleFilterApply} className="apply-button">
//           Apply Filters
//         </button>
//       </div>

//       <div className="statistics-results">
//         {/* Mock statistics data, replace with actual fetched data */}
//         <h3>Filtered Results</h3>
//         <p>Date: {selectedDate || 'All Dates'}</p>
//         <p>Country: {selectedCountry || 'All Countries'}</p>
//         <p>Number of Households: {selectedHouseholds || 'All Households'}</p>
//       </div>
//     </div>
//   );
// }

// export default Statistics;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Statistics.css';

function Statistics() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedHouseholds, setSelectedHouseholds] = useState('');
  const [totalEmission, setTotalEmission] = useState(null);
  const [promptMessage, setPromptMessage] = useState('');

  const navigate = useNavigate();

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'date') setSelectedDate(value);
    else if (filterType === 'country') setSelectedCountry(value);
    else if (filterType === 'households') setSelectedHouseholds(value);
  };

  const handleFilterApply = () => {
    // Fetch data based on selected filters
    console.log("Applying filters:", {
      date: selectedDate,
      country: selectedCountry,
      households: selectedHouseholds
    });
  };

  useEffect(() => {
    // Simulate fetching the total emission from the backend
    axios.get('/api/emissions/total')
      .then(response => {
        const emission = response.data.totalEmission;
        setTotalEmission(emission);

        // Set prompt message based on the emission value
        if (emission < 500) {
          setPromptMessage("Your emissions are relatively low! Keep up the great work!");
        } else if (emission < 1500) {
          setPromptMessage("Your emissions are equivalent to cutting down 5 trees. Consider reducing waste.");
        } else {
          setPromptMessage("Your emissions are high! That's like driving a car for 6,000 miles!");
        }
      })
      .catch(error => console.error("Error fetching total emission:", error));
  }, []);

  return (
    <div className="statistics-container">
      <h2>Statistics Overview</h2>

      <div className="filters-container">
        <label>
          Filter by Date:
          <select value={selectedDate} onChange={(e) => handleFilterChange('date', e.target.value)}>
            <option value="">Select Date</option>
            <option value="2024-01-01">2024-01-01</option>
            <option value="2024-01-02">2024-01-02</option>
          </select>
        </label>

        <label>
          Filter by Country:
          <select value={selectedCountry} onChange={(e) => handleFilterChange('country', e.target.value)}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </label>

        <label>
          Filter by Households:
          <input
            type="text"
            placeholder="Enter number of Households"
            value={selectedHouseholds}
            onChange={(e) => handleFilterChange('households', e.target.value)}
          />
        </label>

        <button onClick={handleFilterApply} className="apply-button">
          Apply Filters
        </button>
      </div>

      <div className="statistics-results">
        <h3>Filtered Results</h3>
        <p>Date: {selectedDate || 'All Dates'}</p>
        <p>Country: {selectedCountry || 'All Countries'}</p>
        <p>Number of Households: {selectedHouseholds || 'All Households'}</p>
      </div>

      {/* Display Emission Info and Prompt */}
      {totalEmission !== null && (
        <div className="emission-card">
          <h4>Total Emission</h4>
          <p>{totalEmission} kg CO₂</p>
          <p className="emission-prompt">{promptMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Statistics;


