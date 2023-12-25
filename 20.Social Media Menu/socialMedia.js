//selectField
let selectField = document.querySelector('.selectField');
//selectText
let selectText = document.getElementById('selectText');
//List
let List = document.getElementById('list');
//arrowIcon
let arrowIcon = document.getElementById('arrowIcon');
//options
let options = document.querySelectorAll('.option')


selectField.addEventListener('click', () => {
  List.classList.toggle('hide');
  arrowIcon.classList.toggle('rotate');
});

for(option of options) {
  option.onclick = function() {
    selectText.innerHTML = this.textContent;
    List.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  }
}