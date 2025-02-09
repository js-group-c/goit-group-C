import { all } from 'axios';

var modal = document.getElementById('login-modal');
var btn = document.getElementById('btn-sign-up');
var span = document.getElementsByClassName('close-modal')[0];

var submitBtn = document.getElementsByClassName('submit-button')[0];
var btnHmbrgr = document.getElementsByClassName('hmbrgr')[0];

var btnToggleMode = document.querySelector(
  'div.right-container > a.switcher-2'
);
var mnuSignIn = document.querySelector('#window-sign-in');
var mnuSignUp = document.querySelector('#window-sign-up');

btn.addEventListener('click', btn.onclick);
btnHmbrgr.addEventListener('click', btnHmbrgr.onclick);
submitBtn.addEventListener('click', signUp);

btnToggleMode.addEventListener('click', toggleMode);
mnuSignIn.addEventListener('click', mnuSignIn.onclick);
mnuSignUp.addEventListener('click', mnuSignUp.onclick);

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
mnuSignIn.onclick = function () {
  var inputUsername = document.querySelector('#username');
  var linkSignUp = document.querySelector('#window-sign-up');
  var linkSignIn = document.querySelector('#window-sign-in');
  var btnSignIn = document.querySelector('button.submit-button');

  inputUsername.style.display = 'none';
  linkSignUp.style.textDecoration = 'none';
  linkSignUp.style.color = '#111111';

  linkSignIn.style.textDecoration = 'underline';
  linkSignIn.style.color = 'var(--violet)';

  btnSignIn.textContent = 'SIGN IN';
};
mnuSignUp.onclick = function () {
  var inputUsername = document.querySelector('#username');
  var linkSignUp = document.querySelector('#window-sign-up');
  var linkSignIn = document.querySelector('#window-sign-in');
  var btnSignIn = document.querySelector('button.submit-button');

  inputUsername.style.display = '';
  linkSignUp.style.textDecoration = 'underline';
  linkSignUp.style.color = 'var(--violet)';

  linkSignIn.style.textDecoration = 'none';
  linkSignIn.style.color = '#111111';

  btnSignIn.textContent = 'SIGN UP';
};

function signUp() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var btnSignIn = document.querySelector('button.submit-button');
  const users = JSON.parse(localStorage.getItem('users')) || [];
  var btnSignUp = document.querySelector('svg.btn-sign-up');

  if (btnSignIn.textContent === 'SIGN UP') {
    if (!username || !email || !password) {
      alert('Please fill out all fields.');
      return;
    } else {
      // Add new user to the array
      users.push({ username, email, password });
      // Save updated users array back to LocalStorage
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup Successful!');
      modal.style.display = 'none';
    }
  } else {
    const user = users.find(u => {
      return u.email === email;
    });

    if (user == undefined || user.password !== password) {
      alert('Password does not match or user does not exist!');
    } else {
      alert('Signin successful!');
      modal.style.display = 'none';
      btnSignUp.style.display = 'none';
      createUserProfile(user.username);
    }
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
  //var allCats = document.querySelector('.all_categories');
  var signUpModal = document.querySelector('.modal-signUp');
  var signUpInputs = document.querySelectorAll('.login-form form input');
  var loginFormButton = document.querySelector('.login-form button');
  var modalWindows = document.querySelectorAll('div.modal-window > a');
  var closeModal = document.querySelector('div.close-modal');

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
    signUpModal.style.backgroundColor = 'var(--black)';
    signUpInputs.forEach(i => {
      i.style.backgroundColor = 'var(--black)';
      i.classList.add('dark-mode');
    });
    loginFormButton.style.backgroundColor = 'var(--white)';
    loginFormButton.style.color = 'var(--black)';
    modalWindows.forEach(mw => {
      mw.style.color = 'var(--white)';
    });
    closeModal.style.color = 'var(--white)';
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
    signUpModal.style.backgroundColor = '#F6F6F6';
    signUpInputs.forEach(i => {
      i.style.backgroundColor = '#F6F6F6';
      i.classList.remove('dark-mode');
    });
    loginFormButton.style.backgroundColor = '#111111';
    loginFormButton.style.color = 'var(--white)';
    modalWindows.forEach(mw => {
      mw.style.color = 'var(--black)';
    });
    closeModal.style.color = 'var(--black)';
  }
}
function createUserProfile(username) {
  var btnUserProfile = document.querySelector('a#btn-sign-up');
  var markup = `<div class='signed-in'><img src='../img/Stephen.png' width=37 height= 37 /><p>${username}</p></div>`;
  btnUserProfile.insertAdjacentHTML('beforeend',markup);
  console.log(btnUserProfile.innerHTML);
}
