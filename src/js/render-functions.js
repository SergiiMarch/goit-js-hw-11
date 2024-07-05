import { divEl } from '../main';

function clearDivEl() {
  divEl.innerHTML = ' ';
}

function randomMarcup(images) {
  clearDivEl();
  let galleryMarkup = '';
  images.forEach(image => {
    const galleryItem = `
          <div class="card">
            <div class="card-img-top">
              <img src="${image.webformatURL}" alt="${image.tags}" width="360px">
            </div>
            <div class="card-body">
              <h5 class="card-title">${image.tags}</h5>
              <p>Likes: ${image.likes}</p>
              <p>Views: ${image.views}</p>
              <p>Comments: ${image.comments}</p>
              <p>Downloads: ${image.downloads}</p>
            </div>
          </div>`;
    galleryMarkup += galleryItem;
  });
  divEl.insertAdjacentHTML('beforeend', galleryMarkup);
}

export { randomMarcup };
