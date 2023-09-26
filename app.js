
const observer = new IntersectionObserver(callback);

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}


const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(element => {
  observer.observe(element);
});

var parallaxContainer = document.querySelector('.paralax');
var parallaxElement = document.querySelector('.backgroundimg');

parallaxContainer.addEventListener('mousemove', function(event) {
  var xPos = (event.clientX / window.innerWidth) - 0.5;
  
  parallaxElement.style.transform = 'translateX(' + xPos * 30 + 'px)';
});
/*21313131*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}