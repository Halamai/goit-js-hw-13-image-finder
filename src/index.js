import './styles.css';
import data from './menu.json';
import creatMenu from './template/menu.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
  changeThema: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const marcup = creatMenu(data);
refs.menu.innerHTML = marcup;

const thema = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// console.log(refs.changeThema);
refs.changeThema.addEventListener('change', toggleThema);
function toggleThema(e) {
  if (e.target.checked) {
    uppdateClassBody(thema.DARK);
    uppDate(thema.DARK);
  } else {
    uppdateClassBody(thema.LIGHT);
    uppDate(thema.LIGHT);
  }
  //   console.log(e.target.checked);
}
function uppDate(value) {
  localStorage.setItem('thema', value);
}
function start() {
  const date = localStorage.getItem('thema') || thema.LIGHT;
  uppdateClassBody(date);
  refs.changeThema.checked = date === thema.DARK;
  //   console.log(date);
  //
}

function uppdateClassBody(classEl) {
  refs.body.className = classEl;
}
start();
