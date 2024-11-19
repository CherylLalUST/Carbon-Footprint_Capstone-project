import React from 'react';

function YearSelector({ year, onChange }) {
  return (
    <div className="year-selector-container">
      <label htmlFor="year" className="year-selector-label">
        Select Year:
      </label>
      <select
        id="year"
        value={year}
        onChange={(e) => onChange(Number(e.target.value))}
        className="year-selector-dropdown"
      >
        {[2024, 2023, 2022, 2021].map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearSelector;
