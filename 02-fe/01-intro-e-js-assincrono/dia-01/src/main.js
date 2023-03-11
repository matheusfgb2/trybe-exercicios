import validator from 'validator';
import './style.css';

const userInput = document.getElementById('userInput');
const selectTypeEl = document.getElementById('validatorType');
const submitBtnEl = document.getElementById('submitBtn');
const resultEl = document.getElementById('result');

submitBtnEl.addEventListener('click', (event) => {
  event.preventDefault();
  const option = selectTypeEl.value;
  const input = userInput.value;
  resultEl.innerHTML = 'A avaliação retornou ';
  switch (option) {
    case 'letras':
      resultEl.innerHTML += validator.isAlpha(input);
      break;
    case 'email':
      resultEl.innerHTML += validator.isEmail(input);
      break;
    case 'url':
      resultEl.innerHTML += validator.isURL(input);
      break;
    case 'ola':
      resultEl.innerHTML += validator.equals(input, 'Olá, mundo!');
      break;
    case 'par':
      resultEl.innerHTML += validator.isDivisibleBy(input, 2);
      break;
  }
  
});