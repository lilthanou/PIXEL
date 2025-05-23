gsap.registerPlugin(ScrollTrigger);
let menuOpen = false;

function openMenu() {
  if (menuOpen) {
    document.querySelector("nav").style.left = "-200dvw";
    document.querySelector(".button-menu").style.backgroundColor = "var(--text-color)";
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
    document.querySelector(".button-menu").style.backgroundColor = "var(--background-color)";
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

gsap.to(".second-pixel", {
    scale: 2,
    x : "9%",
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
      end: "bottom 50%",
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
        onLeave : () => {
          gsap.to(".second-pixel", {
            display: "none",
          });
        },
      });
      gsap.to(".landing", {
        display: "none",
      });
      gsap.to(".second-section", {
        display: "flex",
      });
    },
    onEnterBack : () => {
      gsap.to(".second-pixel", {
        alpha: 1,
        display: "block",
      });
      gsap.to(".landing", {
        display: "block",
      });
      gsap.to(".second-section", {
        display: "none",
      });
    },
    onEnter : () => {
      gsap.to(".second-pixel-text", {
        alpha: 0,
        onComplete: () => {
          document.querySelector(".second-pixel-text").innerHTML = "Everything you see ... starts here.";
          gsap.to(".second-pixel-text", {
            alpha: 1,
          });
        },
      });
    },
    onLeaveBack : () => {
      gsap.to(".second-pixel-text", {
        alpha: 0,
        onComplete: () => {
          document.querySelector(".second-pixel-text").innerHTML = "The world is made of pixels.";
          gsap.to(".second-pixel-text", {
            alpha: 1,
          });
        },
      });
    },
  }
});