import './css/style.css';
import refs from './js/getRefs.js';
import makeImgMarkUppInfo from './templates/gallery-items.hbs';
import ApiService from './js/api-service';

const api = new ApiService();
console.log(api);

const renderImg = ({ hits }) => {
  const mohreimages = makeImgMarkUppInfo(hits);
  refs.galerryList.insertAdjacentHTML('beforeEnd', mohreimages);
};

const onImageShow = e => {
  e.preventDefault();
  const input = refs.input.value;
  console.log(input);
  api.query(input);
  api.fetchPicture(input).then(data => {
    renderImg(data);
    refs.loadMoreImg.classList.remove('is-hiden');
  });
};

const onMohreImageShow = () => {
  api.incrementPage();
  api.fetchPicture().then(data => {
    renderImg(data);
  });
};

refs.imageShow.addEventListener('submit', onImageShow);
refs.loadMoreImg.addEventListener('click', onMohreImageShow);

// const element = document.getElementById('.gallery');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });
// console.log();
