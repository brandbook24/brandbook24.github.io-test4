let rowViewButton = document.querySelector('.row-view');
let tileViewButton = document.querySelector('.tile-view');
let newsList = document.querySelector('.news-list');

rowViewButton.onclick = function () {
  rowViewButton.classList.add('view-checked');
  tileViewButton.classList.remove('view-checked');
  newsList.classList.remove('list-tiles-view');
};

tileViewButton.onclick = function () {
  rowViewButton.classList.remove('view-checked');
  tileViewButton.classList.add('view-checked');
  newsList.classList.add('list-tiles-view');
};



let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};


let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } 
  else {
    upButton.classList.remove('shown');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};



