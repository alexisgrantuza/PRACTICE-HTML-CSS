let input = document.getElementById('inputBox');

input.addEventListener('keydown', validate);


function validate() {
  let form = document.querySelector('.main-form');
  let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  const empty = '';

  if(input.value.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
  } else {
    form.classList.add('invalid');
    form.classList.remove('valid');
  }

  if (input.value === empty) {
    form.classList.remove('invalid');
    form.classList.remove('valid');
  }
}