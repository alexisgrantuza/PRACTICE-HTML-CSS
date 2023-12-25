const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];
const typingDelay = 200;
const erasingDelay = 200;
//next word present
const nextWordDelay = 1000;

let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) {
    setTimeout(type, nextWordDelay)
  }
})

function type() {
  if(charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    setTimeout(erase, nextWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay)
  } else {
    index++;
    if(index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}