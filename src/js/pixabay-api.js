const API_KEY = '44791015-436dd02a5fc0b5187e9b97af9';
const urlApi = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${urlApi}?key=${API_KEY}&q=${query}&image_type=foto&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    })
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits; // Повертаємо масив зображень
    })
    .catch(error => console.log(error));
}
