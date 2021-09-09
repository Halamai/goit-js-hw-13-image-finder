import './css/style.css';
import refs from './js/getRefs.js';
import makeImgMarkUppInfo from './templates/gallery-items.hbs';
import ApiService from './js/api-service';

const api = new ApiService();

const renderImg = ({ hits }) => {
  const mohreimages = makeImgMarkUppInfo(hits);
  refs.galerryList.insertAdjacentHTML('beforeend', mohreimages);
  nextpages();
};

const onImageShow = e => {
  e.preventDefault();
  const input = refs.input.value;
  api.query = input;
  api.testPage();
  api.fetchPicture(input).then(data => {
    renderImg(data);
    refs.loadMoreImg.classList.remove('is-hiden');
  });
  refs.galerryList.innerHTML = '';
};

const onMohreImageShow = () => {
  api.incrementPage();
  api.fetchPicture().then(data => {
    renderImg(data);
  });
};

refs.imageShow.addEventListener('submit', onImageShow);
refs.loadMoreImg.addEventListener('click', onMohreImageShow);

function nextpages() {
  setTimeout(() => {
    const element = document.body;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, 500);
}
