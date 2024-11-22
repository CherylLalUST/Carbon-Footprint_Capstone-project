import React from 'react';
import '../css/CarbonEmissionModal.css';

const CarbonEmissionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <h2>What is Carbon Emission?</h2>
        <p>
          Carbon Emission refers to the release of carbon dioxide (CO2) into the atmosphere, primarily due to human activities like burning fossil fuels, industrial production, and deforestation. These emissions contribute to climate change by trapping heat in the atmosphere.
        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CarbonEmissionModal;
