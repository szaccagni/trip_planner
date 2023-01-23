var express = require('express');
var router = express.Router();
const tripsCtrl = require('../controllers/trips')

router.get('/new', tripsCtrl.new)

module.exports = router