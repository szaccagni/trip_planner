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