function cardForPixabayService(photo) {
  return `<a class="gallery-card" href=${photo.largeImageURL}>
            <div >
              <img class="gallery-photo" src="${photo.previewURL}" alt="${photo.tags}" loading="lazy" />
              <div class="gallery-info">
                <div class="gallery-info__item">
                  <p class="item__header">Likes</p>
                  <p class="item__value">${photo.likes}</p>
                </div>
                <div class="gallery-info__item">
                  <p class="item__header">Views</p>
                  <p class="item__value">${photo.views}</p>
                </div>
                <div class="gallery-info__item">
                  <p class="item__header">Comments</p>
                  <p class="item__value">${photo.comments}</p>
                </div>
                <div class="gallery-info__item">
                  <p class="item__header">Downloads</p>
                  <p class="item__value">${photo.downloads}</p>
                </div>
              </div>
            </div>
          </a>`
}

export default { cardForPixabayService };

//function cardForPexelsService(photo) {
//  return `<a class="gallery__img" href=${photo.src.large2x}>
//            <div class="photo-card">
//              <img src="${photo.src.small}" alt="${photo.alt}" loading="lazy" />
//              <div class="info">
//                <p class="info-item">
//                  <b>photographer: ${photo.photographer}</b>
//                </p>
//              </div>
//            </div>
//          </a>`
//}
