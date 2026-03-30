let app = document.getElementById("typewriter-app");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});

typewriter
  .pauseFor(800)
  .typeString("Data Science student at UC Berkeley")
  .pauseFor(2500)
  .deleteAll(50)
  .typeString("interested in machine learning & robotics")
  .pauseFor(2500)
  .deleteAll(50)
  .typeString("beli rater · traveler · waymo rider")
  .pauseFor(2500)
  .deleteAll(50)
  .start();

let granimInstance = new Granim({
  element: "#canvas-image-blending",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  image: {
    source: "images/back.jpg",
    blendingMode: "multiply",
    imageStretch: true,
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
