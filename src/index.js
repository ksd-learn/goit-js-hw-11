import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetch('https://restcountries.com/v3.1/name/eesti')
    .then(response => response.json())
    .then(json => console.log(json))
