import SimpleLightbox from "simplelightbox";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import photoCard from './js/create-photo-card';
import request from './js/request';
import API from './js/api-pexels';

const form = document.querySelector('#search-form');
const input = document.querySelector('.search-form__input');
const gallery = document.querySelector('.gallery');
const nextPage = document.querySelector('.next-page')
const btnNextPage = document.querySelector('.load-more');

let page = 1;
let queryValue = '';
let numberResults = 0;

function queryPexels(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  nextPage.style.display = 'none';
  btnNextPage.style.display = 'inline-block';
  let infoNumberResults = document.querySelector('.search-form__info');
  let infoPage = document.querySelector('.next-page__info')
  let perPage = 40;
  
  let inputSearch = input.value.trim();
            // Вариант. выборка из всех элементов (полей) формы значения поля с name='searchQuery'
                //const {
                //    elements: { searchQuery }
                //          } = event.currentTarget;
                //const queryValue = searchQuery.value.trim();

  if (infoNumberResults) {
    infoNumberResults.remove();
  }
  if (infoPage) {
    infoPage.remove();
  }
  if (queryValue !== inputSearch) {
    queryValue = inputSearch;
    page = 1;
    numberResults = 0;
  }
  if (queryValue) {
    let apiService = API.apiPexels(queryValue, perPage, page);
    let url = apiService.url;
    let options = apiService.options;

    request.requestAxios(url, options)
      .then(data => {
        console.log(data);
          numberResults = data.total_results;
          form.insertAdjacentHTML('beforeend',
            `<p class="search-form__info">Hooray! We found ${numberResults} images.</p>`
          )
          return data.photos
        })
      .then(photos => photos.map(photo => photoCard.createPhotoCard(photo)).join(''))
      .then(element => {
          const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });
          gallery.innerHTML = element;
        })
      .then(() => {
          nextPage.insertAdjacentHTML('beforeend',
            `<p class="next-page__info">Hooray! We found ${page}/${Math.ceil(numberResults/perPage)} pages.</p>`
          )
          nextPage.style.display = 'block';
          if (Math.ceil(numberResults/perPage) > page) {
            page += 1;
          } else {
            btnNextPage.style.display = 'none';
            Notify.info('We`re sorry, but you`ve reached the end of search results.');
          }
        })
      .catch(error => console.log(error))
  }
}

form.addEventListener('submit', (event) => {
        page = 1;
        queryPexels(event)
    })
btnNextPage.addEventListener('click', queryPexels)



              //  Прокрутка, ее значение определено высотой <div class="photo-card">
                      //      .then(gallery => {
                      //        const { height: cardHeight } = document
                      //            .querySelector(".gallery")
                      //            .firstElementChild.getBoundingClientRect();
                      //
                      //        window.scrollBy({
                      //          top: cardHeight,
                      //            behavior: "smooth",
                      //        }); 
                      //      })