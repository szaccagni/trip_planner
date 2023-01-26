const Trip = require('../models/trip')
const trips = require('./trips')
const helper = require('../config/helper')

module.exports = {
    index,
    show,
    edit,
    new : newReservation,
    create,
    update,
    delete: deleteReservation,
}

function index(req,res) {
    Trip.findById(req.params.id, function(err, trip) {
        let days = helper.groupByDays(trip)
        res.render('reservations/index', {
            title: 'Reservation Details', 
            activeLink: 'reservations',
            trip,
            days
        })
    })
}

async function show(req, res) {
    const trip = await Trip.findOne({'reservations._id' : req.params.id})
    const reservation = trip.reservations.id(req.params.id)
    res.render('reservations/show', {
        title: `${reservation.name}`,
        activeLink: 'reservations',
        reservation,
        trip
    })
}

async function edit(req, res) {
    const trip = await Trip.findOne({'reservations._id' : req.params.id})
    const reservation = trip.reservations.id(req.params.id)
    const startDt = reservation.start
    let startDate
    let endDate 
    if (startDt) {
        startDate = `${startDt.getFullYear()}-${(startDt.getMonth() + 1).toString().padStart(2, '0')}`
        startDate += `-${startDt.getDate().toString().padStart(2, '0')}T${startDt.toTimeString().slice(0, 5)}` 
    }
    const endDt = reservation.end
    if (endDt) {
        endDate = `${endDt.getFullYear()}-${(endDt.getMonth() + 1).toString().padStart(2, '0')}`
        endDate += `-${endDt.getDate().toString().padStart(2, '0')}T${endDt.toTimeString().slice(0, 5)}` 
    }
    console.log(startDate)
    res.render('reservations/edit', {
        title: 'Edit your reservation',
        activeLink: 'reservations',
        reservation,
        startDate,
        endDate,
        trip
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

async function update(req, res, next) {
    try {
        const trip = await Trip.findOne({'reservations._id': req.params.id})
        if (!trip) return res.redirect('/trips')
        trip.reservations.remove(req.params.id)
        trip.reservations.push(req.body)
        await trip.save()
        res.redirect(`/trips/${trip._id}/reservations`)
    } catch(err) {
        return next(err)
    }
}


async function deleteReservation(req, res, next) {
    try {
        const trip = await Trip.findOne({'reservations._id': req.params.id})
        if (!trip) return res.redirect('/trips')
        trip.reservations.remove(req.params.id)
        await trip.save()
        res.redirect(`/trips/${trip._id}/reservations`)
    } catch(err) {
        return next(err)
    }
}