const Trip = require('../models/trip')
const helper = require('../config/helper')

module.exports = {
    index,
    show,
    new : newDestination,
    create,
    edit,
    update,
    delete: deleteDestintion,
}

function index(req,res) {
    Trip.findById(req.params.id, function(err, trip) {
        // trip.destinations.sort( (a,b) => a.arrival - b.arrival)
        let days = helper.groupByDays(trip)
        res.render('destinations/index', {
            title: 'Trip Details', 
            activeLink: 'details',
            trip,
            days
        })
    })    
}

async function show(req,res) {
    const trip = await Trip.findOne({'destinations._id' : req.params.id})
    const destination = trip.destinations.id(req.params.id)
    res.render('destinations/show', {
        title: 'Edit your destination',
        activeLink: 'route',
        destination,
        trip
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
    let arrivesDate
    let departsDate 
    if (arriveDt) {
        arrivesDate = `${arriveDt.getFullYear()}-${(arriveDt.getMonth() + 1).toString().padStart(2, '0')}`
        arrivesDate += `-${arriveDt.getDate().toString().padStart(2, '0')}T${arriveDt.toTimeString().slice(0, 5)}` 
    }
    const departDt = destination.departure
    if (departDt) {
        departsDate = `${departDt.getFullYear()}-${(departDt.getMonth() + 1).toString().padStart(2, '0')}`
        departsDate += `-${departDt.getDate().toString().padStart(2, '0')}T${departDt.toTimeString().slice(0, 5)}` 
    }
    res.render('destinations/edit', {
        title: 'Edit your destination',
        activeLink: 'route',
        destination,
        departsDate,
        arrivesDate,
        trip
    })
}

async function update(req, res, next) {
    try {
        const trip = await Trip.findOne({'destinations._id': req.params.id})
        if (!trip) return res.redirect('/trips')
        trip.destinations.remove(req.params.id)
        trip.destinations.push(req.body)
        await trip.save()
        res.redirect(`/trips/${trip._id}`)
    } catch(err) {
        return next(err)
    }
}

async function deleteDestintion(req, res, next) {
    try {
        const trip = await Trip.findOne({'destinations._id': req.params.id})
        if (!trip) return res.redirect('/trips')
        trip.destinations.remove(req.params.id)
        await trip.save()
        res.redirect(`/trips/${trip._id}`)
    } catch(err) {
        return next(err)
    }
}