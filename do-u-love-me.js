const container = document.querySelector('.container');
const question = document.querySelector('.question');
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

const containerRect = container.getBoundingClientRect();
const noButtonRect = noButton.getBoundingClientRect(); 

yesButton.addEventListener('click', () => {
  question.innerHTML= 'I love you too!!! 💖🥹💕';
});

noButton.addEventListener('mouseover', () => {
  const i =Math.floor(Math.random() * (containerRect.width - noButtonRect.width)) +1;
  const j =Math.floor(Math.random() * (containerRect.height - noButtonRect.height)) +1;

  noButton.style.left = i + 'px';
  noButton.style.top = j + 'px';
});
