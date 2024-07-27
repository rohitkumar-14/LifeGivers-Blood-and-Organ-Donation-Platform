const Hospital = require('../models/Hospital');

// Create a new hospital
exports.createHospital = async (req, res) => {
  try {
    const newHospital = new Hospital(req.body);
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getHospitalByIdOrganDonors = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.hospitalId).populate('organDonors');
    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }
    res.status(200).json(hospital.organDonors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all hospitals
exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a hospital by ID

exports.getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) return res.status(404).json({ error: 'Hospital not found' });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a hospital by ID
exports.updateHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hospital) return res.status(404).json({ error: 'Hospital not found' });
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a hospital by ID
exports.deleteHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndDelete(req.params.id);
    if (!hospital) return res.status(404).json({ error: 'Hospital not found' });
    res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
