gsap.registerPlugin(ScrollTrigger);
let menuOpen = false;

function openMenu() {
  if (menuOpen) {
    document.querySelector("nav").style.left = "-200dvw";
    document.querySelector(".button-menu").style.backgroundColor =
      "var(--text-color)";
    document.querySelector(".button-menu").style.width = "7dvw";
    document.querySelector(".button-menu img").style.width = "7dvw";
    document.querySelector(".button-menu").style.height = "7dvw";
    document.querySelector(".button-menu img").style.height = "7dvw";
    gsap.to(".button-menu", {
      x: "0",
      y: "0",
      duration: 0,
    });
  } else {
    document.querySelector("nav").style.left = "0";
    document.querySelector(".button-menu").style.backgroundColor =
      "var(--background-color)";
    document.querySelector(".button-menu").style.width = "63dvw";
    document.querySelector(".button-menu img").style.width = "63dvw";
    document.querySelector(".button-menu").style.height = "63dvw";
    document.querySelector(".button-menu img").style.height = "63dvw";
    gsap.to(".button-menu", {
      x: "20%",
      y: "10%",
      duration: 0,
    });
  }
  menuOpen = !menuOpen;
}

gsap.to(".landing-pixel", {
  scale: 2,
  x: "12%",
  y: "-70%",
  color: "#ff5424",
  scrollTrigger: {
    trigger: ".landing",
    start: "top",
    end: "10% top",
    scrub: true,
    onEnter: () => {
      gsap.to(".pixel-text", {
        color: "#ff5424",
        duration: 0.3,
      });
    },
    onLeave: () => {
      document.querySelector(".pixel-text").innerHTML =
        "Everything you see, starts here";
    },
    onEnterBack: () => {
      gsap.to(".pixel-text", {
        color: "#ff5424",
        duration: 0.3,
      });
      document.querySelector(".pixel-text").innerHTML =
        "The world is made of pixels";
    },
    onLeaveBack: () => {
      gsap.to(".pixel-text", {
        color: "#f4f1f1",
        duration: 0.3,
      });
    },
  },
});

gsap.to(".landing", {
  alpha: 0,
  scrollTrigger: {
    trigger: ".landing",
    start: "top",
    end: "10% top",
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
  },
});

gsap.to(".transition-pixel", {
  scale: 6,
  scrollTrigger: {
    trigger: ".landing",
    start: "top",
    end: "top -95%",
    scrub: true,
    onLeave: () => {
      gsap.to(".pixel-text", {
        alpha: 0,
        duration: 0.3,
      });
      gsap.to(".transition-pixel", {
        alpha: 0,
        duration: 0.3,
      });
      gsap.to(".second-section", {
        alpha: 1,
        duration: 0.3,
      });
    },
    onEnterBack: () => {
      gsap.to(".transition-pixel", {
        alpha: 1,
        duration: 0.3,
      });
      gsap.to(".second-section", {
        alpha: 0,
        duration: 0.3,
      });
      gsap.to(".pixel-text", {
        alpha: 1,
        duration: 0.3,
      });
    },
    onEnter: () => {
      gsap.to(".second-section", {
        alpha: 0,
        duration: 0.3,
      });
    },
  },
});
