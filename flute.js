let slideIndex = [1, 1]; // Keep track of the current slide for each slideshow
let slideId = ["mySlides1", "mySlides2"]; // Identifiers for your slideshows
let slideTimers = []; // Array to store the timers for each slideshow

// Initialize all slideshows
// Call initial showSlides, and then start the auto-play
showSlides(1, 0); // Initialize first slideshow (Musikverein)
showSlides(1, 1); // Initialize second slideshow (Carnegie Hall)

// Function to advance slides manually (from arrow clicks)
function plusSlides(n, no) {
  // Clear the existing timer for this slideshow when a manual click occurs
  // This prevents the automatic change from happening immediately after a click
  clearTimeout(slideTimers[no]);
  showSlides((slideIndex[no] += n), no);
}

// Function to display slides, adapted for automatic progression
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]); // Get all slides for the current slideshow

  // Reset slide index if it goes out of bounds
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }

  // Hide all slides in the current slideshow
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Display the current slide
  x[slideIndex[no] - 1].style.display = "block";

  // Increment the slide index for the next automatic transition
  slideIndex[no]++;

  // If we've gone past the last slide, loop back to the first
  if (slideIndex[no] > x.length) {
    slideIndex[no] = 1;
  }

  // Set a new timer for the next automatic slide change for THIS slideshow
  // Store the timer ID so we can clear it on manual clicks
  slideTimers[no] = setTimeout(function () {
    showSlides(slideIndex[no], no);
  }, 2000); // Change image every 2 seconds (adjust as desired)
}
