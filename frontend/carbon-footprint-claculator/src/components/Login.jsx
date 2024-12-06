import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/Login.css';

export default function Login() {

    const baseUrl = "http://localhost:9091/carbonFootprint/authentication";
    let navigate = useNavigate();
    const [alertMsg, setAlertMsg] = useState("");

    const [userCredentials, setUserCredentials] = useState(
        {
            username: "",
            password: ""
        }
    );

    const [generatedToken, setGeneratedToken] = useState("");

    const [userCredentialsErrorData, setUserCredentialsErrorData] = useState({
        username: true,
        password: true
    });

    function handleFormChange(event) {
        
        setUserCredentialsErrorData({
            ...userCredentialsErrorData,
            [event.target.name]: event.target.validity.valid,
        });
        
        setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
    }

    function handleLogin(event) {
        event.preventDefault();
    
        fetch(baseUrl + "/generateToken", {
            method: "POST",
            body: JSON.stringify(userCredentials),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Invalid credentials or user not registered");
                }
                
            })
            .then((data) => {
                
                sessionStorage.setItem("token", data);
                sessionStorage.setItem("username", userCredentials.username);
                navigate("/userHomePage");
            })
            .catch((error) => {
                console.error("Error:", error);
                setAlertMsg("Login failed. Please check your credentials or register if you're a new user.");
            });
    }
    


    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                <p style={{ color: 'red', fontSize: '0.8em' }}>{alertMsg}</p>
                <form onSubmit={(e) => handleLogin(e)} className="login-form">
                    <div>
                        <label htmlFor="username">Username </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={(e) => handleFormChange(e)}
                            required
                        />
                        <div className="error-message">
                            {userCredentialsErrorData.username ? "" : "Username is Required!"}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Password </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => handleFormChange(e)}
                            required
                        />
                        <div className="error-message">
                            {userCredentialsErrorData.password ? "" : "Password is Required!"}
                        </div>
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="login-link">
                    New user? <Link to="/register">Register</Link>
                </p>
            </div>
        </>
    );
}
