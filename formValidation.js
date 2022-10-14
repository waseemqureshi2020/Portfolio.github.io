/* eslint no-unused-vars: "error" */

const emailForm = document.querySelector('.form');
const emailElement = document.querySelector('#email');
const invalidEmail = document.querySelector('.invalidEmail');

// eslint-disable-next-line no-unused-vars
function submitForm(event) {
  if (emailElement.value === emailElement.value.toLowerCase()) {
    emailForm.submit();
    emailForm.reset();
  } else {
    event.preventDefault();
    invalidEmail.innerHTML = 'Email address should be in lowercase';
  }
}