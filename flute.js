let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"];
let slideTimers = [];

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  clearTimeout(slideTimers[no]);
  slideIndex[no] += n;
  showSlides(slideIndex[no], no);
}

function showSlides(n, no) {
  let x = document.getElementsByClassName(slideId[no]);

  if (n > x.length) slideIndex[no] = 1;
  if (n < 1) slideIndex[no] = x.length;

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex[no] - 1].style.display = "block";

  // Increment only inside the timer, not in showSlides itself
  slideTimers[no] = setTimeout(function () {
    slideIndex[no]++;
    showSlides(slideIndex[no], no);
  }, 3000);
}
