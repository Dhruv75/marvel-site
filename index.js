//Random Letter Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".unfold").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
//lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

//gsap Animation Code
//Cursor
gsap.registerPlugin("ScrollTrigger");

var body = document.querySelector("body");
var cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
  });
});

var links = document.querySelectorAll("li");
links.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 5,
    });
  });
});
links.forEach(function (link) {
  link.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
    });
  });
});

//TextAnimation
gsap.registerPlugin("ScrollTrigger");

const splitTypes = document.querySelectorAll(".txtAni");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "char" });
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

//Navbar Text
gsap.from("nav li", {
  y: -50,
  opacity: 0,
  duration: 0.7,
  delay: 0.3,
  stagger: 0.1,
});

gsap.from("nav button", {
  x: 50,
  delay: 1.5,
  opacity: 0,
  ease: "elastic.out(1,0.3)",
});

//image animation
gsap.to(".section-1 img", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".section-1",
    scroller: "body",
    pin: true, // Pin the element
    pinSpacing: false,
    scrub: true,

    start: "top 0", // Start animation when the trigger element's top reaches the center of the viewport
    end: "bottom 150", // End animation when the trigger element's bottom reaches the center of the viewport
    toggleActions: "play reverse play reverse", // Play the animation when the trigger enters the viewport, but don't reverse it when it exits
  },
});
gsap.to(".section-3 img", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".section-3",
    scroller: "body",
    scrub: true,
    pin: true, // Pin the element
    pinSpacing: false,

    start: "top 0", // Start animation when the trigger element's top reaches the center of the viewport
    end: "bottom 150", // End animation when the trigger element's bottom reaches the center of the viewport
    toggleActions: "play reverse play reverse", // Play the animation when the trigger enters the viewport, but don't reverse it when it exits
  },
});

gsap.to(".section-5", {
  scrollTrigger: {
    trigger: ".section-5",
    scroller: "body",
    pin: true, // Pin the element
    scrub: true,
    pinSpacing: false,

    start: "top 0", // Start animation when the trigger element's top reaches the center of the viewport
    end: "bottom 150", // End animation when the trigger element's bottom reaches the center of the viewport
    toggleActions: "play reverse play reverse", // Play the animation when the trigger enters the viewport, but don't reverse it when it exits
  },
});
