const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    location: String,
    arrival: {
        type: Date,
        default: ''
    },
    departure: Date,
    arrivesBy: {
        type: String,
        default: ''
    },
    departsBy: String,
}, {
    timestamps: true
})

const reservationSchema = new Schema({
    reservationType: {
        type: String,
        enum: ['lodging', 'activity']
    },
    name: String, 
    destination: {
        type: Schema.Types.ObjectId
    }
})


const tripSchema = new Schema({
    destinations: [destinationSchema],
    macroLocation: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    imgURL: String,
    bannerColor: String,
    reservations: [reservationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Trip', tripSchema)