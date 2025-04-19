gsap.registerPlugin(ScrollTrigger);

gsap.to(".second-pixel", {
    scale: 2,
  color : "#ff5424",
  scrollTrigger: {
    trigger: ".body",
    start: "top",
    end: "10% top",
    scrub: true,
    onLeave : () => {
        document.querySelector(".second-pixel").style.width = "60dvw";
        document.querySelector(".second-pixel").style.height = "60dvw";
    },
    onLeaveBack : () => {
        document.querySelector(".second-pixel").style.width = "30dvw";
        document.querySelector(".second-pixel").style.height = "30dvw";
    },
  }
});

gsap.to(".landing", {
    alpha: 0,
    scrollTrigger: {
      trigger: ".landing",
      start: "top",
      end: "bottom top",
      pin: true,
      scrub: true,
    }
});

gsap.to(".second-pixel", {
    scale: 10,
    xPercent: 7,
    color: "#f4f1f1",
    scrollTrigger: {
      trigger: ".body",
      start: "10% top",
      end: "30% top",
      markers: true,
      scrub: true,
    }
});