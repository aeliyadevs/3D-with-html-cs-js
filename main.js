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

///////////////////////////////////////////////////////////////////////
// Animate based on scroll event
///////////////////////////////////////////////////////////////////////
const items = document.querySelectorAll(".item");
const angle = 360 / items.length;
const radius = 300;
items.forEach((item, index) => {
  item.style.transform =
    "rotateX(" + angle * (index + 1) + "deg) translateZ(" + radius + "px)";
});

// using intersection observer api to determine if the section is visible
const scrollAnimate = document.getElementById("scroll-animate");

// callback function
const handleScroll = (entries, observer) => {
  console.log(entries);
  // console.log(scrollAnimate.getBoundingClientRect());
  // console.log(scrollAnimate.getBoundingClientRect().y);
  // let pixel = (825 - scrollAnimate.getBoundingClientRect().y) / 360;
  // console.log(pixel);
  // scrollAnimate.style.transform =
  //   "perspective(1000px) rotateX(" + pixel + "deg)";
  window.onscroll = (e) => {
    // let angle = scrollAnimate.getBoundingClientRect().y / 20;
    let angle = window.scrollY % 360;
    scrollAnimate.style.transform =
      "perspective(1500px) rotateX(" + angle + "deg)";
    console.log(angle);
  };
};

let observer = new IntersectionObserver(handleScroll, {
  threshold: 0.5,
  rootMargin: "0px",
});

observer.observe(scrollAnimate);
