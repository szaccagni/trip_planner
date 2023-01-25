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

const navItems = document.querySelectorAll('.trip-nav-item')
const proverb = document.getElementById('login-proverb')


document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.trip-nav')) activeNavItem()
    if (proverb) loadRandomQuote()
})

function activeNavItem() {
    const curSelected = document.querySelector('.nav-item-ative')
    if (curSelected) curSelected.classList.remove('nav-item-ative')
    navItems.forEach(item => {
        if (item.dataset.activeLink === item.id) item.classList.add('nav-item-ative')
    })
}

function editRoute(e) {
    console.log('i ran')
    const route = document.querySelector('.route')
    route.childNodes.forEach(div => {
        if (div.classList) div.classList.contains('hide') ? div.classList.remove('hide') : div.classList.add('hide')
    })
    const editBtn = document.getElementById('edit-route')
    editBtn.classList.contains('animate-btn') ? editBtn.classList.remove('animate-btn') : editBtn.classList.add('animate-btn')
    editBtn.classList.contains('edit-background') ? editBtn.classList.remove('edit-background') : editBtn.classList.add('edit-background')
}

function loadRandomQuote() {
    const proverbsLen = proverbs.length
    const randIdx = Math.floor(Math.random() * proverbsLen)
    const proverbSelected = proverbs[randIdx]
    proverb.innerText = proverbSelected
}