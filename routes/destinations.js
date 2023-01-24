const express = require('express')
const router = express.Router()
const destinationsCrtl = require('../controllers/destinations')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/trips/:id/destinations', ensureLoggedIn, destinationsCrtl.create)

module.exports = router