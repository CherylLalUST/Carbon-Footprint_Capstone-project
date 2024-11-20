// import React, { useState, useEffect } from 'react';
// import MonthCard from './MonthCard';
// import YearSelector from './YearSelector';
// import '../css/ViewStatistics.css';

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function ViewStatistics() {
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [monthlyData, setMonthlyData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const userStatisticsUrl = "http://localhost:9092/carbonFootprint/userDetails";
//   const token = sessionStorage.getItem("token");
//   const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

//   // useEffect(() => {
//   //   const fetchData = () => {
//   //     setLoading(true);
//   //     // Simulate random data for demonstration
//   //     const data = months.map((month) => ({
//   //       month,
//   //       emission: Math.random() * 1000 + 500,
//   //     }));
//   //     setMonthlyData(data);
//   //     setLoading(false);
//   //   };
//   // },[year]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         console.log(userStatisticsUrl + "/getStatisticsByUserDetailsId/" + userDetails.userDetailsId)
//         const response = await fetch(userStatisticsUrl + "/getStatisticsByUserDetailsId/" + userDetails.userDetailsId, {
//           method: "GET",
//           headers: { "Authorization": `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch statistics data");
//         }

//         const data = await response.json(); // Assuming this returns an array of statistics for the year
//         console.log(data);

//         // Validate data format
//       if (!data || !Array.isArray(data.statisticsResponses)) {
//         throw new Error("Invalid data format from server");
//       }

//       // Map response data to monthly data format
//       const formattedData = months.map((month, index) => {
//         const statistic = data.statisticsResponses.find((stat) =>
//           new Date(stat.statisticsDate).getMonth() === index
//         );

//         return {
//           month,
//           emission: statistic ? statistic.totalEmission : 0, // Default to 0 if no data for the month
//           details: statistic ? {
//             transportation: statistic.totalTransportationEmission,
//             waste: statistic.totalWasteEmission,
//             houseEnergy: statistic.totalHouseEnergyEmission,
//           } : null
//         };
//       });

//       setMonthlyData(formattedData);
//     } catch (error) {
//       console.error("Error fetching statistics:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, [year]);


//   return (
//     <div className="app-container">
//       <div className="content-wrapper">
//         <div className="header">
//           <h1 className="title">Carbon Emissions Statistics</h1>
//           <YearSelector year={year} onChange={setYear} />
//         </div>

//         {loading ? (
//           <div className="loading">
//             <div className="spinner" />
//           </div>
//         ) : (
//           <div className="grid-container">
//             {monthlyData.map((data, index) => (
//               <MonthCard
//                 key={data.month}
//                 month={data.month}
//                 emission={data.emission}
//                 prevEmission={index > 0 ? monthlyData[index - 1].emission : null}
//                 index={index}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default ViewStatistics;









// import React, { useState, useEffect } from 'react';
// import MonthCard from './MonthCard';
// import YearSelector from './YearSelector';
// import '../css/ViewStatistics.css';

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// function ViewStatistics() {
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [monthlyData, setMonthlyData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const userStatisticsUrl = "http://localhost:9092/carbonFootprint/userDetails";
//   const token = sessionStorage.getItem("token");
//   const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         console.log(userStatisticsUrl + "/getStatisticsByUserDetailsId/" + userDetails.userDetailsId);
//         const response = await fetch(userStatisticsUrl + "/getStatisticsByUserDetailsId/" + userDetails.userDetailsId, {
//           method: "GET",
//           headers: { "Authorization": `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch statistics data");
//         }

//         const data = await response.json(); // Assuming this returns an array of statistics for the year
//         console.log(data);

//         // Validate data format
//         if (!data || !Array.isArray(data.statisticsResponses)) {
//           throw new Error("Invalid data format from server");
//         }

//         // Map response data to monthly data format, ensuring we also include the year
//         const formattedData = months.map((month, index) => {
//           const statistic = data.statisticsResponses.find((stat) => {
//             const statDate = new Date(stat.statisticsDate);
//             return statDate.getMonth() === index && statDate.getFullYear() === year;
//           });

//           return {
//             month,
//             year, // Add the year here
//             emission: statistic ? statistic.totalEmission : 0, // Default to 0 if no data for the month
//             details: statistic ? {
//               transportation: statistic.totalTransportationEmission,
//               waste: statistic.totalWasteEmission,
//               houseEnergy: statistic.totalHouseEnergyEmission,
//             } : null
//           };
//         });

//         setMonthlyData(formattedData);
//       } catch (error) {
//         console.error("Error fetching statistics:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [year]);

//   return (
//     <div className="app-container">
//       <div className="content-wrapper">
//         <div className="header">
//           <h1 className="title">Carbon Emissions Statistics</h1>
//           <YearSelector year={year} onChange={setYear} />
//         </div>

//         {loading ? (
//           <div className="loading">
//             <div className="spinner" />
//           </div>
//         ) : (
//           <div className="grid-container">
//             {monthlyData.map((data, index) => (
//               <MonthCard
//                 key={`${data.year}-${data.month}`} // Unique key combining year and month
//                 month={data.month}
//                 year={data.year} // Pass the year here
//                 emission={data.emission}
//                 prevEmission={index > 0 ? monthlyData[index - 1].emission : null}
//                 index={index}
//               />
//             ))}
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
  const [error, setError] = useState(null);

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
  );
}

export default ViewStatistics;
