import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

window.onscroll = function() {makeSticky();};

var stickyHeader = document.getElementById("stickyHeader");
var offsetTopStickyHeader = stickyHeader.offsetTop;

function makeSticky() {
  if (window.pageYOffset > offsetTopStickyHeader) {
    stickyHeader.classList.add("sticky");
  } else {
    stickyHeader.classList.remove("sticky");
  }
};

function openCity(evt, cityName) {
  console.log("opencity");
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};