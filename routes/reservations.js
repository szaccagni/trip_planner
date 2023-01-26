const express = require('express')
const router = express.Router()
const reservationsCrtl = require('../controllers/reservations')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/trips/:id/reservations', ensureLoggedIn, reservationsCrtl.index)
router.get('/trips/:id/reservations/new', ensureLoggedIn, reservationsCrtl.new)
router.post('/trips/:id/reservations', ensureLoggedIn, reservationsCrtl.create)
router.get('/reservations/:id', ensureLoggedIn, reservationsCrtl.show)
router.get('/reservations/:id/edit', ensureLoggedIn, reservationsCrtl.edit)
router.put('/reservations/:id', ensureLoggedIn, reservationsCrtl.update)
router.delete('/reservations/:id', ensureLoggedIn, reservationsCrtl.delete)

module.exports = router