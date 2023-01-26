const Trip = require('../models/trip')
const helper = require('../config/helper')

module.exports = {
    index,
    new: newTrip,
    create,
    show,
    delete: deleteTrip
}

function index(req, res) {
    Trip.find({user: req.user}, function(err, trips) {
        res.render('trips/index', {title: 'Your Trips', trips})
    })
}

function newTrip(req, res) {
    res.render('trips/new', {title: 'Create a New Trip'})
}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.userName
    req.body.userAvatar = req.user.userAvatar

    const photoData = await helper.getPhotoData(req.body.macroLocation)
    console.log(photoData)

    req.body.imgURL = photoData.photos[0].src.original
    req.body.bannerColor = photoData.photos[0].avg_color

    Trip.create(req.body, function(err, newTrip) {
        res.redirect(`/trips/${newTrip._id}/destinations/new`)
    })
}

function show(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        trip.destinations.sort( (a,b) => a.arrival - b.arrival)
        res.render('trips/show', {
            title: `${trip.macroLocation}`, 
            activeLink: 'route',
            trip})
    })
}

async function deleteTrip(req, res, next) {
    try {
        await Trip.deleteOne({_id: req.params.id})
        res.redirect('/trips')
    } catch(err) {
        return next(err)
    }

}