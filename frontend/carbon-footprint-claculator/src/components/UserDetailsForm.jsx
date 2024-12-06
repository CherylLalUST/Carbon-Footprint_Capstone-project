import React, { useState } from "react";
import '../css/UserDetailsForm.css';
import { useNavigate, useParams } from "react-router-dom";

function UserDetailsForm() {

  const {username} = useParams();

  const baseUrl = "http://localhost:9092/carbonFootprint/userDetails";
  const token = sessionStorage.getItem("token");

  const [formData, setFormData] = useState({
    username,
    numberOfHousehold: 1,
    countryName: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: true,
    numberOfHousehold: true,
    countryName: true,
  });

  let navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !!value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors({
      username: !!formData.username,
      numberOfHousehold: !!formData.numberOfHousehold,
      countryName: !!formData.countryName,
    });
    if (formData.username && formData.numberOfHousehold && formData.countryName) {
      fetch(baseUrl + "/addUserDetails", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      })
      .then((res) => res.json())
      .then(navigate("/login"));
    }
  };

  return (
    <>
    <div className="form-container">
    <h2>Basic Details</h2>
  <form onSubmit={handleSubmit} className="custom-form">

    <div>
      <label htmlFor="numberOfHousehold">Number of Households</label>
      <input
        type="number"
        id="numberOfHousehold"
        name="numberOfHousehold"
        m in="1"
        value={formData.numberOfHousehold}
        onChange={handleFormChange}
        required 
        onFocus={(e) => e.target.select()}
      />
      <div className="error-message">
        {formErrors.numberOfHousehold ? "" : "Number of Households is required!"}
      </div>
    </div>

    <div>
      <label htmlFor="countryName">countryName</label>
      <select
        id="countryName"
        name="countryName"
        value={formData.countryName}
        onChange={handleFormChange}
        required
      >
        <option value="">Select a countryName</option>
        <option value="USA">USA</option>
        <option value="Australia">Australia</option>
        <option value="India">India</option>
      </select>
      <div className="error-message">
        {formErrors.countryName ? "" : "countryName selection is required!"}
      </div>
    </div>

    <button type="submit" className="submit-button">Register</button>
  </form>
</div>
     </>
  );
}

export default UserDetailsForm;
