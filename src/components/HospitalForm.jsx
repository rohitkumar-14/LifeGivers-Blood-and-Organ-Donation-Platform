import React, { useState } from 'react';
import axios from 'axios';
import './HospitalForm.css';

const HospitalForm = () => {
  const [hospital, setHospital] = useState({
    hospitalName: '',
    hospitalLocation: '',
    hospitalContactNumber: '',
    hospitalEmail: '',
    pincode: '',
    organType: '',
    organTimeWindow: '',
    organDescription: '',
    organStatus: '',
    organCategory: '',
    organUnitsAvailable: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospital({
      ...hospital,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/hospitals/createHospital', hospital);
      console.log('Hospital created:', response.data);
    } catch (error) {
      console.error('Error creating hospital:', error);
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
                          <h2>Register Hospital</h2>
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
                        name="hospitalName"
                        id="hospitalName"
                        type="text"
                        value={hospital.hospitalName}
                        onChange={handleChange}
                        placeholder="Enter hospitalName"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="hospitalLocation"
                        id="hospitalLocation"
                        type="text"
                        value={hospital.hospitalLocation}
                        onChange={handleChange}
                        placeholder="Enter hospitalLocation"
                        required
                      />
                    </div>
                  </div>

                
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="hospitalContactNumber"
                        id="hospitalContactNumber"
                        type="text"
                        value={hospital.hospitalContactNumber}
                        onChange={handleChange}
                        placeholder="Enter hospitalContactNumber"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="hospitalEmail"
                        id="hospital"
                        type="email"
                        value={hospital.hospitalEmail}
                        onChange={handleChange}
                        placeholder="Enter hospitalEmail"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="pincode"
                        id="pincode"
                        type="text"
                        value={hospital.pincode}
                        onChange={handleChange}
                        placeholder="Enter pincode"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="organType"
                        id="organType"
                        type="text"
                        value={hospital.organType}
                        onChange={handleChange}
                        placeholder="Enter organType"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="organTimeWindow"
                        id="organTimeWindow"
                        type="text"
                        value={hospital.organTimeWindow}
                        onChange={handleChange}
                        placeholder="Enter organTimeWindow"
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
                        value={hospital.organDescription}
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
                        name="organStatus"
                        id="organStatus"
                        type="text"
                        value={hospital.organStatus}
                        onChange={handleChange}
                        placeholder="Enter organStatus"
                        required
                      />
                    </div>
                  </div>


                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="organCategory"
                        id="organCategory"
                        type="text"
                        value={hospital.organCategory}
                        onChange={handleChange}
                        placeholder="Enter organCategory"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="organUnitsAvailable"
                        id="organUnitsAvailable"
                        type="text"
                        value={hospital.organUnitsAvailable}
                        onChange={handleChange}
                        placeholder="Enter organUnitsAvailable"
                        required
                      />
                    </div>
                  </div>
                 
                </div>
                <div class="form-group mt-3">
                  <button type="submit" class="btn_3">
                  Submit
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

export default HospitalForm;
