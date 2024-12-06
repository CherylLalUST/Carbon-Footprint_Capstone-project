import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from "../FormContext";
import '../css/TransportationDetails.css';

function TransportationDetails() {

  const transportationUrl = "http://localhost:9094/carbonFootprint/transportationDetails";
  const vehicleUrl = "http://localhost:9095/carbonFootprint/vehicles";
  const statisticsUrl = "http://localhost:9098/carbonFootprint/statistics";
  const token = sessionStorage.getItem("token");

  const { transportationData, setTransportationData } = useContext(FormContext);
  
  const {formErrors, setFormErrors} = useContext(FormContext);
  const navigate = useNavigate();
  let [displayFlag, setDisplayFlag] = useState(false);

  useEffect(() => {
  const statisticsId = sessionStorage.getItem("statisticsId");
  setTransportationData({
    ...transportationData, statisticsId: sessionStorage.getItem("statisticsId"),});
  if (!statisticsId) {
    navigate('/userHomePage');
  }
}, []);

  const handleVehicleCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    
    setTransportationData({
      ...transportationData,
      numberOfVehicles: count,
      statisticsId: sessionStorage.getItem("statisticsId"),
      vehicles: Array(count).fill({
        transportationDetailsId: '',
        vehicleFuelType: '',
        vehicleDistanceTravelled: '',
        vehicleAvgMileage: '',
        pollutionCleared: true,
        maintenanceDone: true,
      }),
    });
    
    setFormErrors(Array(count).fill({transportationDetailsId: '', vehicleFuelType: true, vehicleAvgMileage: true, vehicleDistanceTravelled: true }));
    if(count == 0){
      setDisplayFlag(true);
    }
    else{
      setDisplayFlag(false);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedVehicles = [...transportationData.vehicles];
    updatedVehicles[index] = { ...updatedVehicles[index], [field]: value };
    
    setTransportationData({
      ...transportationData, vehicles: updatedVehicles,
    });

    const updatedErrors = [...formErrors];
    updatedErrors[index] = {
      ...updatedErrors[index],
      [field]: !!value
    };
    setFormErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transportationData.numberOfVehicles == "") {
      setTransportationData({
        ...transportationData, numberOfVehicles: 0, statisticsId: sessionStorage.getItem("statisticsId"),
      });
    }
    
    const errors = transportationData.vehicles.map(vehicle => ({
      vehicleFuelType: !!vehicle.vehicleFuelType,
      vehicleAvgMileage: !!vehicle.vehicleAvgMileage,
      vehicleDistanceTravelled: !!vehicle.vehicleDistanceTravelled,
    }));

    const isValid = errors.every(error => error.vehicleFuelType && error.vehicleAvgMileage && error.vehicleDistanceTravelled);
    setFormErrors(errors);

    if (isValid) {
      

      fetch(transportationUrl + "/addTransportationDetails", {
        method: "POST",
        body: JSON.stringify(transportationData),
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("transportationDetailsId",data.transportationDetailsId);
        let sendVehicles = transportationData.vehicles.map(vehicle => ({
          ...vehicle,
          transportationDetailsId: data.transportationDetailsId
        }));
        
        if(data.numberOfVehicles == 0){
          navigate("/waste");
        }
        else{
          
          fetch(vehicleUrl + "/addVehicles", {
            method: "POST",
            body: JSON.stringify(sendVehicles),
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
          })
          .then((res) => res.json())
          .then((data) => {
            fetch(transportationUrl + "/getVehiclesByTransportationId/" + sessionStorage.getItem("transportationDetailsId"),{
              method: "GET",
              headers: { "Authorization": `Bearer ${token}` },
            })
            .then((res) => res.json())
            .then((resdata) => {
              console.log(resdata);
            })

          navigate("/waste");
          })
        }
      });

      
    }
  };
  
  const handleDiscard = () => {
    fetch(statisticsUrl + "/deleteByStatisticsId/" + sessionStorage.getItem("statisticsId"), {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Deletion successful");
          return res.json();
        } else {
          throw new Error("Failed to delete resource");
        }
      })
      .then((resdata) => {
        sessionStorage.removeItem("statisticsId");
        navigate('/userHomePage');
      })
      .catch((error) => {
        console.error("Error during deletion:", error);
      });
  };
  

  return (
    <div className='transportation-container'>
      <h2>Transportation Details</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Number of Vehicles:
          <input
            type="number"
            value={transportationData.numberOfVehicles}
            onChange={handleVehicleCountChange}
            min="0"
            placeholder="Enter number of vehicles"
            onFocus={(e) => e.target.select()}
          />
        </label>
        {displayFlag && (
          <div style={{ color: '#C49102', fontSize: '0.8em', marginTop: '1em' }}>
            NOTE: You have entered 0 vehicles.
          </div>
        )}

        <div className="vehicle-cards">
          {transportationData.vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <h3>Vehicle {index + 1}</h3>

              <label>
                Fuel Type:
                <select
                  value={vehicle.vehicleFuelType}
                  onChange={(e) => handleChange(index, 'vehicleFuelType', e.target.value)}
                >
                  <option value="">Select Fuel Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="cng">CNG</option>
                  <option value="electric">Electric</option>
                </select>
                {!formErrors[index]?.vehicleFuelType && <div className="error-message">Fuel type is required</div>}
              </label>

              <label>
                Distance Travelled(Km/month):
                <input
                  type="text"
                  value={vehicle.vehicleDistanceTravelled}
                  onChange={(e) => handleChange(index, 'vehicleDistanceTravelled', e.target.value)}
                  placeholder="Enter total distance travelled"
                />
                {!formErrors[index]?.vehicleDistanceTravelled && <div className="error-message">Distance travelled is required</div>}
              </label>

              <label>
                Avg. Mileage or Range:
                <input
                  type="text"
                  value={vehicle.vehicleAvgMileage}
                  onChange={(e) => handleChange(index, 'vehicleAvgMileage', e.target.value)}
                  placeholder="Enter mileage or battery range"
                />
                {!formErrors[index]?.vehicleAvgMileage && <div className="error-message">Mileage is required</div>}
              </label>

              {vehicle.vehicleFuelType !== 'electric' && (
                <label>
                  Is the vehicles pollution test cleared?
                  <select
                    value={vehicle.pollutionCleared}
                    onChange={(e) => handleChange(index, 'pollutionCleared', e.target.value === 'false')}
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </label>
              )}

              <label>
              Is the vehicles maintenance done?
                <select
                  value={vehicle.maintenanceDone}
                  onChange={(e) => handleChange(index, 'maintenanceDone', e.target.value === 'false')}
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
        <button type="button" className="discard-button" onClick={handleDiscard}>Discard</button>
      </form>
    </div>
  );
}

export default TransportationDetails;
