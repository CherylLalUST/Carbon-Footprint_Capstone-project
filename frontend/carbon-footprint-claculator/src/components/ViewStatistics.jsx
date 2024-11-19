// import React, { useState, useEffect } from 'react';
// import '../css/ViewStatistics.css';

// const ViewStatistics = () => {
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [monthlyData, setMonthlyData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEmissions = async () => {
//       try {
//         const response = await fetch(
//           `http://your-backend-url/statistics/emissions?year=${year}`
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data: ${response.status}`);
//         }
//         const data = await response.json();
//         setMonthlyData(data);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setMonthlyData([]);
//       }
//     };

//     fetchEmissions();
//   }, [year]);

//   const handleYearChange = (e) => {
//     setYear(Number(e.target.value));
//   };

//   return (
//     <div className="statistics-container">
//       <div className="year-selector">
//         <label htmlFor="year">Select Year:</label>
//         <select id="year" value={year} onChange={handleYearChange}>
//           {[2024, 2023, 2022, 2021].map((y) => (
//             <option key={y} value={y}>
//               {y}
//             </option>
//           ))}
//         </select>
//       </div>

//       {error && <p className="error">{error}</p>}

//       <div className="card-container">
//         {monthlyData.length > 0 ? (
//           monthlyData.map((data, index) => {
//             const isHigher =
//               index > 0 &&
//               monthlyData[index - 1].emission !== null &&
//               data.emission !== null &&
//               data.emission > monthlyData[index - 1].emission;

//             return (
//               <div key={data.month} className="card">
//                 <h3>{data.month}</h3>
//                 {data.emission !== null ? (
//                   <>
//                     <p>Carbon Emission: {data.emission} kg</p>
//                     <button className={`indicator ${isHigher ? 'red' : 'green'}`}>
//                       {isHigher ? 'High' : 'Low'}
//                     </button>
//                   </>
//                 ) : (
//                   <p>No data available</p>
//                 )}
//               </div>
//             );
//           })
//         ) : (
//           <p className="no-data">Nothing is there to be seen</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewStatistics;







// import React, { useState, useEffect } from 'react';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
// import '../css/ViewStatistics.css'; 

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December',
// ];

// function ViewStatistics() {
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [monthlyData, setMonthlyData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = () => {
//       setLoading(true);
//       const data = months.map((month) => ({
//         month,
//         emission: Math.random() * 1000 + 500,
//       }));
//       setMonthlyData(data);
//       setLoading(false);
//     };
//     fetchData();
//   }, [year]);

//   return (
//     <div className="app-container">
//       <div className="content-wrapper">
//         <div className="header">
//           <h1 className="title">Carbon Emissions Statistics</h1>
//           <div className="year-selector">
//             <label htmlFor="year">Select Year:</label>
//             <select
//               id="year"
//               value={year}
//               onChange={(e) => setYear(Number(e.target.value))}
//             >
//               {[2024, 2023, 2022, 2021].map((y) => (
//                 <option key={y} value={y}>
//                   {y}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {loading ? (
//           <div className="loading">
//             <div className="spinner"></div>
//           </div>
//         ) : (
//           <div className="grid-container">
//             {monthlyData.map((data, index) => {
//               const prevEmission = index > 0 ? monthlyData[index - 1].emission : null;
//               const isIncrease = prevEmission !== null && data.emission > prevEmission;

//               return (
//                 <div key={data.month} className="card">
//                   <div className="card-header">
//                     <h3>{data.month}</h3>
//                     {index > 0 && (
//                       <div className={`indicator ${isIncrease ? 'increase' : 'decrease'}`}>
//                         {isIncrease ? (
//                           <ArrowUpCircle className="icon" />
//                         ) : (
//                           <ArrowDownCircle className="icon" />
//                         )}
//                       </div>
//                     )}
//                   </div>
//                   <div className="card-body">
//                     <p className="emission">
//                       {data.emission.toFixed(1)}
//                       <span>kg CO₂</span>
//                     </p>
//                     {index > 0 && (
//                       <p className={`change ${isIncrease ? 'increase' : 'decrease'}`}>
//                         {isIncrease ? '+' : '-'}
//                         {Math.abs(data.emission - prevEmission).toFixed(1)} kg from previous month
//                       </p>
//                     )}
//                   </div>
//                   <div className="progress-bar">
//                     <div
//                       className={`progress ${isIncrease ? 'bg-red' : 'bg-green'}`}
//                       style={{ width: `${(data.emission / 1500) * 100}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ViewStatistics;








import React, { useState, useEffect } from 'react';
import MonthCard from './MonthCard';
import YearSelector from './YearSelector';
import '../css/ViewStatistics.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function ViewStatistics() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      // Simulate random data for demonstration
      const data = months.map((month) => ({
        month,
        emission: Math.random() * 1000 + 500,
      }));
      setMonthlyData(data);
      setLoading(false);
    };

    fetchData();
  }, [year]);

  return (
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
                key={data.month}
                month={data.month}
                emission={data.emission}
                prevEmission={index > 0 ? monthlyData[index - 1].emission : null}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default ViewStatistics;
