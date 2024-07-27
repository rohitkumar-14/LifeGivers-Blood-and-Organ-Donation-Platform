const BloodBank = require('../models/BloodBank');

// Create a new blood bank
exports.createBloodBank = async (req, res) => {
  try {
    const newBloodBank = new BloodBank(req.body);
    await newBloodBank.save();
    res.status(201).json(newBloodBank);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBloodDonorsForBloodBank = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findById(req.params.id).populate('bloodDonors');
    if (!bloodBank) return res.status(404).json({ error: 'Blood Bank not found' });
    
    res.status(200).json(bloodBank.bloodDonors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all blood banks
exports.getAllBloodBanks = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find();
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a blood bank by ID
exports.getBloodBankById = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findById(req.params.id);
    if (!bloodBank) return res.status(404).json({ error: 'Blood Bank not found' });
    res.status(200).json(bloodBank);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a blood bank by ID
exports.updateBloodBankById = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bloodBank) return res.status(404).json({ error: 'Blood Bank not found' });
    res.status(200).json(bloodBank);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a blood bank by ID
exports.deleteBloodBankById = async (req, res) => {
  try {
    const bloodBank = await BloodBank.findByIdAndDelete(req.params.id);
    if (!bloodBank) return res.status(404).json({ error: 'Blood Bank not found' });
    res.status(200).json({ message: 'Blood Bank deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
