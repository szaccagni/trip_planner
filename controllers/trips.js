const Trip = require('../models/trip')

module.exports = {
    index,
    new: newTrip,
    create,
    show
}

function index(req, res) {
    Trip.find({user: req.user}, function(err, trips) {
        res.render('trips/index', {title: 'Your Trips', trips})
    })
}

function newTrip(req, res) {
    res.render('trips/new', {title: 'Create a New Trip'})
}

function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.userName
    req.body.userAvatar = req.user.userAvatar

    Trip.create(req.body, function(err, newTrip) {
        res.redirect(`/trips/${newTrip._id}/destinations/new`)
    })
}

function show(req, res) {
    Trip.findById(req.params.id)
        .populate('destinations')
        .exec(function (err, trip) {
            res.render('trips/show', {
                title: `${trip.macroLocation}`, 
                activeLink: 'route',
                trip})
        })
}