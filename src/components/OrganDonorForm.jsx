import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './OrganDonorForm.css';

const OrganDonorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    contact: '',
    address: '',
    bloodType: '',
    organDonate: '',
    organDescription: '',
    medicalHistory: '',
    registeredHospitals: []
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [hospitals, setHospitals] = useState([]);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/hospitals/getAllHospitals');
      setHospitals(response.data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleHospitalChange = (e) => {
    const options = e.target.options;
    const selectedHospitals = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedHospitals.push(options[i].value);
      }
    }
    setFormData({ ...formData, registeredHospitals: selectedHospitals });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    console.log('Form Data:', formData);  // Log the formData for inspection
  
    try {
      const response = await axios.post('http://localhost:5001/api/organDonors/createOrganDonor', formData);
      console.log('Organ donor registered successfully:', response.data);
      setSuccessMessage("Organ donor registered successfully");
    } catch (error) {
      console.error('Error registering organ donor:', error.response?.data || error.message);
      setError("Error registering organ donor");
    }
  };

  return (
    <>
     <section class="breadcrumb breadcrumb_bg">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="breadcrumb_iner">
                      <div class="breadcrumb_iner_item text-center">
                          <h2>Register as an Organ Donor</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section class="contact-section section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form
                class="form-contact contact_form"
                onSubmit={handleSubmit}
                method="post"
                id="contactForm"
                style={{ backgroundColor: "white" }}>

                <div class="row ">
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="name"
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="email"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="age"
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        required
                      />
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <select
                          class="form-control"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required>
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="contact"
                          id="contact"
                          type="text"
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="Enter contact"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="address"
                          id="address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter address"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <select
                          class="form-control"
                          name="bloodType"
                          value={formData.bloodType}
                          onChange={handleChange}
                          required>
                          <option value="">Select Blood Type</option>
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

                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="organDonate"
                          id="organDonate"
                          type="text"
                          value={formData.organDonate}
                          onChange={handleChange}
                          placeholder="Enter organDonate"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="organDescription"
                          id="organDescription"
                          type="text"
                          value={formData.organDescription}
                          onChange={handleChange}
                          placeholder="Enter organDescription"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="medicalHistory"
                          id="medicalHistory"
                          type="text"
                          value={formData.medicalHistory}
                          onChange={handleChange}
                          placeholder="Enter medicalHistory"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <select
                          class="form-control"
                          name="registeredHospitals"
                          multiple
                          value={formData.registeredHospitals}
                          onChange={handleHospitalChange}
                          required>
                          {hospitals.map((hospital) => (
                               <option key={hospital._id} value={hospital._id}>{hospital.hospitalName}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div class="form-group mt-3">
                  <button type="submit" class="btn_3">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    {/* <form onSubmit={handleSubmit}>
      <h2>Register as an Organ Donor</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Contact:
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <label>
        Blood Type:
        <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </label>
      <label>
        Organ to Donate:
        <input type="text" name="organDonate" value={formData.organDonate} onChange={handleChange} required />
      </label>
      <label>
        Organ Description:
        <input type="text" name="organDescription" value={formData.organDescription} onChange={handleChange} />
      </label>
      <label>
        Medical History:
        <input type="text" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
      </label>
      <label>
  Registered Hospitals:
  <select name="registeredHospitals" value={formData.registeredHospitals} onChange={handleHospitalChange} multiple required>
    {hospitals.map((hospital) => (
      <option key={hospital._id} value={hospital._id}>{hospital.hospitalName}</option>
    ))}
  </select>
</label>
      <button type="submit">Register</button>
    </form> */}
    </>
  );
};

export default OrganDonorForm;
