let toggler = document.getElementById('switch');

toggler.addEventListener('click', () => {
  if(toggler.checked) {
    document.body.style.backgroundColor = 'black'; 
  } else {
    document.body.style.backgroundColor = 'white';
  }
})