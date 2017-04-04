/* JavaScript File*/

/* Carousel Function */

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav');
menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

$('.carousel').carousel({
  interval: 3000
})
$('#carousel').on('slide.bs.carousel', function () {
  direction:left
})
