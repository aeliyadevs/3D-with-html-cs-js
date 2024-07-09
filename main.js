window.onload = function () {
  // banner section
  const bannerCards = document.querySelectorAll(".banner-card");
  const bannerRadius = 350;
  const rotateAngle = 360 / bannerCards.length;
  bannerCards.forEach((card, index) => {
    card.style.transform =
      "rotateY(" +
      rotateAngle * (index + 1) +
      "deg) rotateX(0deg) translateY(100px) translateZ(" +
      bannerRadius +
      "px)";
  });

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

    // pause animation on hover
    card.addEventListener("mouseover", () => {
      card.parentElement.classList.add("paused");
      card.parentElement.children[0].classList.add("paused");
    });
    // resume animation on hover
    card.addEventListener("mouseleave", () => {
      card.parentElement.classList.remove("paused");
      card.parentElement.children[0].classList.remove("paused");
    });
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

    // pause animation on hover
    card.addEventListener("mouseover", () => {
      card.parentElement.classList.add("paused");
      card.parentElement.children[0].classList.add("paused");
    });
    // resume animation on hover
    card.addEventListener("mouseleave", () => {
      card.parentElement.classList.remove("paused");
      card.parentElement.children[0].classList.remove("paused");
    });
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
const handleScroll = (entries) => {
  // console.log(entries);
  if (entries[0].isIntersecting) {
    window.onscroll = () => {
      const scrollRate = 6; // constant to control the scroll speed (higher => slower)
      let angle = window.scrollY % (360 * scrollRate);
      scrollAnimate.style.transform =
        "perspective(1500px) rotateX(" + angle / scrollRate + "deg)";
      // console.log(angle / scrollRate);
    };
  }
};

let observer = new IntersectionObserver(handleScroll, {
  threshold: 0.2,
  rootMargin: "0px",
});

observer.observe(scrollAnimate);
