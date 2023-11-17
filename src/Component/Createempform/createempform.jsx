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
    img: "",
    id: ""
  };
  
  const AddEmployee = async()=>{
    console.log(formData.dept);
    let response = await fetch("http://localhost:5000/api/createemp",{
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      },
      body:JSON.stringify({
          emp_id: formData.id,
          name: `${formData.fname} ${formData.lname}`,
          email: formData.email,
          department: formData.dept,
          role: formData.role,
          location: formData.location,
          mobile: formData.mobno,
          img: formData.img,
          password: `${formData.mobno.slice(0,5)}${formData.fname}`
      })
     });
     console.log(response)
  }

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
        errors[field] = `*Please Enter ${field}`;
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        
      AddEmployee();
      setFormData(initialFormData);
      setFormErrors({});
    }
  };

  return (
    <>
    <h3 className="ps-4 mb-4">Add New Employee</h3>
    <form onSubmit={handleFormSubmit}>
      <div className="w-100 mb-3 d-flex gap-4 px-4 py-2">
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            name="fname"
            placeholder="Firstname"
            value={formData.fname}
            onChange={handleChange}
          />
          <span className="error-text">{formErrors.fname}</span>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            name="lname"
            placeholder="Lastname"
            value={formData.lname}
            onChange={handleChange}
          />
          <span className="error-text">{formErrors.lname}</span>
        </div>
      </div>
      <div className="w-100 mb-3 d-flex gap-4 px-4 py-2">
        <div className="col-lg-6">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error-text">{formErrors.email}</span>
      </div>
        <div className="col-lg-6">
        <input
          type="text"
          className="form-control"
          name="img"
          placeholder="Image Url"
          value={formData.img}
          onChange={handleChange}
        />
        <span className="error-text">{formErrors.email}</span>
        </div>
      </div>
      <div className="mb-3 d-flex gap-4 px-4 py-2">
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            name="dept"
            placeholder="Department"
            value={formData.dept}
            onChange={handleChange}
          />
          <span className="error-text">{formErrors.dept}</span>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
          />
          <span className="error-text">{formErrors.role}</span>
        </div>
      </div>
      <div className="mb-3 d-flex gap-4 px-4 py-2">
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <span className="error-text">{formErrors.location}</span>
        </div>
        <div className="col-lg-6">
          <input
            type="number"
            className="form-control"
            name="mobno"
            placeholder="Mobile Number"
            value={formData.mobno}
            onChange={handleChange}
          />
          <span className="error-text">{formErrors.mobno}</span>
        </div>
      </div>
      <div className="w-100 mb-3 ps-4 py-2">
        <input
          type="number"
          className="form-control"
          name="id"
          placeholder="Employee Id"
          value={formData.id}
          onChange={handleChange}
        />
        <span className="error-text">{formErrors.email}</span>
      </div>
      <div className="d-flex justify-content-end py-2">
        <button type="submit" className="btn btn-primary float-right" data-toggle="tooltip" data-placement="top" title="hello">
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default Createempform;
