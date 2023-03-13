import './style.css'
import Swal from 'sweetalert2'

const input = document.getElementById('input');
const searchBtn = document.getElementById('search-btn');
const coinList = document.getElementById('coin-list');
const valueText = document.getElementById('value-text');

const makeItems = (coins) => {
  Object.keys(coins).forEach(key => {
    const item = document.createElement('li');
    const coinImg = document.createElement('img');
    const coinP = document.createElement('p');
    const valueP = document.createElement('p');

    coinImg.src = './src/img/coin.svg';
    coinP.innerHTML = key;
    valueP.innerHTML = coins[key];
    valueP.style.color = '#FFE713';
    item.appendChild(coinImg);
    item.appendChild(coinP);
    item.appendChild(valueP);
    item.className = 'coin';
    coinList.appendChild(item);
  })
}

const clearItems = () => {
  const item = document.getElementsByClassName('coin');
  for (let index = item.length - 1; index >= 0; index -= 1) {
    item[index].remove();
  }
  valueText.innerHTML = '';
}

const treatment = (coinInput, data) => {
  if (coinInput.length === 0) {
    Swal.fire({
      title: 'Erro!',
      text: 'Insira uma moeda para continuar!',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
    return false;
  }
  if (!Object.keys(data.rates).includes(coinInput)) {
    Swal.fire({
      title: 'Erro!',
      text: 'Moeda não encontrada!',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
    return false;
  }
  return true;
}

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const coinInput = input.value;
  fetch(`https://api.exchangerate.host/latest?base=${coinInput}`)
    .then(response => response.json())
    .then(data => {
      if (treatment(coinInput, data)) {
        clearItems();
        makeItems(data.rates);
        valueText.innerHTML += `Valores referentes a 1 ${coinInput}`;
      }
    })
})