const mongoose = require('mongoose');

const organDonorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], required: true },
  organDonate: [{ type: String }], 
  organDescription: [{ type: String }],
  medicalHistory: { type: String },
  registeredHospitals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' }] 
}, { timestamps: true });

module.exports = mongoose.model('OrganDonor', organDonorSchema);
