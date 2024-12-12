import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CarbonEmissionModal from './CarbonEmissionModal.jsx';
import '../css/Welcome.css';

export default function Welcome() {

    let navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleClick(){
        navigate("/register");
    }

    function handleLogin(){
        navigate("/login");
    }

    return (
        <>
        
        <div className="navbar">
          <div className="navbar-left" onClick={() => setIsModalOpen(true)}>
            <p>What is Carbon Emission?</p>
          </div>
          <div className="navbar-center">
            <h1>Carbon Print</h1>
            <p>Welcome to Carbon Print</p>
          </div>
          <div className="navbar-right">
            <FaGlobe size={24} />
            <p style={{ cursor: 'pointer' }} onClick={handleLogin}>Login</p>
          </div>
        </div>
        <CarbonEmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
            <div className="card_welcome">
                <div className="card_welcome-content">
                    <h1>Carbon Print</h1>
                    <p style={{ fontSize: '1.1em' }}>
                    Track, reduce, and share your journey to a greener future with Carbon Print! Our intuitive platform makes it easy to measure and manage your carbon footprint.
                    </p>
                    <p className="read-the-docs">
                        <button onClick={handleClick}>
                            Get Started
                        </button>
                    </p>
                    
                </div>
            </div>
        </>
    );
}