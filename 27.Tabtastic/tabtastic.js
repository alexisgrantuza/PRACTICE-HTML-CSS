function getTab (element) {
  //active
  const active = document.querySelector('.active');
  //visible
  const visible = document.querySelector('.content-visible');
  //tabContent
  const tabContent = document.getElementById(element.href.split('#')[1]);


  active.classList.toggle('active');
  visible.classList.toggle('content-visible');

  element.classList.add('active');
  tabContent.classList.add('content-visible');
}

document.addEventListener('click', event => {
  if (event.target.matches('.tab-item a')) {
    getTab(event.target);
  }
});