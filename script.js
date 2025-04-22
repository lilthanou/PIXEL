gsap.registerPlugin(ScrollTrigger);

gsap.to(".second-pixel", {
    scale: 2,
  color : "#ff5424",
  scrollTrigger: {
    trigger: ".body",
    start: "top",
    end: "10% top",
    scrub: true,
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

gsap.to(".third-pixel", {
    scale: 4,
  color : "#ff5424",
  scrollTrigger: {
    trigger: ".body",
    start: "15% top",
    end: "40% top",
    scrub: true,
    onLeave : () => {
      gsap.to(".second-pixel", {
        alpha: 0,
      });
      gsap.to(".landing", {
        display: "none",
      });
    },
    onEnterBack : () => {
      gsap.to(".second-pixel", {
        alpha: 1,
      });
      gsap.to(".landing", {
        display: "block",
      });
    }
  }
});