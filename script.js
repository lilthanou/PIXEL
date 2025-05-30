gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

let menuOpen = false;
let backgroundIsOrange = true;
let buttonMenuColor = "var(--text-color)";
let sectionTexts = document.querySelectorAll(".section-text");
let sectionHeaders = document.querySelectorAll(".section-header");
let sectionLines = document.querySelectorAll(".section-line");
let thirdSectionTexts = document.querySelectorAll(".third-section-text-delete");

function openMenu() {
  if (menuOpen) {
    document.querySelector("nav").style.left = "-200dvw";
    document.querySelector(".button-menu").style.backgroundColor =
      buttonMenuColor;
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
    document.querySelector(".button-menu").style.backgroundColor =
      buttonMenuColor;
    sectionTexts.forEach((text) => {
      text.style.color = "var(--text-color)";
    });
    sectionHeaders.forEach((header) => {
      header.style.color = "var(--text-color)";
    });
    sectionLines.forEach((line) => {
      line.style.backgroundColor = "var(--text-color)";
    });
  } else {
    buttonMenuColor = "var(--background-color)";
    document.querySelector(".button-menu").style.backgroundColor =
      buttonMenuColor;
    sectionTexts.forEach((text) => {
      text.style.color = "var(--background-color)";
    });
    sectionHeaders.forEach((header) => {
      header.style.color = "var(--background-color)";
    });
    sectionLines.forEach((line) => {
      line.style.backgroundColor = "var(--background-color)";
    });
  }
}

// First section

gsap.to(".landing-pixel", {
  scale: 2,
  x: "-25%",
  y: "-24%",
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
      gsap.to(".pixel-text", {
        text: {
          delimiter: "",
          value: "Everything you see.. starts here",
        },
        duration: 0.6,
      });
    },
    onEnterBack: () => {
      gsap.to(".pixel-text", {
        color: "#ff5424",
        duration: 0.3,
      });
      gsap.to(".pixel-text", {
        text: {
          delimiter: "",
          value: "The world is made of pixels",
        },
        duration: 0.6,
      });
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
        display: "none",
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
        display: "flex",
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
  scale: 8,
  y: "13svh",
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
    onLeave: () => {
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
        duration: 0,
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

gsap.to(".third-section-pixel", {
  backgroundImage:
    "radial-gradient(circle,rgba(255, 83, 36, 0) 0%, #f4f1f1 65%)",
  alpha: 1,
  borderRadius: "50%",
  scale: 1.7,
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 90%",
    end: "bottom 70%",
    scrub: 1,
    onLeave: () => {
      document.querySelector(".third-section-pixel").style.backgroundImage =
        "radial-gradient(circle,rgba(255, 83, 36, 0) 0%, #f4f1f1 65%)";
    },
    onLeaveBack: () => {
      document.querySelector(".third-section-pixel").style.backgroundImage =
        "radial-gradient(circle,rgba(255, 83, 36, 0) 99%, #f4f1f1 100%)";
    },
  },
});

gsap.to(".third-section-pixel", {
  y: "10svh",
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 75%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.to(".third-section-pixel", {
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 70%",
    end: "bottom 70%",
    scrub: 1,
    onEnter: () => {
      gsap.to(".third-section-text", {
        text: {
          delimiter: "",
          value: "It doesn't have edges. <br/><br/>It doesn't have a shape.",
          preserveSpaces: true,
        },
      }),
        gsap.to(".third-section-text-delete", {
          alpha: 0,
        });
    },
    onEnterBack: () => {
      gsap.to(".third-section-text", {
        text: {
          delimiter: "",
          value: "A pixel is a <b>point of light.</b>",
          preserveSpaces: true,
        },
      }),
        gsap.to(".third-section-text-delete", {
          alpha: 1,
        });
    },
  },
});

// Third section pixel color change to red
gsap.to(".third-section-pixel", {
  backgroundColor: "#FF0000",
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 60%",
    end: "bottom 50%",
    scrub: 1,
    onLeave: () => {
      document.querySelector(".third-section-pixel").style.backgroundColor =
        "#FF0000";
    },
  },
});

// Third section pixel color change to green
gsap.to(".third-section-pixel", {
  backgroundColor: "#00FF00",
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 50%",
    end: "bottom 40%",
    scrub: 1,    onEnter: () => {
      document.querySelector(".third-section-pixel").style.backgroundColor =
        "#FF0000";
    }
  },
});

// Third section pixel color change to blue
gsap.to(".third-section-pixel", {
  backgroundColor: "#0000FF",
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 40%",
    end: "bottom 30%",
    scrub: 1,
    onLeave: () => {
      document.querySelector(".third-section-pixel").style.backgroundColor =
        "#0000FF";
      console.log(
        document.querySelector(".third-section-pixel").style.backgroundColor
      );
    },
  },
});

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
        duration: 0,
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
        duration: 0,
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
        duration: 0,
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
