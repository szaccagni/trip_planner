const express = require('express')
const router = express.Router()
const destinationsCrtl = require('../controllers/destinations')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/trips/:id/destinations', ensureLoggedIn, destinationsCrtl.index)
router.get('/trips/:id/destinations/new', ensureLoggedIn, destinationsCrtl.new)
router.get('/destinations/:id', ensureLoggedIn, destinationsCrtl.show)
router.get('/destinations/:id/edit', ensureLoggedIn, destinationsCrtl.edit)
router.post('/trips/:id/destinations', ensureLoggedIn, destinationsCrtl.create)
router.put('/destinations/:id', ensureLoggedIn, destinationsCrtl.update)
router.delete('/destinations/:id', ensureLoggedIn, destinationsCrtl.delete)

module.exports = router