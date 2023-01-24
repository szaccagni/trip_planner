const Trip = require('../models/trip')

module.exports = {
    index,
    new : newDestination,
    create,
    edit
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

async function edit(req, res) {
    const trip = await Trip.findOne({'destinations._id' : req.params.id})
    const destination = trip.destinations.id(req.params.id)
    const arriveDt = destination.arrival
    let arrivesDate = `${arriveDt.getFullYear()}-${(arriveDt.getMonth() + 1).toString().padStart(2, '0')}`
    arrivesDate += `-${arriveDt.getDate().toString().padStart(2, '0')}T${arriveDt.toTimeString().slice(0, 5)}` 
    const departDt = destination.departure
    let departsDate = `${departDt.getFullYear()}-${(departDt.getMonth() + 1).toString().padStart(2, '0')}`
    departsDate += `-${departDt.getDate().toString().padStart(2, '0')}T${departDt.toTimeString().slice(0, 5)}` 
    res.render('destinations/edit', {
        title: 'Edit your destination',
        activeLink: 'route',
        destination,
        departsDate,
        arrivesDate,
        trip
    })
}