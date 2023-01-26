class Day {
    constructor(date, dateReal) {
        this.date = date
        this.dateReal = dateReal
        this.activites = []
        this.destinations =[]
    }
}

class Destination {
    constructor(location, displayText, id) {
        this.location = location
        this.displayText = displayText
        this.route = `/destinations/${id}`
    }
}

module.exports = {
    getPhotoData,
    groupByDays,
    Day
}

async function getPhotoData(query) {
    const data= await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: process.env.PEXELS_API_KEY
        },
    })
    const response = await data.json()
    return response
}


// get probably make this function more succinct
function groupByDays(trip) {
    let days = []
    trip.reservations.forEach( r => {
        const dMY = r.start.toLocaleDateString()
        const found = days.find(day => day.date === dMY)
        if (found) {
            found.activites.push(r)
        } else {
            const newDay = new Day(dMY, r.start)
            newDay.activites.push(r)                
            days.push(newDay)
        }
    })
    trip.destinations.forEach( d => {
        if (d.arrival) {
            const newDestination = new Destination(d.location, `arrives in ${d.location} at ${d.arrival.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} by ${d.arrivesBy}`, d._id)
            const arrivalDMY = d.arrival.toLocaleDateString()
            const found = days.find(day => day.date === arrivalDMY)
            if (found) {
                found.destinations.push(newDestination)
            } else {
                const newDay = new Day(arrivalDMY, d.arrival)
                newDay.destinations.push(newDestination)                
                days.push(newDay)
            }
        }
        if (d.departure) {
            const newDestination = new Destination(d.location, `departs in ${d.location} at ${d.departure.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} by ${d.departsBy}`, d._id)
            const departureDMY = d.departure.toLocaleDateString()
            const found = days.find(day => day.date === departureDMY)
            if (found) {
                found.destinations.push(newDestination)
            } else {
                const newDay = new Day(departureDMY, d.departure)
                newDay.destinations.push(newDestination)                
                days.push(newDay)
            }
        }
    })
    days.sort( (a,b) => a.dateReal - b.dateReal )
    return days
}