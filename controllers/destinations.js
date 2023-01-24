const Trip = require('../models/trip')

module.exports = {
    new : newDestination,
    create
}

function newDestination(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('destinations/new', {title: 'Add a Destination', trip})
    })
}

function create(req,res) {
    Trip.findById(req.params.id, function(err, trip) {
        trip.destinations.push(req.body)
        trip.save(function(err) {
            res.redirect(`/trips/${trip._id}`)
        })
    })
}