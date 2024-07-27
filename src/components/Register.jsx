import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    type: "",
    bloodType: "",
    organs: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Error registering!");
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
                  <h2>REGISTER</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
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
                        name="phone"
                        id="phone"
                        type="text"
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
                      <input
                        class="form-control"
                        name="password"
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button type="submit" class="btn_3">
                  Register
                  </button>

                  <div style={{ color: "black", marginTop: "20px" }}>
                    <NavLink
                      to={"/login"}
                      style={{ color: "black", fontWeight: "500" }}>
                      Login
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <img
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1721983318~exp=1721983918~hmac=76041b6c1d1e1efb82b403a239e704938972e1d7ff221aca8b0d8dc61b2a9360"
                alt=""
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
