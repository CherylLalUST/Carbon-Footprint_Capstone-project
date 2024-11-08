import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Register.css';

export default function Register() {

    // change this to gateway port once integrated
    const baseUrl = "http://localhost:9091/carbonFootprint/authentication";
    let navigate = useNavigate();

    const [userCredentials, setUserCredentials] = useState(
        {
            username: "",
            password: ""
        }
    );

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



    function handleRegister(event) {
        event.preventDefault();
        // Handle registration logic here
        fetch(baseUrl + "/register",
            {
                method: "POST",
                body: JSON.stringify(userCredentials),
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => res.json())
            .then((data) => navigate("/login"));

        console.log("Username:", userCredentials.username, "Password:", userCredentials.password);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={(e) => handleRegister(e)} className="register-form">
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
                        {userCredentialsErrorData.username? "" : "Username is Required!"}
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
                        {userCredentialsErrorData.password? "" : "Password is Required!"}
                    </div>
                </div>

                <button type="submit" className="register-button">Register</button>
            </form>
            <p className="login-link">
                Already registered? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}
