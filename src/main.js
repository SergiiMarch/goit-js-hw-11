import { fetchImages } from './js/pixabay-api';
import { randomMarcup } from './js/render-functions';
const buttonEl = document.querySelector('.button-js');
const divEl = document.querySelector('.js-div');

buttonEl.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  const query = document.querySelector('.search-js').value.trim();
  fetchImages(query)
    .then(images => randomMarcup(images))
    .catch(error => console.log(error));
}

/////////////////////////////////////////////////////

export { divEl };
