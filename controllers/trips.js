const Trip = require('../models/trip')

module.exports = {
    new: newTrip,
    create
}

function newTrip(req, res) {
    res.render('trips/new', {title: 'Create a New Trip'})
}

function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.userName
    req.body.userAvatar = req.user.userAvatar

    Trip.create(req.body, function(err, newTrip) {
        return res.redirect('/')
    })
}