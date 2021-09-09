import './css/style.css';
import refs from './js/getRefs.js';
import makeImgMarkUppInfo from './templates/gallery-items.hbs';
import ApiService from './js/api-service';

const api = new ApiService();
console.log(api);

const renderImg = ({ hits }) => {
  const mohreimages = makeImgMarkUppInfo(hits);
  refs.galerryList.innerHTML = mohreimages;
  nextpages();
};

const onImageShow = e => {
  e.preventDefault();
  const input = refs.input.value;
  api.query = input;

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

function nextpages() {
  setTimeout(() => {
    const element = document.body;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, 500);
}
