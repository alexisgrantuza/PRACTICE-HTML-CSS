// container
const container = document.querySelector('.page-container');
// pages
const pages = document.querySelectorAll('.page');
// toggleBtn
const toggleBtn = document.querySelector('.toggle-btn');
// ul
const ul = document.querySelector('.nav-list');
// overlay
const overlay = document.querySelector('.overlay');
// links
const links = document.querySelectorAll('.link');

let pageIndex = 0;


toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle("active");
  container.classList.toggle("active");
  ul.classList.toggle("show");
});

links.forEach((item, i) => {
  item.addEventListener("click", () => {
    nextPage(i);
  });
});

function nextPage(index) {
  overlay.style.animation = `slide 1s linear 1`;

  setTimeout(() => {
    pages[pageIndex].classList.remove("active");
    pages[index].classList.add("active");
    pageIndex = index;
  }, 500);

  setTimeout(() => {
    overlay.style.animation = null;
  }, 1000);
}