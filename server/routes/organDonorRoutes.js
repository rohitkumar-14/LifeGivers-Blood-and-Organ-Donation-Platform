const express = require('express');
const router = express.Router();
const organDonorController = require('../controllers/organDonorController');

router.post('/createOrganDonor', organDonorController.createOrganDonor);
router.get('/getAllOrganDonors', organDonorController.getAllOrganDonors);
router.get('/getOrganDonorById:id', organDonorController.getOrganDonorById);
router.put('/updateOrganDonorById:id', organDonorController.updateOrganDonorById);
router.delete('/deleteOrganDonorById:id', organDonorController.deleteOrganDonorById);

module.exports = router;
