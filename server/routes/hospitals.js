const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

router.post('/createHospital', hospitalController.createHospital);
router.get('/getAllHospitals', hospitalController.getAllHospitals);
router.get('/:hospitalId/organDonors', hospitalController.getHospitalByIdOrganDonors);
router.get('/getHospitalById:id', hospitalController.getHospitalById);
router.put('/updateHospitalById:id', hospitalController.updateHospitalById);
router.delete('/deleteHospitalById:id', hospitalController.deleteHospitalById);

module.exports = router;
