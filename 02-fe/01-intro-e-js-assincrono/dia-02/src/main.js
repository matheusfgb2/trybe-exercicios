import Swal from 'sweetalert2';
import './style.css'

const shCard = document.getElementById('super-hero-card');
const shImg = document.getElementById('super-hero-img');
const shName = document.getElementById('super-hero-name');
const draftBtn = document.getElementById('draft-btn');

const insertHero = (data) => {
  const randomIndex = Math.floor(Math.random() * data.length - 1);
  const hero = data[randomIndex];
  shImg.src = hero.images.md;
  shImg.alt = hero.slug;
  shName.innerHTML = hero.name;
}

draftBtn.addEventListener(('click'), () => {
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .then(response => response.json())
    .then(data => {
      insertHero(data);

    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));

})


