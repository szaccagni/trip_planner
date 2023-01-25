const express = require('express')
const router = express.Router()
const reservationsCrtl = require('../controllers/reservations')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/trips/:id/reservations', ensureLoggedIn, reservationsCrtl.index)
router.get('/trips/:id/reservations/new', ensureLoggedIn, reservationsCrtl.new)
router.post('/trips/:id/reservations', ensureLoggedIn, reservationsCrtl.create)

module.exports = router