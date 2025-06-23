const express = require('express');
const router = express.Router();
const gasStationsController = require('../controllers/gasStationsController');

router.get('/gas', gasStationsController.getGasStations);

module.exports = router;
