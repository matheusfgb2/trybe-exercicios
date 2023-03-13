import "./style.css"

const dogBtn = document.getElementById('dog-btn');
const catBtn = document.getElementById('cat-btn');
const surpriseBtn = document.getElementById('surprise-btn');
const img = document.getElementById('pet-img');

const getRandomDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    img.src = data.message;
  });
};

const getRandomCat = (data) => {
  fetch('https://aws.random.cat/meow')
  .then(response => response.json())
  .then(data => {
    img.src = data.file;
  });
};

dogBtn.addEventListener('click', () => getRandomDog());

catBtn.addEventListener('click', () => getRandomCat());

surpriseBtn.addEventListener('click', () => {
Promise.race ([
  getRandomCat(),
  getRandomDog(),
])
});
