import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BloodBankForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    hospital: "",
    contactPerson: "",
    bloodStocks: [{ bloodType: "", quantity: "" }],
    category: "",
    website: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    district: "",
    address: "",
    patients: [],
    bloodDonors: [],
  });
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBloodStockChange = (index, e) => {
    const { name, value } = e.target;
    const newBloodStocks = [...formData.bloodStocks];
    if (name === 'quantity') {
      newBloodStocks[index][name] = parseInt(value, 10); // Convert to number
    } else {
      newBloodStocks[index][name] = value;
    }
    setFormData({ ...formData, bloodStocks: newBloodStocks });
  };

  const addBloodStock = () => {
    setFormData({
      ...formData,
      bloodStocks: [...formData.bloodStocks, { bloodType: "A+", quantity: 0 }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/bloodBanks/createBloodBank", formData)
      .then((response) => {
        alert("Blood Bank registration successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error registering the blood bank!", error);
        alert("Error registering blood bank!");
      });
  };

  return (
    <>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner">
                <div class="breadcrumb_iner_item text-center">
                  <h2>Blood Bank Form</h2>
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
                        name="hospital"
                        id="hospital"
                        type="text"
                        value={formData.hospital}
                        onChange={handleChange}
                        placeholder="Enter hospital name"
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
                        placeholder="Enter email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="contactPerson"
                        id="contactPerson"
                        type="text"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="Enter contactPersonName"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    {formData.bloodStocks.map((stock, index) => (
                      <div class="form-group" key={index}>
                        <select
                          class="form-control"
                          name="bloodType"
                          value={stock.bloodType}
                          onChange={(e) => handleBloodStockChange(index, e)}
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
                        <input
                          class="form-control"
                          name="quantity"
                          id="quantity"
                          type="number"
                          value={stock.quantity}
                          onChange={(e) => handleBloodStockChange(index, e)}
                          placeholder="Enter quantity"
                          required
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      className="mb-3"
                      onClick={addBloodStock}>
                      Add Blood Stock
                    </button>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <select
                        class="form-control"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required>
                        <option value="">Select category</option>
                        <option value="govt">Govt</option>
                        <option value="private">Private</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="website"
                        id="website"
                        type="url"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="Enter website"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="phone"
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="state"
                        id="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="city"
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="district"
                        id="district"
                        type="text"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="Enter district"
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

export default BloodBankForm;
