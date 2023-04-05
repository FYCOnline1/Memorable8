let counter = 0;
let clickValue = 1;

const cookie = document.getElementById('cookie');
const counterDisplay = document.getElementById('counter');
const clicker = document.getElementById('clicker');

cookie.addEventListener('click', () => {
  counter += clickValue;
  counterDisplay.textContent = `${counter} cookies`;
});

clicker.addEventListener('click', () => {
  counter += clickValue;
  counterDisplay.textContent = `${counter} cookies`;
});