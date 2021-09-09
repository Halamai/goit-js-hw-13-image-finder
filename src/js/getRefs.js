export default {
  imageShow: document.querySelector('#search-form'),
  galerryList: document.querySelector('#gallery-list'),
  input: document.querySelector('#qwery'),
  loadMoreImg: document.querySelector('#load-mohre'),
};
// import refs from './js/getRefs';
// import makeImgMarkUppInfo from './templates/gallery-items.hbs';
// import ApiSevice from './js/api-service';

// const BASE_URL = 'https://pixabay.com/api/';

// let pageNumber = 1;

// const onImageShow = e => {
//   e.preventDefault();

//   const queryParams = creatUrl(refs.input.value, pageNumber);
//   return fetch(`${BASE_URL}?${queryParams}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(renderImg);
// };

// const renderImg = ({ hits }) => {
//   refs.galerryList.innerHTML = makeImgMarkUppInfo(hits);
// };

// function creatUrl(search, numberPage) {
//   const queryParams = new URLSearchParams({
//     key: '23293427-f7753480c7139e95ecc6333d5',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     q: search,
//     page: numberPage,
//     per_page: 12,
//   });
//   return queryParams;
// }

// const onMohreImageShow = () => {};

// refs.imageShow.addEventListener('submit', onImageShow);
// refs.loadMore.addEventListener('click', onMohreImageShow);
