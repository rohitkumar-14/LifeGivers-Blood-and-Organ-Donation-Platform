const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hospital: { type: String, required: true },
  contactPerson: { type: String, required: true },
  bloodStocks: [{ 
    bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], required: true },
    quantity: { type: Number, required: true }
  }],
  category: { type: String, enum: ['govt', 'private'], required: true },
  website: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
  bloodDonors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BloodDonor' }] 
}, { timestamps: true });

module.exports = mongoose.model('BloodBank', bloodBankSchema);
