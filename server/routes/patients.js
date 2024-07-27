const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/createPatient', patientController.createPatient);
router.get('/getAllPatients', patientController.getAllPatients);
router.get('/getPatientById:id', patientController.getPatientById);
router.put('/updatePatientById:id', patientController.updatePatientById);
router.delete('/deletePatientById:id', patientController.deletePatientById);

module.exports = router;
