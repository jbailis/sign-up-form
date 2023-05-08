const ERROR = 'error'
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');

pwdConfirm.addEventListener('keyup', setErrorStyle);

function setErrorStyle(event) {
  if (pwd.value !== pwdConfirm.value) {
    pwd.classList.add(ERROR)
    pwdConfirm.classList.add(ERROR)
    pwd.parentNode.classList.add(ERROR)
  } else {
    pwd.classList.remove(ERROR)
    pwdConfirm.classList.remove(ERROR)
    pwd.parentNode.classList.remove(ERROR)
  }
}
