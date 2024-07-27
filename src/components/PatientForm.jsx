import React, { useState } from "react";
import axios from "axios";
import "./Patient.css";

const Patient = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    condition: "",
    bloodTypeNeeded: "",
    organsNeeded: "",
    age: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      const response = await axios.post(
        "http://localhost:5001/api/patients/createPatient",
        patientData
      );
      console.log("Patient registered:", response.data);
      setSuccessMessage("Patient registered successfully!");
      // Clear the form
      setPatientData({
        name: "",
        email: "",
        phone: "",
        address: "",
        condition: "",
        bloodTypeNeeded: "",
        organsNeeded: "",
        age: "",
        gender: "",
      });
    } catch (error) {
      console.error("Error registering patient:", error);
      setError("Error registering patient. Please try again.");
    }
  };

  return (
    <>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner">
                <div className="breadcrumb_iner_item text-center">
                  <h2>Register Patient</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit}
                method="post"
                id="contactForm"
                style={{ backgroundColor: "white" }}
              >
                <div className="row ">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        value={patientData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        value={patientData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="phone"
                        id="phone"
                        type="tel"
                        value={patientData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="address"
                        id="address"
                        type="text"
                        value={patientData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="condition"
                        id="condition"
                        type="text"
                        value={patientData.condition}
                        onChange={handleChange}
                        placeholder="Enter condition"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="bloodTypeNeeded"
                        value={patientData.bloodTypeNeeded}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Blood Type Needed</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="organsNeeded"
                        id="organsNeeded"
                        type="text"
                        value={patientData.organsNeeded}
                        onChange={handleChange}
                        placeholder="Enter organsNeeded"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="age"
                        id="age"
                        type="number"
                        value={patientData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="gender"
                        value={patientData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="form-group mt-3">
                  <button type="submit" className="btn_3">
                    Register Patient
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patient;
