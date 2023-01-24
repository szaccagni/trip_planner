const navItems = document.querySelectorAll('.trip-nav-item')

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.trip-nav')) activeNavItem()
})

function activeNavItem() {
    const curSelected = document.querySelector('.nav-item-ative')
    if (curSelected) curSelected.classList.remove('nav-item-ative')
    navItems.forEach(item => {
        if (item.dataset.activeLink === item.id) item.classList.add('nav-item-ative')
    })
}