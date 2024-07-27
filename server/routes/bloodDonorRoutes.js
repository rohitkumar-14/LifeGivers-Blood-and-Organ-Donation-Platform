const express = require('express');
const router = express.Router();
const bloodDonorController = require('../controllers/bloodDonorController');

// Register a blood donor
router.post('/register', bloodDonorController.registerBloodDonor);
// router.post('/createBloodDonor', bloodDonorController.createBloodDonor);
router.get('/getAllBloodDonors', bloodDonorController.getAllBloodDonors);
router.get('/getBloodDonorById:id', bloodDonorController.getBloodDonorById);
router.put('/updateBloodDonorById:id', bloodDonorController.updateBloodDonorById);
router.delete('/deleteBloodDonorById:id', bloodDonorController.deleteBloodDonorById);

module.exports = router;
