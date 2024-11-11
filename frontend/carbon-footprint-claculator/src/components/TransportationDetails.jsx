
import React, { useState } from 'react';
import '../css/TransportationDetails.css';


function TransportationDetails() {
  const [vehicles, setVehicles] = useState([]);
  const [numVehicles, setNumVehicles] = useState(0);

  const handleVehicleCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumVehicles(count);
    setVehicles(Array(count).fill({ fuelType: '', avgMileage: '', pollutionCleared: false, maintenanceDone: false }));
  };

  const handleChange = (index, field, value) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles[index] = { ...updatedVehicles[index], [field]: value };
    setVehicles(updatedVehicles);
  };

  return (
    <div className="transportation-container">
      <h2>Transportation Details</h2>
      
      <label>
        Number of Vehicles:
        <input 
          type="number" 
          value={numVehicles} 
          onChange={handleVehicleCountChange} 
          min="0" 
        />
      </label>

      <div className="vehicle-cards">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-card">
            <h3>Vehicle {index + 1}</h3>

            <label>
              Fuel Type:
              <select
                value={vehicle.fuelType}
                onChange={(e) => handleChange(index, 'fuelType', e.target.value)}
              >
                <option value="">Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
              </select>
            </label>

            <label>
              Avg Mileage:
              <input
                type="text"
                value={vehicle.avgMileage}
                onChange={(e) => handleChange(index, 'avgMileage', e.target.value)}
                placeholder="Enter mileage"
              />
            </label>

            {vehicle.fuelType !== 'electric' && (
              <label>
                Is Pollution Cleared:
                <select
                  value={vehicle.pollutionCleared}
                  onChange={(e) => handleChange(index, 'pollutionCleared', e.target.value === 'true')}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </label>
            )}

            <label>
              Is Maintenance Done:
              <select
                value={vehicle.maintenanceDone}
                onChange={(e) => handleChange(index, 'maintenanceDone', e.target.value === 'true')}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransportationForm;
