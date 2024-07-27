import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/users/getCurrentUser', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };

    fetchUser();
  }, [token, navigate]);

  const handleEdit = (event) => {
    event.preventDefault();
    setIsEditing(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5001/api/users/updateUser${user._id}`, user, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUser(response.data);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile!');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner">
                <div className="breadcrumb_iner_item text-center">
                  <h2>PROFILE</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form className="form-contact contact_form" method="post" id="contactForm" style={{ backgroundColor: 'white' }}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <span style={{ marginRight: '10px' }}>Name:</span>
                      {isEditing ? (
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          type="text"
                          value={user.name}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.placeholder = '')}
                          onBlur={(e) => (e.target.placeholder = 'Enter your name')}
                          placeholder="Enter your name"
                        />
                      ) : (
                        <span>{user.name}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <span style={{ marginRight: '10px' }}>Email:</span>
                      <span>{user.email}</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <span style={{ marginRight: '10px' }}>Phone:</span>
                      {isEditing ? (
                        <input
                          className="form-control"
                          name="phone"
                          id="phone"
                          type="text"
                          value={user.phone}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.placeholder = '')}
                          onBlur={(e) => (e.target.placeholder = 'Enter phone')}
                          placeholder="Enter phone"
                          required
                        />
                      ) : (
                        <span>{user.phone}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <span style={{ marginRight: '10px' }}>Address:</span>
                      {isEditing ? (
                        <input
                          className="form-control"
                          name="address"
                          id="address"
                          type="text"
                          value={user.address}
                          onChange={handleChange}
                          onFocus={(e) => (e.target.placeholder = '')}
                          onBlur={(e) => (e.target.placeholder = 'Enter address')}
                          placeholder="Enter address"
                          required
                        />
                      ) : (
                        <span>{user.address}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  {isEditing ? (
                    <button type="button" className="btn_3" onClick={handleSave}>
                      Save
                    </button>
                  ) : (
                    <button type="button" className="btn_3" onClick={handleEdit}>
                      Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="col-lg-4">
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

export default Profile;
