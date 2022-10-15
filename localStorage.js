let inputName;
let inputEmail;
let inputTextarea;

function setToLocalStorage() {
  const submitForm = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputTextarea.value,
  };
 localStorage.setItem('submitForm', JSON.stringify(submitForm));
}

// eslint-disable-next-line no-unused-vars
function getInputValue() {
  inputName = document.querySelector('#name');
  inputEmail = document.querySelector('#email_Desk');
  inputTextarea = document.querySelector('#message');

  setToLocalStorage();
}

function getFromLocalStorage() {
  const parseObject = JSON.parse(localStorage.getItem('submitForm'));
  document.getElementById('name').value = parseObject.name;
  document.getElementById('email_Desk').value = parseObject.email;
  document.getElementById('message').value = parseObject.message;
}

getFromLocalStorage();
