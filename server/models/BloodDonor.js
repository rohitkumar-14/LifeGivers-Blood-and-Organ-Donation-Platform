const mongoose = require('mongoose');

const bloodDonorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], required: true },
  donationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }],
  email: { type: String, required: true, unique: true },
  registeredBloodBanks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BloodBank' }]
}, { timestamps: true });

module.exports = mongoose.model('BloodDonor', bloodDonorSchema);
