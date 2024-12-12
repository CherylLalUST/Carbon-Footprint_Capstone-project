// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/CarbonEmissionModal.css';

// const CarbonEmissionModal = ({ isOpen, onClose }) => {
//   let navigate = useNavigate();
//   if (!isOpen) return null; // Do not render the modal if it's not open

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
        
//         <h2>What is Carbon Emission?</h2>
//         <p>
//           Carbon Emission refers to the release of carbon dioxide (CO2) into the atmosphere, primarily due to human activities like burning fossil fuels, industrial production, and deforestation. These emissions contribute to climate change by trapping heat in the atmosphere.
//         </p>
//         <button className="close-button" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarbonEmissionModal;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CarbonEmissionModal.css';

const CarbonEmissionModal = ({ isOpen, onClose }) => {
  let navigate = useNavigate();

  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>What is Carbon Emission?</h2>
        <p>
          Carbon Emission refers to the release of carbon dioxide (CO2) into the atmosphere, primarily due to human activities like burning fossil fuels, industrial production, and deforestation. These emissions contribute to climate change by trapping heat in the atmosphere.
        </p>
        <div className="button-container">
          <button className="faq-button" onClick={() => navigate('/faqs')}>
            FAQ
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionModal;
