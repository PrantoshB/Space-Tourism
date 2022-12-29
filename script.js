const menuToggle = document.getElementById('menu-btn');
const navMenu = document.querySelector(".nav-menu");




menuToggle.addEventListener('click', () => {
    const visibility = navMenu.getAttribute('data-visible');
    if (visibility === 'false') {
        navMenu.setAttribute('data-visible', true)
        menuToggle.setAttribute('data-image', 'close')
    }
    else if (visibility === 'true') {
        navMenu.setAttribute('data-visible', false)
        menuToggle.setAttribute('data-image', 'hamburger')
    }
})



//JSON fetch


import data from './data.json' assert {type: 'json'};

const CrewData = data['crew']
const DestData = data['destinations']
const TechData = data['technology']

console.log(CrewData)