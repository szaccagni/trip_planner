const Trip = require('../models/trip')


module.exports = {
    index,
    new : newReservation,
    create
}

function index(req,res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('reservations/index', {
            title: 'Reservation Details', 
            activeLink: 'reservations',
            trip
        })
    })    
}

function newReservation(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('reservations/new', {
            title: 'Add a Reservation', 
            activeLink: 'reservations',
            trip})
    })
}

function create(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        trip.reservations.push(req.body)
        const destination = trip.destinations.id(req.body.destination)
        trip.save(function(err) {
            res.redirect(`/trips/${trip._id}/reservations`)
        })
    })    
}