import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css';

export default function Login() {

    const baseUrl = "http://localhost:9091/carbonFootprint/authentication";
    let navigate = useNavigate();

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
    
    function handleLogin(event) {
        event.preventDefault();

        // Generate token
        fetch(baseUrl + "/generateToken", {
            method: "POST",
            body: JSON.stringify(userCredentials),
            headers: { "Content-Type": "application/json" },
        })
            //.then((res) => res.json())
            .then((data) => {
                //setGeneratedToken(data); // Update state with generated token
                console.log(data);
                sessionStorage.setItem("token", data);
                navigate("/transportation")
            })
            .catch((error) => console.error("Error:", error));

        // Optional: Move these logs inside the fetch to ensure accurate logging
        console.log("Username:", userCredentials.username, "Password:", userCredentials.password);
        //console.log("Token generated: ", generatedToken);
    }


    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
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
            </div>
        </>
    );
}
