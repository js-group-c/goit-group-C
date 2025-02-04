var modal = document.getElementById('login-modal');
var btn = document.getElementById('btn-sign-up');
var span = document.getElementsByClassName('close-modal')[0];

var submitBtn = document.getElementsByClassName('submit-button')[0];

btn.addEventListener('click', btn.onclick);
submitBtn.addEventListener('click', signUp);

btn.onclick = function () {
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
