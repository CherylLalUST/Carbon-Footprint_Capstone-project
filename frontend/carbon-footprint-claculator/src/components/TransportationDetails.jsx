import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/TransportationDetails.css';

function TransportationDetails() {
  const [vehicles, setVehicles] = useState([]);
  const [numVehicles, setNumVehicles] = useState(0);
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  const handleVehicleCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setNumVehicles(count);
    setVehicles(Array(count).fill({ fuelType: '', avgMileage: '', pollutionCleared: false, maintenanceDone: false }));
    setFormErrors(Array(count).fill({ fuelType: true, avgMileage: true }));
  };

  const handleChange = (index, field, value) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles[index] = { ...updatedVehicles[index], [field]: value };
    setVehicles(updatedVehicles);

    const updatedErrors = [...formErrors];
    updatedErrors[index] = {
      ...updatedErrors[index],
      [field]: !!value
    };
    setFormErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all vehicle fields are filled out
    const errors = vehicles.map(vehicle => ({
      fuelType: !!vehicle.fuelType,
      avgMileage: !!vehicle.avgMileage,
    }));

    const isValid = errors.every(error => error.fuelType && error.avgMileage);
    setFormErrors(errors);

    if (isValid) {
      console.log("Form submitted successfully:", vehicles);
      navigate("/waste");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="transportation-container">
      <h2>Transportation Details</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Number of Vehicles:
          <input
            type="number"
            value={numVehicles}
            onChange={handleVehicleCountChange}
            min="0"
            onFocus={(e) => e.target.select()}
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
                {!formErrors[index]?.fuelType && <div className="error-message">Fuel type is required</div>}
              </label>

              <label>
                Avg. Mileage or Range:
                <input
                  type="text"
                  value={vehicle.avgMileage}
                  onChange={(e) => handleChange(index, 'avgMileage', e.target.value)}
                  placeholder="Enter mileage or battery range"
                />
                {!formErrors[index]?.avgMileage && <div className="error-message">Mileage is required</div>}
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

        <button type="submit" className="submit-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}

export default TransportationDetails;
