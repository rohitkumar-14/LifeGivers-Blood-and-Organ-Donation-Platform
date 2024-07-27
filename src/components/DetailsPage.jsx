import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./DetailsPage.css"

const DetailsPage = () => {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {

    const fetchBloodBanks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/bloodBanks/getAllBloodBanks');
        setBloodBanks(response.data);
      } catch (error) {
        console.error('Error fetching blood bank details:', error);
      }
    };

    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/hospitals/getAllHospitals');
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/patients/getAllPatients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchBloodBanks();
    fetchHospitals();
    fetchPatients();
  }, []);

  return (
    <div>
        <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner">
                        <div class="breadcrumb_iner_item text-center">
                            <h2>Detail Page</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <h2 style={{marginTop: "20px"}}>Patient Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Condition</th>
            <th>Blood Type Needed</th>
            <th>Organ Needed</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              <td>{patient.address}</td>
              <td>{patient.condition}</td>
              <td>{patient.bloodTypeNeeded || 'nil'}</td>
              <td>{patient.organsNeeded || 'nil'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h2>Registered Blood Banks</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hospital</th>
            <th>Contact Person</th>
            <th>Blood Type/Quantity</th>
            <th>Category</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Email</th>
            <th>State</th>
            <th>City</th>
            <th>District</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {bloodBanks.map((bloodBank, index) => (
            <tr key={index}>
              <td>{bloodBank.name}</td>
              <td>{bloodBank.hospital}</td>
              <td>{bloodBank.contactPerson}</td>
              {bloodBank.bloodStocks.map((stock, index) => (
                      <tr key={index}>
                        <td>{stock.bloodType}</td>
                        <td>{stock.quantity}</td>
                      </tr>
                    ))}
         
              <td>{bloodBank.category}</td>
              <td>{bloodBank.website}</td>
              <td>{bloodBank.phone}</td>
              <td>{bloodBank.email}</td>
              <td>{bloodBank.state}</td>
              <td>{bloodBank.city}</td>
              <td>{bloodBank.district}</td>
              <td>{bloodBank.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Registered Hospitals</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>ContactNumber</th>
            <th>Email</th>
            <th>pincode</th>
            <th>organType</th>
            <th>organTimeWindow</th>
            <th>organDescription</th>
            <th>organImage</th>
            <th>organStatus</th>
            <th>organCategory</th>
            <th>organUnitsAvailable</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{hospital.hospitalName}</td>
              <td>{hospital.hospitalLocation}</td>
              <td>{hospital.hospitalContactNumber}</td>
              <td>{hospital.hospitalEmail}</td>
              <td>{hospital.pincode}</td>
              <td>{hospital.organType}</td>
              <td>{hospital.organTimeWindow}</td>
              <td>{hospital.organDescription}</td>
              <td>{hospital.organImage}</td>
              <td>{hospital.organStatus}</td>
              <td>{hospital.organCategory}</td>
              <td>{hospital.organUnitsAvailable}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default DetailsPage;
