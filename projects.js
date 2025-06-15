// Get the modal
let modal_skincare = document.getElementById("modal-skincare");
let modal_arduino = document.getElementById("modal-arduino");

// Get the button that opens the modal
let open_skincare = document.getElementById("open-skincare");
let open_arduino = document.getElementById("open-arduino");

// Get the <span> element that closes the modal
let span_skincare = document.getElementsByClassName("close-skincare")[0];
let span_arduino = document.getElementsByClassName("close-arduino")[0];

// When the user clicks on the button, open the modal
open_skincare.onclick = function () {
  modal_skincare.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span_skincare.onclick = function () {
  modal_skincare.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_skincare) {
    modal_skincare.style.display = "none";
  }
};

// When the user clicks on the button, open the modal
open_arduino.onclick = function () {
  modal_arduino.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span_arduino.onclick = function () {
  modal_arduino.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal_arduino) {
    modal_arduino.style.display = "none";
  }
};
