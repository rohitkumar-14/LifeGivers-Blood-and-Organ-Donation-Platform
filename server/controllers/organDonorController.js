const OrganDonor = require('../models/OrganDonor');
const Hospital = require('../models/Hospital');

// Create a new organ donor record
exports.createOrganDonor = async (req, res) => {
  // try {
  //   const newOrganDonor = new OrganDonor(req.body);
  //   await newOrganDonor.save();
  //   res.status(201).json(newOrganDonor);
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
  try {
    const { registeredHospitals, ...donorData } = req.body;

    if (!Array.isArray(registeredHospitals)) {
      return res.status(400).json({ error: 'registeredHospitals must be an array' });
    }

    // Create the new organ donor
    const newOrganDonor = new OrganDonor(donorData);
    await newOrganDonor.save();

    // Update the hospitals with the new donor
    await Hospital.updateMany(
      { _id: { $in: registeredHospitals } },
      { $push: { organDonors: newOrganDonor._id } }
    );

    res.status(201).json(newOrganDonor);
  } catch (error) {
    console.error('Error creating organ donor:', error);
    res.status(400).json({ error: error.message });
  }
};

// Get all organ donor records
exports.getAllOrganDonors = async (req, res) => {
  try {
    const organDonors = await OrganDonor.find();
    res.status(200).json(organDonors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get an organ donor record by ID
exports.getOrganDonorById = async (req, res) => {
  try {
    const organDonor = await OrganDonor.findById(req.params.id);
    if (!organDonor) return res.status(404).json({ error: 'Organ Donor not found' });
    res.status(200).json(organDonor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an organ donor record by ID
exports.updateOrganDonorById = async (req, res) => {
  try {
    const organDonor = await OrganDonor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!organDonor) return res.status(404).json({ error: 'Organ Donor not found' });
    res.status(200).json(organDonor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an organ donor record by ID
exports.deleteOrganDonorById = async (req, res) => {
  try {
    const organDonor = await OrganDonor.findByIdAndDelete(req.params.id);
    if (!organDonor) return res.status(404).json({ error: 'Organ Donor not found' });
    res.status(200).json({ message: 'Organ Donor deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
