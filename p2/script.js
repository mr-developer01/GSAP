gsap.from("#page-1 .box", {
  scale: 0,
  delay: 1,
  duration: 3,
  rotate: 360,
});

gsap.from("#page-2 .box", {
  scale: 0,
  duration: 2,
  rotate: 760,
  scrollTrigger: {
    trigger: "#page-2 .box",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2 // value can be (true or false) or from 0 t0 5
  },
});

gsap.from("#page-3 h1", {
//   scale: 0,
  x: "110%",
  scrollTrigger: {
    trigger: "#page-3",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true
  },
});