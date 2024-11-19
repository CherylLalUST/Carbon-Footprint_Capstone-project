import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

function MonthCard({ month, emission, prevEmission, index }) {
  const isIncrease = prevEmission !== null && emission > prevEmission;

  return (
    <div className="month-card">
      {/* Header with month name and icon */}
      <div className="month-card-header">
        <h3 className="month-name">{month}</h3>
        {index > 0 && (
          <div className={`indicator ${isIncrease ? 'increase' : 'decrease'}`}>
            {isIncrease ? (
              <ArrowUpCircle className="icon" />
            ) : (
              <ArrowDownCircle className="icon" />
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
    </div>
  );
}

export default MonthCard;
