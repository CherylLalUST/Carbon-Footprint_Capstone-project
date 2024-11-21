import { useNavigate } from 'react-router-dom';
import '../css/Welcome.css';

export default function Welcome() {

    let navigate = useNavigate();

    function handleClick(){
        navigate("/register");
    }

    return (
        <>
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