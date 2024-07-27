const Patient = require('../models/Patient');
const BloodBank = require('../models/BloodBank');

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a patient by ID
exports.updatePatientById = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a patient by ID
exports.deletePatientById = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
