// import React from 'react';
// import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// function MonthCard({ month, year, emission, prevEmission, index, details }) {
//   const isIncrease = prevEmission !== null && emission > prevEmission;

//   return (
//     <div className="month-card">
//       {/* Header with month name and year */}
//       <div className="month-card-header">
//         <h3 className="month-name">{month} {year}</h3>
//         {index > 0 && (
//           <div className={`indicator ${isIncrease ? 'increase' : 'decrease'}`}>
//             {isIncrease ? (
//               <ArrowUpCircle className="icon" />
//             ) : (
//               <ArrowDownCircle className="icon" />
//             )}
//           </div>
//         )}
//       </div>

//       {/* Emission details */}
//       <div className="emission-details">
//         <p className="emission-value">
//           {emission.toFixed(1)}
//           <span className="unit">kg CO₂</span>
//         </p>
//         {index > 0 && (
//           <p className={`change ${isIncrease ? 'increase' : 'decrease'}`}>
//             {isIncrease ? '+' : '-'}
//             {Math.abs(emission - prevEmission).toFixed(1)} kg from previous
//           </p>
//         )}
//       </div>

//       {/* Individual emissions */}
//       {details && (
//         <div className="individual-emissions">
//           <p>🚗: {details.transportation.toFixed(1)} kg CO₂</p>
//           <p>🗑️: {details.waste.toFixed(1)} kg CO₂</p>
//           <p>⚡: {details.houseEnergy.toFixed(1)} kg CO₂</p>
//         </div>
//       )}

//       {/* Progress bar */}
//       <div className="progress-section">
//         <div className="progress-bar">
//           <div
//             className={`progress ${isIncrease ? 'bg-red' : 'bg-green'}`}
//             style={{
//               width: `${(emission / 1500) * 100}%`,
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MonthCard;







import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function MonthCard({ month, year, emission, prevEmission, index, details }) {
  const isIncrease = prevEmission !== null && emission > prevEmission;
  let navigate = useNavigate();

  return (
    <div className="month-card">
      {/* Header with month name and year */}
      <div className="month-card-header">
        <h3 className="month-name">{month} {year}</h3>
        {index > 0 && (
          <div className={`indicator ${isIncrease ? 'increase' : 'decrease'}`}>
            {isIncrease ? (
              <ArrowUpCircle className="icon" color="#e53e3e" />
            ) : (
              <ArrowDownCircle className="icon" color="#38a169" />
            )}

          </div>
        )}
      </div>

      {/* Emission details */}
      <div className="emission-details">
        <p className="emission-value">
          {emission.toFixed(1)}
          <span className="unit">kg CO₂</span>
        </p>
        {index > 0 && (
          <p className={`change ${isIncrease ? 'increase' : 'decrease'}`}>
            {isIncrease ? '+' : '-'}
            {Math.abs(emission - prevEmission).toFixed(1)} kg from previous
          </p>
        )}
      </div>

      {/* Individual emissions or note */}
      {emission === 0 ? (
        <p className="note-message" style={{ color: '#C49102', fontSize: '0.8em', marginTop: '1em' }}>Note: You did not track for this month</p>
      ) : (
        details && (
          <div className="individual-emissions">
            <p>🚗: {details.transportation.toFixed(1)} kg CO₂</p>
            <p>🗑️: {details.waste.toFixed(1)} kg CO₂</p>
            <p>⚡: {details.houseEnergy.toFixed(1)} kg CO₂</p>
          </div>
        )
      )}

      {/* Progress bar */}
      <div className="progress-section">
        <div className="progress-bar">
          <div
            className={`progress ${isIncrease ? 'bg-red' : 'bg-green'}`}
            style={{
              width: `${(emission / 1500) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      {/* <button className="submit-button" onClick={() => (navigate("/summary"))}>Monthly Summary</button> */}
    </div>
  );
}

export default MonthCard;
