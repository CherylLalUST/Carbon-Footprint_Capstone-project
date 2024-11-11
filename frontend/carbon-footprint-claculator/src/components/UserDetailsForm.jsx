import React, { useState } from "react";
import '../css/UserDetailsForm.css';

function UserDetailsForm() {
  const [formData, setFormData] = useState({
    username: "",
    households: "",
    country: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: true,
    households: true,
    country: true,
  });

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
      households: !!formData.households,
      country: !!formData.country,
    });
    if (formData.username && formData.households && formData.country) {
      // Handle valid form submission
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <>
    <div className="form-container">
    <h2>Basic Details</h2>
  <form onSubmit={handleSubmit} className="custom-form">
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleFormChange}
        required
      />
      <div className="error-message">
        {formErrors.username ? "" : "Username is required!"}
      </div>
    </div>

    <div>
      <label htmlFor="households">Number of Households</label>
      <input
        type="number"
        id="households"
        name="households"
        min="1"
        value={formData.households}
        onChange={handleFormChange}
        required
      />
      <div className="error-message">
        {formErrors.households ? "" : "Number of households is required!"}
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
