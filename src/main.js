import { fetchImages } from './js/pixabay-api';
const buttonEl = document.querySelector('.button-js');
const divEl = document.querySelector('.js-div');

buttonEl.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  const query = document.querySelector('.search-js').value.trim();
  fetchImages(query)
    .then(images => randomMarcup(images))
    .catch(error => console.log('error'));
}

function clearDivEl() {
  divEl.innerHTML = '';
}
/////////////////////////////////////////////////////

function randomMarcup(images) {
  clearDivEl();

  images.forEach(image => {
    const gallery = `
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

    // Вставляємо картку в контейнер
    divEl.insertAdjacentHTML('beforeend', gallery);
  });
}
