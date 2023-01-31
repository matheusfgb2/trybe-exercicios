document.getElementById('header-container').style.backgroundColor = 'green';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';
const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');
for (index of emergencyTasksH3) {
  index.style.backgroundColor = 'purple';
}

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';
const noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (index of noEmergencyTasksH3) {
  index.style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'darkgreen';