var express = require('express');
var router = express.Router();
const tripsCtrl = require('../controllers/trips')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/new', ensureLoggedIn, tripsCtrl.new)
router.post('/', ensureLoggedIn, tripsCtrl.create)

module.exports = router