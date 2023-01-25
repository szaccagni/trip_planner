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
    bannerColor: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Trip', tripSchema)