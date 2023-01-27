var express = require('express');
var router = express.Router();
const tripsCtrl = require('../controllers/trips')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, tripsCtrl.index)
router.get('/new', ensureLoggedIn, tripsCtrl.new)
router.get('/:id', ensureLoggedIn, tripsCtrl.show)
router.post('/', ensureLoggedIn, tripsCtrl.create)
router.delete('/:id', ensureLoggedIn, tripsCtrl.delete)
router.put('/:id', ensureLoggedIn, tripsCtrl.updateImg)


module.exports = router