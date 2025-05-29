gsap.registerPlugin(ScrollTrigger);
let menuOpen = false;
let backgroundIsOrange = true;
let buttonMenuColor = "var(--text-color)";
let sectionText = document.querySelectorAll(".section-text");

function openMenu() {
  if (menuOpen) {
    document.querySelector("nav").style.left = "-200dvw";
    document.querySelector(".button-menu").style.backgroundColor = buttonMenuColor;
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
function changeBackgroundColor() {
  backgroundIsOrange = !backgroundIsOrange;
  if (backgroundIsOrange) {
    buttonMenuColor = "var(--text-color)";
    document.querySelector(".button-menu").style.backgroundColor = buttonMenuColor;
    sectionText.forEach((text) => {
      text.style.color = "var(--text-color)";
    });
  } else {
    buttonMenuColor = "var(--background-color)";
    document.querySelector(".button-menu").style.backgroundColor = buttonMenuColor;
    sectionText.forEach((text) => {
      text.style.color = "var(--background-color)";
    });
  }
}

// First section

gsap.to(".landing-pixel", {
  scale: 2,
  x: "2.6svh",
  y: "-5svh",
  color: "#ff5424",
  scrollTrigger: {
    trigger: ".landing",
    start: "top",
    end: "10% top",
    scrub: 1,
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
    scrub: 1,
  },
});

// Transition Pixel Animation

gsap.to(".transition-pixel", {
  scale: 8.1,
  y: "8%",
  scrollTrigger: {
    trigger: ".landing",
    start: "top",
    end: "bottom",
    scrub: 1,
    onLeave: () => {
      gsap.to(".landing-pixel", {
        alpha: 0,
        duration: 0.3,
        display: 'none',
      });
      gsap.to(".second-section", {
        alpha: 1,
        duration: 0.3,
      });
    },
    onEnterBack: () => {
      gsap.to(".landing-pixel", {
        alpha: 1,
        duration: 0.3,
        display : 'flex',
      });
      gsap.to(".second-section", {
        alpha: 0,
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

// Second section

gsap.to(".space-invader", {
  scale :8,
  y:"13svh",
  x: "62svh",
  scrollTrigger: {
    trigger: ".second-section",
    start: "bottom 60%",
    end: "bottom",
    scrub: 1,
    onLeave: () => {
      gsap.to(".space-invader", {
        alpha: 0,
        duration: 0.3,
      });
      gsap.to(".second-section", {
        alpha: 0,
        duration: 0.3,
      });
    },
    onEnterBack: () => {
      gsap.to(".space-invader", {
        alpha: 1,
        duration: 0.3,
      });
      gsap.to(".second-section", {
        alpha: 1,
        duration: 0.3,
      });
    },
  },
});

gsap.to(".second-section", {
  scrollTrigger: {
    trigger: ".second-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: true,
    onLeave:() => {
      gsap.to(".second-section", {
        alpha: 0,
        duration: 0,
      });
      gsap.to(".third-section", {
        alpha: 1,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".second-section", {
        alpha: 1,
      });
      gsap.to(".third-section", {
        alpha: 0,
      });
      changeBackgroundColor();
    },
    onEnter: () => {
      gsap.to(".third-section", {
        alpha: 0,
        duration:0,
      });
    },
    onLeaveBack: () => {
      gsap.to(".third-section", {
        alpha: 1,
      });
      gsap.to(".second-section", {
        alpha: 0,
      });
    },
  },
});



// Third section

gsap.to(".third-section", {
  scrollTrigger: {
    trigger: ".third-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: true,
    onLeave: () => {
      gsap.to(".third-section", {
        alpha: 0,
      });
      gsap.to(".fourth-section", {
        alpha: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".third-section", {
        alpha: 1,
      });
      gsap.to(".fourth-section", {
        alpha: 0,
      });
    },
    onEnter: () => {
      gsap.to(".fourth-section", {
        alpha: 0,
        duration:0,
      });
    },
    onLeaveBack: () => {
      gsap.to(".fourth-section", {
        alpha: 1,
      });
      gsap.to(".third-section", {
        alpha: 0,
      });
    },
  },
});

// Fourth section

gsap.to(".fourth-section", {
  scrollTrigger: {
    trigger: ".fourth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: true,
    onLeave: () => {
      gsap.to(".fourth-section", {
        alpha: 0,
      });
      gsap.to(".fifth-section", {
        alpha: 1,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".fourth-section", {
        alpha: 1,
      });
      gsap.to(".fifth-section", {
        alpha: 0,
      });
      changeBackgroundColor();
    },
    onEnter: () => {
      gsap.to(".fifth-section", {
        alpha: 0,
        duration:0,
      });
    },
    onLeaveBack: () => {
      gsap.to(".fifth-section", {
        alpha: 1,
      });
      gsap.to(".fourth-section", {
        alpha: 0,
      });
    },
  },
});

// Fifth section

gsap.to(".fifth-section", {
  scrollTrigger: {
    trigger: ".fifth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: true,
    onLeave: () => {
      gsap.to(".fifth-section", {
        alpha: 0,
      });
      gsap.to(".sixth-section", {
        alpha: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".fifth-section", {
        alpha: 1,
      });
      gsap.to(".sixth-section", {
        alpha: 0,
      });
    },
    onEnter: () => {
      gsap.to(".sixth-section", {
        alpha: 0,
        duration:0,
      });
    },
    onLeaveBack: () => {
      gsap.to(".sixth-section", {
        alpha: 1,
      });
      gsap.to(".fifth-section", {
        alpha: 0,
      });
    },
  },
});