import React, { useState } from "react";
import "./createempform.scss";

const Createempform = () => {
  const initialFormData = {
    fname: "",
    lname: "",
    email: "",
    dept: "",
    role: "",
    location: "",
    mobno: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    for (const field in formData) {
      if (!formData[field]) {
        errors[field] = `Please Enter ${field}`;
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        
      alert(
        `${formData.fname} ${formData.lname} ${formData.email} ${formData.dept} ${formData.role} ${formData.location} ${formData.mobno}`
      );
      setFormData(initialFormData);
      setFormErrors({});
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3 d-flex gap-4">
        <div>
          <input
            type="text"
            className="form-control"
            name="fname"
            placeholder="Firstname"
            value={formData.fname}
            onChange={handleChange}
          />
          <span>{formErrors.fname}</span>
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="lname"
            placeholder="Lastname"
            value={formData.lname}
            onChange={handleChange}
          />
          <span>{formErrors.lname}</span>
        </div>
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{formErrors.email}</span>
      </div>
      <div className="mb-3 d-flex gap-4">
        <div>
          <input
            type="text"
            className="form-control"
            name="dept"
            placeholder="Department"
            value={formData.dept}
            onChange={handleChange}
          />
          <span>{formErrors.dept}</span>
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
          />
          <span>{formErrors.role}</span>
        </div>
      </div>
      <div className="mb-3 d-flex gap-4">
        <div>
          <input
            type="text"
            className="form-control"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <span>{formErrors.location}</span>
        </div>
        <div>
          <input
            type="number"
            className="form-control"
            name="mobno"
            placeholder="Mobile Number"
            value={formData.mobno}
            onChange={handleChange}
          />
          <span>{formErrors.mobno}</span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Createempform;
