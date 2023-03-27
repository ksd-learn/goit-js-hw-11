function createPhotoCard(photo) {
  return `<a class="gallery__img" href=${photo.src.large2x}>
            <div class="photo-card">
              <img src="${photo.src.small}" alt="${photo.alt}" loading="lazy" />
              <div class="info">
                <p class="info-item">
                  <b>photographer: ${photo.photographer}</b>
                </p>
              </div>
            </div>
          </a>`
}

export default { createPhotoCard };