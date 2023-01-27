const proverbs = [
    '"Travel is the only thing you can buy that makes you richer."',
    '"Wherever you go, go with all your heart." - Confucius',
    '"Travel and change of place impart new vigor to the mind." - Seneca',
    '"The world is a book, and those who do not travel read only one page." - Saint Augustine',
    '"He who would travel happily must travel light." - Antoine de Saint-Exupéry',
    '"Travel far, travel wide, you will never know what you will find."',
    '"A journey of a thousand miles begins with a single step" - Lao Tzu',
    '"Life is either a daring adventure or nothing at all." - Helen Keller',
    '"Travel is more than the seeing of sights; it is a change that goes on, deep and permanent, in the ideas of living."',
    '"The best education you will ever get is traveling. Nothing teaches you more than exploring the world and accumulating experiences."'
]

const icons = {
    Flight : {svg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16"><path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/></svg>'},

    Car : {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16"><path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/><path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/></svg>'},

    Train : { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-train-front" viewBox="0 0 16 16"><path d="M5.621 1.485c1.815-.454 2.943-.454 4.758 0 .784.196 1.743.673 2.527 1.119.688.39 1.094 1.148 1.094 1.979V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V4.583c0-.831.406-1.588 1.094-1.98.784-.445 1.744-.922 2.527-1.118Zm5-.97C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM5 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7 1a1 1 0 1 0-1-1 1 1 0 1 0-2 0 1 1 0 0 0 2 0 1 1 0 0 0 1 1ZM4.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h3V5h-3Zm4 0v3h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3ZM3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5v-2ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"/></svg>'}, 

    Bus : {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bus-front" viewBox="0 0 16 16"><path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4Zm0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3Z"/><path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2V8ZM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1Z"/></svg>'},    
}

const navItems = document.querySelectorAll('.trip-nav-item')
const proverb = document.getElementById('login-proverb')
const loginLogo = document.getElementById('login-logo')
const travelIcons = document.querySelectorAll('.traval-icons')
const tripSquares = document.querySelectorAll('.trip-square')

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.trip-nav')) activeNavItem()
    if (proverb) loadRandomQuote()
    if (loginLogo) partyLogo()
    if (travelIcons) loadTravelIcons()
    if (tripSquares) hoveredOverSquare()
})

function activeNavItem() {
    const curSelected = document.querySelector('.nav-item-ative')
    if (curSelected) curSelected.classList.remove('nav-item-ative')
    navItems.forEach(item => {
        if (item.dataset.activeLink === item.id) item.classList.add('nav-item-ative')
    })
}

function loadRandomQuote() {
    const proverbsLen = proverbs.length
    const randIdx = Math.floor(Math.random() * proverbsLen)
    const proverbSelected = proverbs[randIdx]
    proverb.innerText = proverbSelected
}

function partyLogo() {
    console.log('i worked')
    setInterval( el => {
        el.src === 'https://i.imgur.com/hXisSr6.png' ? el.src = 'https://i.imgur.com/akgKFTD.png' :  el.src = 'https://i.imgur.com/hXisSr6.png'
    }, 1000, loginLogo.querySelector('img'))
}

function loadTravelIcons() {
    travelIcons.forEach(icon => {
        const val = icon.attributes.value.value
        if(val !== '') icon.innerHTML = icons[val].svg
        if(val === 'Flight') icon.style = 'transform: rotate(180deg);'
    })  
}

function hoveredOverSquare() {
    tripSquares.forEach( square => {
        const trashcan = square.querySelector('.trashcan')
        const tripImg = square.querySelector('.trip-img')
        const update = square.querySelector('.update-img')

        square.addEventListener('mouseover', function(e) {
            if (trashcan) trashcan.classList.remove('hide')
            if (tripImg) tripImg.classList.remove('trip-img-pad')
            update.classList.remove('hide')
        })
        square.addEventListener('mouseout', function(e) {
            if (trashcan) trashcan.classList.add('hide')
            if (tripImg) tripImg.classList.add('trip-img-pad')
            update.classList.add('hide')
        })
    })
}

function validateNewDestination() {
    const arrival = document.forms['newDestination']['arrival']
    const departure = document.forms['newDestination']['departure'].value
    const departsBy = document.forms['newDestination']['departsBy'].value
    const error = document.querySelector('#error')
    
    if (!arrival && departure == '') {
        error.innerText = 'Please enter your departure information!'
        return false
    }

    if (departure !== '' && departsBy == '') {
        error.innerText = "Please enter 'Departing By'"
        return false
    }
}