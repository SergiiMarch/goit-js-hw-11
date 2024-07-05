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
    const gallery = `<div>
    <img src="${image.webformatURL}" alt="${image.tags}" />
    <div>
      <p>${image.likes}</p>
      <p>${image.views}</p>
      <p>${image.comments}</p>
      <p>${image.downloads}</p>
    </div>
  </div>`;
    divEl.insertAdjacentHTML('beforeend', gallery);
  });
}
