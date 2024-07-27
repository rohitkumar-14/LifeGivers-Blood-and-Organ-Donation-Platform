// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  condition: { type: String, required: true },
  bloodTypeNeeded: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] }, 
  organsNeeded: { type: String },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
