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
    destination: {
        type: Schema.Types.ObjectId,
    },
    
    reservationType: {
        type: String,
        enum: ['lodging', 'activity']
    },
    name: String, 
    start: Date,
    end: Date,
    bookingId: String
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