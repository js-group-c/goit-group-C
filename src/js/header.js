import { all } from 'axios';

var modal = document.getElementById('login-modal');
var btn = document.getElementById('btn-sign-up');
var span = document.getElementsByClassName('close-modal')[0];

var submitBtn = document.getElementsByClassName('submit-button')[0];
var btnHmbrgr = document.getElementsByClassName('hmbrgr')[0];

var btnToggleMode = document.querySelector(
  'div.right-container > a.switcher-2'
);

btn.addEventListener('click', btn.onclick);
btnHmbrgr.addEventListener('click', btnHmbrgr.onclick);
submitBtn.addEventListener('click', signUp);

btnToggleMode.addEventListener('click', toggleMode);

btn.onclick = function () {
  modal.style.display = 'flex';
};
btnHmbrgr.onclick = function () {
  modal.style.display = 'flex';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) modal.style.display = 'none';
};

function signUp() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (username && email && password) {
    alert('Signup Successful!');
    modal.style.display = 'none';
  } else {
    alert('Please fill out all fields.');
  }
}
function toggleMode() {
  var svg = document.querySelector('svg.swicther-2-svg');
  var header = document.querySelector('header.header');
  var navLogoTxt = document.querySelector('svg.nav-logo-txt');
  var hmbrgrMenu = document.querySelector('svg.hmbrgr-menu');
  var shoppingLink = document.querySelector('a.nav-link.shopping-list');
  var shoppingIcon = document.querySelector('svg.lock-02');
  var body = document.querySelector('body');
  var ctgs = document.querySelectorAll('ul#categories > li.ctg');
  var title = document.querySelector('.top_list-title');
  var bookTitles = document.querySelectorAll('.top_list-book_title ');
  var seeMore = document.querySelectorAll('.top_list-see_more');
  var allCats = document.querySelector('.all_categories');

  if (svg.innerHTML.includes(`Switcher-2@2x.svg#switcher2`)) {
    svg.innerHTML = `<use href="../img/SwitcherDark@2x.svg#switcherDark"></use>`;
    header.style.backgroundColor = 'var(--black)';
    header.style.border = ' 1.5px solid #FFFFFF';
    navLogoTxt.style.filter = 'brightness(0) invert(1)';
    hmbrgrMenu.style.filter = 'brightness(0) invert(1)';
    shoppingLink.style.color = 'var(--white)';
    shoppingIcon.style.filter = 'brightness(0) invert(1)';
    body.style.backgroundColor = 'var(--black)';
    ctgs.forEach(elem => {
      elem.style.color = '#FFFFFF';
    });
    title.style.color = 'var(--white)';
    //allCats.style.color = 'var(--white)';
    bookTitles.forEach(e => {
      e.style.color = 'var(--white)';
    });
    seeMore.forEach(e => {
      e.style.color = 'var(--white)';
    });
  } else {
    svg.innerHTML = `<use href="../img/Switcher-2@2x.svg#switcher2"></use>`;
    header.style.backgroundColor = 'var(--white)';
    header.style.border = ' 1.5px solid #111111';
    navLogoTxt.style.filter = '';
    hmbrgrMenu.style.filter = '';
    shoppingLink.style.color = 'var(--black)';
    shoppingIcon.style.filter = '';
    body.style.backgroundColor = 'var(--white)';
    ctgs.forEach(elem => {
      elem.style.color = '#111111';
    });
    title.style.color = 'var(--black)';
    //allCats.style.color = 'var(--black)';
    bookTitles.forEach(e => {
      e.style.color = 'var(--black)';
    });
    seeMore.forEach(e => {
      e.style.color = 'var(--black)';
    });
  }
}
