import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BloodDonorForm.css"; // Import the CSS file for styling

const BloodDonorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "male",
    contact: "",
    address: "",
    bloodType: "A+",
    email: "",
    registeredBloodBanks: [],
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    // Fetch the list of blood banks
    const fetchBloodBanks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/bloodBanks/getAllBloodBanks"
        );
        setBloodBanks(response.data);
      } catch (error) {
        console.error("Error fetching blood banks:", error);
      }
    };

    fetchBloodBanks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBloodBankChange = (e) => {
    const options = e.target.options;
    const selectedBloodBanks = [];
    for (const option of options) {
      if (option.selected) {
        selectedBloodBanks.push(option.value);
      }
    }
    setFormData({ ...formData, registeredBloodBanks: selectedBloodBanks });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
     
      const response = await axios.post(
        "http://localhost:5001/api/bloodDonors/register",
        {
          bloodDonorData: formData,
          bloodBankId: formData.registeredBloodBanks[0], // Example: Select the first blood bank if multiple are selected
        }
      );
      console.log("Blood donor registered:", response.data);
      setSuccessMessage("Blood donor registered successfully!");
      // Reset form
      setFormData({
        name: "",
        age: "",
        gender: "male",
        contact: "",
        address: "",
        bloodType: "A+",
        email: "",
        registeredBloodBanks: [],
      });
    } catch (error) {
      console.error("Error registering blood donor:", error);
      setError("Error registering blood donor. Please try again.");
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
                  <h2>Register as a Blood Donor</h2>
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
                        type="text"
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
                          placeholder="Enter your address"
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
                        <select
                          class="form-control"
                          name="registeredBloodBanks"
                          multiple={true}
                          value={formData.registeredBloodBanks}
                          onChange={handleBloodBankChange}
                          required>
                          {bloodBanks.map((bloodBank) => (
                            <option key={bloodBank._id} value={bloodBank._id}>
                              {bloodBank.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default BloodDonorForm;
