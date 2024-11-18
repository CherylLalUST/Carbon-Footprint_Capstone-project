




// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import '../css/Statistics.css';
// // import { FaGlobe } from 'react-icons/fa';

// // function Statistics() {
// //   const [username, setUsername] = useState('');
// //   const [country, setCountry] = useState('');
// //   const [households, setHouseholds] = useState('');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch user details from the backend
// //     axios.get('/api/user/details')
// //       .then(response => {
// //         const { username, country, households } = response.data;
// //         setUsername(username);
// //         setCountry(country);
// //         setHouseholds(households);
// //       })
// //       .catch(error => console.error("Error fetching user details:", error));
// //   }, []);

// //   const handleWhatIsCarbonEmission = () => {
// //     alert("Carbon Emission is the release of carbon dioxide into the atmosphere due to human activities like burning fossil fuels, deforestation, etc.");
// //   };
// //   function handleLogout(){
// //     localStorage.clear(); 
// //     navigate('/login'); 
// //   }
  

// //   return (
// //     <div className="statistics-page">
// //       {/* Navbar */}
// //       <div className="navbar">
// //   <div className="navbar-left" onClick={handleWhatIsCarbonEmission}>
// //     <p>What is Carbon Emission?</p>
// //   </div>
// //   <div className="navbar-center">
// //     <h1>Carbon-Wise</h1>
// //     <p>Welcome {username}, you're tracking for {households} people!</p>
// //   </div>
// //   <div className="navbar-right">
// //     <FaGlobe size={24} />
// //     <span>{country}</span>
// //     <button className="logout-button" onClick={handleLogout}>Logout</button>
// //   </div>
// // </div>

// //       {/* Cards Section */}
// //       <div className="cards-container">
// //         <div className="card" onClick={() => navigate('/view-statistics')}>
// //           <h4>View Statistics</h4>
// //           <p>Click here to view your emissions by month.</p>
// //         </div>
// //         <div className="card" onClick={() => navigate('/transportation')}>
// //           <h4>Track Emissions</h4>
// //           <p>Click here to track emissions from transportation.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Statistics;







// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CarbonEmissionModal from './CarbonEmissionModal.jsx';
// import { FaGlobe } from 'react-icons/fa';
// import '../css/Statistics.css';

// function Statistics() {
//   const [username, setUsername] = useState('');
//   const [country, setCountry] = useState('');
//   const [households, setHouseholds] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user details from the backend
//     axios.get('/api/user/details')
//       .then(response => {
//         const { username, country, households } = response.data;
//         setUsername(username);
//         setCountry(country);
//         setHouseholds(households);
//       })
//       .catch(error => console.error("Error fetching user details:", error));
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (


//     <div className="statistics-page">
//       {/* Navbar */}
//       <div className="navbar">
//         <div className="navbar-left" onClick={() => setIsModalOpen(true)}>
//           <p>What is Carbon Emission?</p>
//         </div>
//         <div className="navbar-center">
//           <h1>Carbon-Wise</h1>
//           <p>Welcome {username}, you're tracking for {households} people!</p>
//         </div>
//         <div className="navbar-right">
//           <FaGlobe size={24} />
//           <span>{country}</span>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>

//       {/* Modal for Carbon Emission */}
//       <CarbonEmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

//       {/* Cards Section */}
//       <div className="cards-container">
//         <div className="card" onClick={() => navigate('/view-statistics')}>
//           <h4>View Statistics</h4>
//           <p>Click here to view your emissions by month.</p>
//         </div>
//         <div className="card" onClick={() => navigate('/transportation')}>
//           <h4>Track Emissions</h4>
//           <p>Click here to track emissions your Monthly Carbon Emissions!.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Statistics;







// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../css/Statistics.css';
// import { FaGlobe } from 'react-icons/fa';

// function Statistics() {
//   const [username, setUsername] = useState('');
//   const [country, setCountry] = useState('');
//   const [households, setHouseholds] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user details from the backend
//     axios.get('/api/user/details')
//       .then(response => {
//         const { username, country, households } = response.data;
//         setUsername(username);
//         setCountry(country);
//         setHouseholds(households);
//       })
//       .catch(error => console.error("Error fetching user details:", error));
//   }, []);

//   const handleWhatIsCarbonEmission = () => {
//     alert("Carbon Emission is the release of carbon dioxide into the atmosphere due to human activities like burning fossil fuels, deforestation, etc.");
//   };
//   function handleLogout(){
//     localStorage.clear(); 
//     navigate('/login'); 
//   }
  

//   return (
//     <div className="statistics-page">
//       {/* Navbar */}
//       <div className="navbar">
//   <div className="navbar-left" onClick={handleWhatIsCarbonEmission}>
//     <p>What is Carbon Emission?</p>
//   </div>
//   <div className="navbar-center">
//     <h1>Carbon-Wise</h1>
//     <p>Welcome {username}, you're tracking for {households} people!</p>
//   </div>
//   <div className="navbar-right">
//     <FaGlobe size={24} />
//     <span>{country}</span>
//     <button className="logout-button" onClick={handleLogout}>Logout</button>
//   </div>
// </div>

//       {/* Cards Section */}
//       <div className="cards-container">
//         <div className="card" onClick={() => navigate('/view-statistics')}>
//           <h4>View Statistics</h4>
//           <p>Click here to view your emissions by month.</p>
//         </div>
//         <div className="card" onClick={() => navigate('/transportation')}>
//           <h4>Track Emissions</h4>
//           <p>Click here to track emissions from transportation.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Statistics;







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CarbonEmissionModal from './CarbonEmissionModal.jsx';
import { FaGlobe } from 'react-icons/fa';
import '../css/Statistics.css';

function Statistics() {
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [households, setHouseholds] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from the backend
    axios.get('/api/user/details')
      .then(response => {
        const { username, country, households } = response.data;
        setUsername(username);
        setCountry(country);
        setHouseholds(households);
      })
      .catch(error => console.error("Error fetching user details:", error));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
<><div className="navbar">
        <div className="navbar-left" onClick={() => setIsModalOpen(true)}>
          <p>What is Carbon Emission?</p>
        </div>
        <div className="navbar-center">
          <h1>Carbon-Wise</h1>
          <p>Welcome {username}, you're tracking for {households} people!</p>
        </div>
        <div className="navbar-right">
          <FaGlobe size={24} />
          <span>{country}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    

    <div className="statistics-page">
      {/* Navbar */}
      

      {/* Modal for Carbon Emission */}
      <CarbonEmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Cards Section */}
      <div className="cards-container">
        <div className="card" onClick={() => navigate('/view-statistics')}>
          <h4>View Statistics</h4>
          <p>Click here to view your emissions by month.</p>
        </div>
        <div className="card" onClick={() => navigate('/transportation')}>
          <h4>Track Emissions</h4>
          <p>Click here to track emissions your Monthly Carbon Emissions!.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Statistics;
