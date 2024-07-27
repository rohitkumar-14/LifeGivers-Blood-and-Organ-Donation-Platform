import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Logged in successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging in!');
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
                            <h2>LOGIN</h2>
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
                    <form class="form-contact contact_form" onSubmit={handleSubmit} method="post" id="contactForm" style={{backgroundColor: "white"}}>
                        <div class="row ">
                            
                            <div class="col-12">
                                <div class="form-group">
                                    <input class="form-control" name="email" id="email" type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Enter email address" required/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <input class="form-control" name="password" id="password"  type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Password'" placeholder="Enter Password" required/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <button type="submit" class="btn_3">Login</button>

                            <div style={{color: "black",marginTop: "20px"}}><NavLink to={'/register'} style={{color: "black",fontWeight: "500"}}>Register</NavLink></div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                  <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1721983318~exp=1721983918~hmac=76041b6c1d1e1efb82b403a239e704938972e1d7ff221aca8b0d8dc61b2a9360" alt=""  width={800} height={600}/>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Login;
