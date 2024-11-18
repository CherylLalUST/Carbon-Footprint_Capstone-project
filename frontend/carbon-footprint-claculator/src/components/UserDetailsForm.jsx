import React, { useState } from "react";
import '../css/UserDetailsForm.css';
import { useNavigate } from "react-router-dom";

function UserDetailsForm() {

  const baseUrl = "http://localhost:9092/carbonFootprint/userDetails";
  const token = sessionStorage.getItem("token");

  const [formData, setFormData] = useState({
    username: sessionStorage.getItem("username"),
    numberOfHousehold: 1,
    country: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: true,
    numberOfHousehold: true,
    country: true,
  });

  let navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset error message on input change
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !!value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    setFormErrors({
      username: !!formData.username,
      numberOfHousehold: !!formData.numberOfHousehold,
      country: !!formData.country,
    });
    if (formData.username && formData.numberOfHousehold && formData.country) {
      // Handle valid form submission
      fetch(baseUrl + "/addUserDetails", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      })
      .then((res) => res.json())
      .then(navigate("/transportation"));
      console.log("Form submitted successfully:", formData);
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
      <label htmlFor="country">Country</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleFormChange}
        required
      >
        <option value="">Select a country</option>
        <option value="USA">USA</option>
        <option value="Australia">Australia</option>
        <option value="India">India</option>
      </select>
      <div className="error-message">
        {formErrors.country ? "" : "Country selection is required!"}
      </div>
    </div>

    <button type="submit" className="submit-button">Submit</button>
  </form>
</div>
     </>
  );
}

export default UserDetailsForm;
