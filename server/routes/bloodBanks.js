const express = require('express');
const router = express.Router();
const bloodBankController = require('../controllers/bloodBankController');

router.get('/:id/donors', bloodBankController.getBloodDonorsForBloodBank);
router.post('/createBloodBank', bloodBankController.createBloodBank);
router.get('/getAllBloodBanks', bloodBankController.getAllBloodBanks);
router.get('/getBloodBankById:id', bloodBankController.getBloodBankById);
router.put('/updateBloodBankById:id', bloodBankController.updateBloodBankById);
router.delete('/deleteBloodBankById:id', bloodBankController.deleteBloodBankById);

module.exports = router;
