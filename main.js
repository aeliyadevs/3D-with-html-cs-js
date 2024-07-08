window.onload = function () {
  const cards = document.querySelectorAll(".card");
  const radius = 500;
  const zAngle = 360 / cards.length;
  //   console.log(cards.length);
  cards.forEach((card, index) => {
    console.log(index);
    card.style.transform =
      "rotateX(0deg) rotateY(" +
      (index + 1) * zAngle +
      "deg) rotateZ(0deg) translateZ(" +
      radius +
      "px)";
  });
};
