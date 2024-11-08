import { useNavigate } from "react-router-dom";

export default function Login() {

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

      // use session storage
    function handleLogin(event) {
        event.preventDefault();
        // Handle registration logic here
        fetch(baseUrl + "/generateToken",
            {
                method: "POST",
                body: JSON.stringify(userCredentials),
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => res.json())
            .then((data) => navigate("/statistics"));

        console.log("Username:", userCredentials.username, "Password:", userCredentials.password);
    };

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
