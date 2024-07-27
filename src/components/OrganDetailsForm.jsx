import React, { useState } from 'react';
import axios from 'axios';

const OrganDetailsForm = () => {
  const [organDetails, setOrganDetails] = useState({
    organType: '',
    timeWindow: '',
    pincode: '',
    description: '',
    image: '',
    status: '',
    category: '',
    unitsAvailable: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrganDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setOrganDetails(prevState => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in organDetails) {
      formData.append(key, organDetails[key]);
    }
    try {
      await axios.post('http://localhost:5001/api/organ-details', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Organ details submitted successfully!');
    } catch (error) {
      console.error('Error submitting organ details:', error);
      alert('Error submitting organ details!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Organ Type:
        <input type="text" name="organType" value={organDetails.organType} onChange={handleChange} required />
      </label>
      <label>
        Time Window:
        <input type="text" name="timeWindow" value={organDetails.timeWindow} onChange={handleChange} required />
      </label>
      <label>
        Pincode:
        <input type="text" name="pincode" value={organDetails.pincode} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={organDetails.description} onChange={handleChange} required />
      </label>
      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} required />
      </label>
      <label>
        Status:
        <input type="text" name="status" value={organDetails.status} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={organDetails.category} onChange={handleChange} required />
      </label>
      <label>
        Units Available:
        <input type="number" name="unitsAvailable" value={organDetails.unitsAvailable} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrganDetailsForm;
