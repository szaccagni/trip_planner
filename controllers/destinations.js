const Trip = require('../models/trip')

module.exports = {
    index,
    new : newDestination,
    create
}

function index(req,res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('destinations/index', {
            title: 'Destination Details', 
            activeLink: 'details',
            trip
        })
    })    
}

function newDestination(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        res.render('destinations/new', {
            title: 'Add a Destination', 
            activeLink: 'route',
            trip})
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