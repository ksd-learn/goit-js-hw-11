import './css/styles.css';
import fetchAPI from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function createElements(country) {
        return `<li>
                    <img src="${country.flags.svg}" alt="${country.flags.alt}">
                    <p>${country.name.official}</p>
                </li>`
}

function createCard(country) {
    const lang = Object.values(country.languages).join(', ');
    return `<li>
                <div class="country-info-flag">
                    <img src="${country.flags.svg}" alt="${country.flags.alt}">
                    <p>${country.name.official}</p>
                </div>
                <p class="country-info-txt"><span>Capital: </span>${country.capital}</p>
                <p class="country-info-txt"><span>Population: </span>${country.population}</p>
                <p class="country-info-txt"><span>Languages: </span>${lang}</p>
            </li>`
}

function handlerInp(event) {
    let nameCountry = event.target.value.trim();
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    if (!nameCountry) {
        return
    };
    fetchAPI.fetchCountries(nameCountry)
        .then(data => {
            const numberElements = data.length;
            if (numberElements > 10) {
                Notify.info('Too many matches found. Please enter a more specific name.');
            } else {
                if (numberElements > 1) {
                    const elements = data.map(country => createElements(country)).join('');
                    countryList.insertAdjacentHTML('beforeend', elements)
                } else {
                    countryInfo.innerHTML = createCard(data[0])
                }
            }
        })
}

countryInput.addEventListener("input", debounce(handlerInp, DEBOUNCE_DELAY));
