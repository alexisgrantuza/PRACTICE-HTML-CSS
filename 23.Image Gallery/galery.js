//images
let images = document.querySelectorAll('img');
//wrapper
let wrapper = document.getElementById('wrapper');
//imgWrapper
let imgWrapper = document.getElementById('fullImg');
//close
let close = document.querySelector('span');

images.forEach((img, i) => {
  img.addEventListener('click', () => {
    openModal(`images/img${i}.jpg`);
  });
});

close.addEventListener('click', () => {
  wrapper.style.display = 'none';
});


function openModal(pic) {
  wrapper.style.display = 'flex';
  imgWrapper.src = pic;
}