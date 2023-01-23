const Trip = require('../models/trip')

module.exports = {
    new: newTrip
}

function newTrip(req, res) {
    res.render('trips/new', {title: 'Create a New Trip'})
}