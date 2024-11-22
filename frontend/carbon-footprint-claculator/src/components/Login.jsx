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
        console.log(event);
        setUserCredentialsErrorData({
            ...userCredentialsErrorData,
            [event.target.name]: event.target.validity.valid,
        });
        console.log(event);
        setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
    }


    // --------------------------------------------
    // change navigation once components are added
    // --------------------------------------------
    
    // function handleLogin(event) {
    //     event.preventDefault();

    //     // Generate token
    //     fetch(baseUrl + "/generateToken", {
    //         method: "POST",
    //         body: JSON.stringify(userCredentials),
    //         headers: { "Content-Type": "application/json" },
    //     })
    //         //.then((res) => res.json())
    //         .then((data) => {
    //             //setGeneratedToken(data); // Update state with generated token
    //             console.log(data);
    //             sessionStorage.setItem("token", data);
    //             sessionStorage.setItem("username", userCredentials.username);
    //         navigate("/userHomePage");
    //         })
    //         .catch((error) => console.error("Error:", error));

    //     // Optional: Move these logs inside the fetch to ensure accurate logging
    //     console.log("Username:", userCredentials.username, "Password:", userCredentials.password);
    //     //console.log("Token generated: ", generatedToken);
    // }

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
                //return res.json();
            })
            .then((data) => {
                console.log(data);
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
