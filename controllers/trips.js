const Trip = require('../models/trip')
const helper = require('../config/helper')

module.exports = {
    index,
    new: newTrip,
    create,
    show,
    delete: deleteTrip,
    updateImg
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

    const photoData = await helper.getPhotoData(req.body.macroLocation, 1)

    req.body.imgURL = photoData.photos[0]?.src.original || ''
    req.body.bannerColor = photoData.photos[0]?.avg_color || ''

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

function updateImg(req,res) {
    Trip.findById(req.params.id, async function(err, trip) {
        const photoData = await helper.getPhotoData(trip.macroLocation, 100)
        let newPhoto, i = 0
        while (newPhoto === undefined && i < 5) {
            const randIdx = Math.floor(Math.random() * 100)
            if (photoData.photos[randIdx]?.src.original) newPhoto = photoData.photos[randIdx]
            i++
        }
        // only update if a newPhoto was found
        if (newPhoto) {
            trip.imgURL = newPhoto.src.original
            trip.bannerColor = newPhoto.avg_color
            trip.save()
        }
        res.redirect('/trips')
    })
}
