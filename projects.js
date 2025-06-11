// Skincare Recommendation System Modal
const openSkincareButton = document.getElementById("open-s");
const modalSkincareContainer = document.getElementById("modal-s");
const closeSkincareButton = document.getElementById("close-s");

console.log("Skincare open button:", openSkincareButton);
console.log("Skincare modal container:", modalSkincareContainer);
console.log("Skincare close button:", closeSkincareButton); // Check if this is null or an element

// Arduino PCR COVID-19 Detector Modal
const openArduinoButton = document.getElementById("open-arduino");
const modalArduinoContainer = document.getElementById("modal-arduino");
const closeArduinoButton = document.getElementById("close-arduino");

console.log("Arduino open button:", openArduinoButton);
console.log("Arduino modal container:", modalArduinoContainer);
console.log("Arduino close button:", closeArduinoButton);

// Event listener to OPEN the Skincare modal
openSkincareButton.addEventListener("click", () => {
  console.log("Skincare open button clicked!"); // Check if this logs
  modalSkincareContainer.classList.add("show");
  document.body.style.overflow = "auto";
});

// Event listener to CLOSE the Skincare modal
closeSkincareButton.addEventListener("click", () => {
  console.log("Skincare close button clicked!"); // This is the crucial one to check
  modalSkincareContainer.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Event listener to OPEN the Arduino modal
openArduinoButton.addEventListener("click", () => {
  modalArduinoContainer.classList.add("show");
  document.body.style.overflow = "auto"; // Prevent scrolling when modal is open
});

// Event listener to CLOSE the Arduino modal
closeArduinoButton.addEventListener("click", () => {
  modalArduinoContainer.classList.remove("show");
  document.body.style.overflow = "auto"; // Re-enable scrolling
});
