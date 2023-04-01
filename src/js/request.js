import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function requestAxios(url, options) {
    return axios(url, options)
        .then(response => {
                    let numberResults = response.data.total;
                    if (!numberResults) {
                        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                    } else {
                        return response.data
                    }
                })
                .catch(error => console.log(error))
}

export default { requestAxios };

// запрос fetch()
                  //fetch(url, options)
                  //    .then(response => response.json())
                  //    .then(result => result.photos)
                  //    .then(photos => {console.log(photos)
                  //        return photos.map(photo => createPhotoCard(photo)).join('')
                  //      })
                  //    .then(element => gallery.innerHTML = element)
                  //    .catch(error => console.log(error))