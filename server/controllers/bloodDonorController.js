const BloodDonor = require('../models/BloodDonor');
const BloodBank = require('../models/BloodBank'); // Import BloodBank model

// Create a new blood donor record
// exports.createBloodDonor = async (req, res) => {
//   try {
//     const newBloodDonor = new BloodDonor(req.body);
//     await newBloodDonor.save();
//     res.status(201).json(newBloodDonor);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
exports.registerBloodDonor = async (req, res) => {
  try {
    const { bloodDonorData, bloodBankId } = req.body;
    
    // Create a new blood donor
    const newBloodDonor = new BloodDonor(bloodDonorData);
    await newBloodDonor.save();
    
    // Update the blood bank to include the new donor
    await BloodBank.findByIdAndUpdate(
      bloodBankId, 
      { $push: { bloodDonors: newBloodDonor._id } },
      { new: true }
    );
    
    res.status(201).json(newBloodDonor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Get all blood donor records
exports.getAllBloodDonors = async (req, res) => {
  try {
    const bloodDonors = await BloodDonor.find().populate('registeredBloodBanks');
    res.status(200).json(bloodDonors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a blood donor record by ID
exports.getBloodDonorById = async (req, res) => {
  try {
    const bloodDonor = await BloodDonor.findById(req.params.id).populate('registeredBloodBanks');
    if (!bloodDonor) return res.status(404).json({ error: 'Blood Donor not found' });
    res.status(200).json(bloodDonor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a blood donor record by ID
exports.updateBloodDonorById = async (req, res) => {
  try {
    const bloodDonor = await BloodDonor.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('registeredBloodBanks');
    if (!bloodDonor) return res.status(404).json({ error: 'Blood Donor not found' });
    res.status(200).json(bloodDonor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a blood donor record by ID
exports.deleteBloodDonorById = async (req, res) => {
  try {
    const bloodDonor = await BloodDonor.findByIdAndDelete(req.params.id);
    if (!bloodDonor) return res.status(404).json({ error: 'Blood Donor not found' });
    res.status(200).json({ message: 'Blood Donor deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
