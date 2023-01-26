const Trip = require('../models/trip')
const trips = require('./trips')

module.exports = {
    index,
    new : newReservation,
    create
}

class Day {
    constructor(date) {
        this.date = date
        this.activites = []
    }
}

function index(req,res) {
    Trip.findById(req.params.id, function(err, trip) {
        let days = []
        trip.reservations.forEach( r => {
            const dMY = r.start.toLocaleDateString()
            // check to see if day exists in days already
            const found = days.find(day => day.date === dMY)
            if (found) {
                found.activites.push(r)
            } else {
                const newDay = new Day(dMY)
                newDay.activites.push(r)                
                days.push(newDay)
            }
            console.log(days)
        })
        res.render('reservations/index', {
            title: 'Reservation Details', 
            activeLink: 'reservations',
            trip,
            days
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