let app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString(
    "I am a data science major at UC Berkeley with an interest in robotics!"
  ) //Add your own tagline
  .pauseFor(3000)
  .start();

let granimInstance = new Granim({
  element: "#canvas-image-blending",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  image: {
    source: "images/back.jpg", //change image for intro section if desired
    blendingMode: "multiply",
    imageStretch: true, // Set this option to stretch the image
  },
  states: {
    "default-state": {
      gradients: [
        ["#29323c", "#485563"],
        ["#FF6B6B", "#556270"],
        ["#80d3fe", "#7ea0c4"],
        ["#f0ab51", "#eceba3"],
      ],
      transitionSpeed: 8000,
    },
  },
});
