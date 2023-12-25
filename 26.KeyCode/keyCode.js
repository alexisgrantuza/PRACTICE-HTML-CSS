//insert
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  //   console.log(event.key);
  //   console.log(event.keyCode);
  //   console.log(event.code);


  insert.innerHTML = `
    <div class="key">
      ${e.key === " " ? "space" : e.key}
      <small>e.key</small>
    </div>
    <div class="key">
      ${e.keyCode === " " ? "space" : e.keyCode}
      <small>e.keyCode</small>
    </div>
    <div class="key">
      ${e.code === " " ? "space" : e.code}
      <small>e.code</small>
    </div>
  `;
});