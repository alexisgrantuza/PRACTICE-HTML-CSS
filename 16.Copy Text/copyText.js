const copyText = document.querySelector('textarea[name=copyTxt]');
const finalText = document.querySelector('textarea[name=finalTxt]');
const copyBtn = document.querySelector('.copyBtn');
const moveBtn = document.querySelector('.moverBtn');
const output = document.querySelector('.output');


copyBtn.addEventListener('click', () => {
  let temp = copyText.value;
  copy(temp);
});

moveBtn.addEventListener('click', () => {
  let temp = copyText.value;
  finalText.value = temp;
})



copyText.addEventListener('click', () => this.select());
finalText.addEventListener('click', () => this.select());



function copy(str) {
  // Selecting the container where the output will be displayed
  const outputContainer = document.querySelector('.output-container');

  // Creating a textarea element
  const textArea = document.createElement('textarea');
  
  // Setting the value of the textarea to the input string
  textArea.value = str;

  // Appending the textarea to the output container
  outputContainer.appendChild(textArea);

  // Selecting the text inside the textarea
  textArea.select();

  // Executing the 'copy' command to copy the selected text to the clipboard
  document.execCommand('copy');

  // Removing the textarea from the DOM (it was temporarily added for copying)
  outputContainer.removeChild(textArea);

  // Displaying a message indicating that the content has been copied
  output.innerHTML = `<h3>Content Copied </h3>`;

  // Adding a class ('added') to the output element
  output.classList.add('added');

  // Setting a timeout to remove the 'added' class and clear the output after 2000 milliseconds (2 seconds)
  setTimeout(() => {
    output.classList.toggle('added');
    output.textContent = '';
  }, 2000);
}