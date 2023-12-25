//container
const container = document.querySelector('.content-container-2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  container.classList.toggle('toggle');
});