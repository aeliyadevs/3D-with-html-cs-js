window.onload = function () {
  // horizontal 360 rotation
  const cards = document.querySelectorAll(".card-hori");
  const radius = 450;
  const yAngle = 360 / cards.length;
  cards.forEach((card, index) => {
    card.style.transform =
      "rotateX(0deg) rotateY(" +
      (index + 1) * yAngle +
      "deg) rotateZ(0deg) translateZ(" +
      radius +
      "px)";
  });

  // vertical 360 rotation
  const verticals = document.querySelectorAll(".card-vert");
  const vertRadius = 350;
  const xAngle = 360 / verticals.length;
  verticals.forEach((card, index) => {
    card.style.transform =
      "rotateX(" +
      (index + 1) * xAngle +
      "deg) rotateY(0deg) rotateZ(0deg) translateZ(" +
      vertRadius +
      "px)";
  });
};
