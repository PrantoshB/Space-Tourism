const moon = document.querySelector('.moon');
const mars = document.querySelector('.mars');
const europa = document.querySelector('.europa');
const titan = document.querySelector('.titan');

const planet_img = document.querySelector('.planetcontainer .planet');

const dest_title = document.querySelector('.dest_title');
const dest_info = document.querySelector('.dest_info');
const dest_extrainfo = document.querySelector('.distance .extrainfo');
const time_extrainfo = document.querySelector('.time .extrainfo');

import data from './data.json' assert {type: 'json'};
const DestData = data['destinations']

function populateData(planet, planet_image) {
    planet_img.setAttribute('src', `./assets/destination/${planet_image}.png`);
    dest_title.textContent = DestData[planet]['name'];
    dest_info.textContent = DestData[planet]['description'];
    dest_extrainfo.textContent = DestData[planet]['distance'];
    time_extrainfo.textContent = DestData[planet]['travel'];
    if (planet === 0) {
        moon.setAttribute('id', 'active');
        mars.setAttribute('id', '');
        europa.setAttribute('id', '');
        titan.setAttribute('id', '');
    }
    else if (planet === 1) {
        moon.setAttribute('id', '');
        mars.setAttribute('id', 'active');
        europa.setAttribute('id', '');
        titan.setAttribute('id', '');
    }
    else if (planet === 2) {
        moon.setAttribute('id', '');
        mars.setAttribute('id', '');
        europa.setAttribute('id', 'active');
        titan.setAttribute('id', '');
    }
    else if (planet === 3) {
        moon.setAttribute('id', '');
        mars.setAttribute('id', '');
        europa.setAttribute('id', '');
        titan.setAttribute('id', 'active');
    }
}

moon.addEventListener('click', () => {
    populateData(0 , 'image-moon');
});
mars.addEventListener('click', () => {
    populateData(1 , 'image-mars');
});
europa.addEventListener('click', () => {
    populateData(2 , 'image-europa');
});
titan.addEventListener('click', () => {
    populateData(3 , 'image-titan');
});