gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  TextPlugin,
  MotionPathPlugin,
  DrawSVGPlugin
);

let menuOpen = false;
let backgroundIsOrange = true;
let buttonMenuColor = "var(--text-color)";
let sectionTexts = document.querySelectorAll(".section-text");
let sectionHeaders = document.querySelectorAll(".section-header");
let sectionLines = document.querySelectorAll(".section-line");
let chapterHeaders = document.querySelectorAll(".chapter-header");
let thirdSectionTexts = document.querySelectorAll(".third-section-text-delete");
let sectionSixthContainer = gsap.utils.toArray(".sixth-section-element");
let sectionSixthTexts = gsap.utils.toArray(".sixth-section-text");
let wavePoints = document.querySelectorAll(".wave-point");
let tenthSectionCircles = document.querySelectorAll(".tenth-section-circle");

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
    chapterHeaders.forEach((header) => {
      header.style.color = "var(--text-color)";
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
    chapterHeaders.forEach((header) => {
      header.style.color = "var(--background-color)";
    });
  }
}

// First section

gsap.to(".landing-pixel", {
  scale: 2,
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
      gsap.to(".chapter-one", {
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
      gsap.to(".chapter-one", {
        alpha: 0,
        duration: 0.3,
      });
    },
    onEnter: () => {
      gsap.to(".chapter-one", {
        alpha: 0,
        duration: 0.3,
      });
    },
  },
});

// Chapter one

gsap.to(".dinosaur", {
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 180, y: 0 },
      { x: 300, y: -100 },
      { x: 420, y: 0 },
      { x: 450, y: 0 },
    ],
  },
  scrollTrigger: {
    trigger: ".chapter-one",
    start: "top",
    end: "bottom",
    scrub: 1,
  },
});

/* gsap.to(".chapter-one", {
  scale: 3,
  scrollTrigger: {
    trigger: ".chapter-one",
    start: "bottom 50%",
    end: "bottom",
    scrub: 1,
  },
}); */

gsap.to(".chapter-one", {
  scrollTrigger: {
    trigger: ".chapter-one",
    start: "top",
    end: "bottom",
    scrub: 1,
    pin: true,
    onLeave: () => {
      gsap.to(".chapter-one", {
        alpha: 0,
        duration: 0.3,
      });
      gsap.to(".second-section", {
        alpha: 1,
        duration: 0.3,
      });
    },
    onEnterBack: () => {
      gsap.to(".chapter-one", {
        alpha: 1,
        duration: 0.3,
      });
    },
  },
});

// Second section

gsap.to(".space-invader", {
  scale: 8,
  scrollTrigger: {
    trigger: ".second-section",
    start: "bottom 60%",
    end: "bottom -30%",
    scrub: true,
  },
});

gsap.to(".second-section-header", {
  alpha: 0,
  scrollTrigger: {
    trigger: ".second-section",
    start: "bottom 60%",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".second-section > p", {
  alpha: 0,
  scrollTrigger: {
    trigger: ".second-section",
    start: "bottom 60%",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".second-section", {
  scrollTrigger: {
    trigger: ".second-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
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
    start: "top -10%",
    end: "bottom 30%",
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
    start: "bottom 30%",
    end: "bottom 10%",
    scrub: 1,
  },
});

// Third section text
gsap.to(".third-section-text", {
  text: {
    delimiter: "",
    value: "It doesn't have edges. <br/><br/>It doesn't have a shape.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 30%",
    end: "bottom 40%",
    scrub: 1,
    onEnter: () => {
      gsap.to(".third-section-text-delete", {
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".third-section-text-delete", {
        alpha: 1,
      });
    },
  },
});

// Third section pixel color change to blue and text
gsap.to(".third-section-pixel", {
  backgroundColor: "#0000FF",
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 20%",
    end: "bottom",
    scrub: 1,
    onLeave: () => {
      document.querySelector(".third-section-pixel").style.backgroundColor =
        "#0000FF";
    },
    onEnter: () => {
      gsap.to(".third-section-text-delete", {
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".third-section-text-delete", {
        alpha: 1,
      });
    },
  },
});

gsap.to(".third-section-text", {
  text: {
    delimiter: "",
    value:
      "It’s a signal, one that triggers a tiny burst of red, green, and blue light. <br/><br/>Like a spotlight on a stage, a pixel performs a precise cue: <br/>this color, at this moment, right here.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".third-section",
    start: "bottom 40%",
    end: "bottom 50%",
    scrub: 1,
  },
});

gsap.to(".third-section", {
  scrollTrigger: {
    trigger: ".third-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".third-section", {
        alpha: 0,
      });
      gsap.to(".fourth-section", {
        alpha: 1,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".third-section", {
        alpha: 1,
      });
      gsap.to(".fourth-section", {
        alpha: 0,
      });
      changeBackgroundColor();
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

gsap.to(".fourth-section-date", {
  scale: 20,
  scrollTrigger: {
    trigger: ".fourth-section",
    start: "bottom 80%",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".fourth-section", {
  scrollTrigger: {
    trigger: ".fourth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".fourth-section", {
        alpha: 0,
      });
      gsap.to(".fifth-section", {
        alpha: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".fourth-section", {
        alpha: 1,
      });
      gsap.to(".fifth-section", {
        alpha: 0,
      });
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
    scrub: 1,
    onLeave: () => {
      gsap.to(".fifth-section", {
        alpha: 0,
      });
      gsap.to(".sixth-section", {
        alpha: 1,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".fifth-section", {
        alpha: 1,
      });
      gsap.to(".sixth-section", {
        alpha: 0,
      });
      changeBackgroundColor();
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

// Sixth section

gsap.to(".sixth-section-container", {
  x: "-340svw",
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "10% top",
    end: "60% top",
    scrub: 1,
    snap: {
      snapTo: [0, 0.135, 0.31, 0.55, 1],
      duration: 0.3,
      delay: 0.1,
    },
  },
});

gsap.to(".transition-circle", {
  scale: 13,
  x: "1svw",
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "60% top",
    end: "80% top",
    scrub: 1,
    onEnter: () => {
      gsap.to(sectionSixthTexts, {
        alpha: 0,
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(sectionSixthTexts, {
        alpha: 1,
        duration: 1,
      });
    },
  },
});

gsap.to(".transition-circle-text", {
  alpha: 1,
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "70% top",
    end: "80% top",
    scrub: 1,
  },
});

gsap.to(".transition-circle-inner", {
  scale: 4,
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "85% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".sixth-section", {
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".sixth-section", {
        alpha: 0,
      });
      gsap.to(".seventh-section", {
        alpha: 1,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".sixth-section", {
        alpha: 1,
      });
      gsap.to(".seventh-section", {
        alpha: 0,
      });
      changeBackgroundColor();
    },
    onEnter: () => {
      gsap.to(".seventh-section", {
        alpha: 0,
        duration: 0,
      });
    },
  },
});

// Seventh section

gsap.to(".seventh-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "We all know music is made of waves. Each sound , every note, every chords, is a blend of waves: <br><br>some faster (higher pitch), some taller (louder).",
  },
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "10% top",
    end: "20% top",
    scrub: 1,
  },
});

gsap.to(".seventh-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "Stack them together, and the simple becomes complex. <br><br>A single tone becomes a melody.",
  },
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "30% top",
    end: "40% top",
    scrub: 1,
  },
});

gsap.to(".seventh-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "But what if images were made of waves too? <br><br>Fourier’s idea extends beyond sound. He showed that 2D signals, like images, are made of waves too.",
  },
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "50% top",
    end: "60% top",
    scrub: 1,
  },
});

gsap.to(".seventh-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "These waves could build any image.But they were still analog, still infinite. <br><br>Someone had to bring them into the digital world.",
  },
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "70% top",
    end: "80% top",
    scrub: 1,
  },
});

gsap.to(".seventh-section", {
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onEnter: () => {
      gsap.to(".chapter-three", {
        alpha: 0,
        duration: 0,
      });
    },
    onLeave: () => {
      gsap.to(".seventh-section", {
        alpha: 0,
      });
      gsap.to(".chapter-three", {
        alpha: 1,
        duration: 0,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".seventh-section", {
        alpha: 1,
      });
      gsap.to(".chapter-three", {
        alpha: 0,
      });
      changeBackgroundColor();
    },
  },
});

// Chapter three

gsap.to(".chapter-three", {
  scrollTrigger: {
    trigger: ".chapter-three",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onEnter: () => {
      gsap.to(".eighth-section", {
        alpha: 0,
        duration: 0,
      });
    },
    onLeave: () => {
      gsap.to(".chapter-three", {
        alpha: 0,
      });
      gsap.to(".eighth-section", {
        alpha: 1,
        duration: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".chapter-three", {
        alpha: 1,
      });
      gsap.to(".eighth-section", {
        alpha: 0,
      });
    },
  },
});

// Eighth section

gsap.from(".wave", {
  drawSVG: "0% 0%",
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "top",
    end: "20% top",
    scrub: 1,
    onEnter: () => {
      document.querySelector(".eighth-section > p").innerHTML =
        "In 1933, Vladimir Kotelnikov published the Sampling Theorem:<br /><br />He proved you could take a smooth continous wave ...";
    },
  },
});

gsap.from(".wave", {
  drawSVG: "100% 0%",
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "30% top",
    end: "40% top",
    scrub: 1,
    onEnter: () => {
      document.querySelector(".eighth-section > p").innerHTML =
        "And if you only keep a few key points ...";
      for (let i = 0; i < wavePoints.length; i++) {
        gsap.to(wavePoints[i], {
          alpha: 1,
        });
      }
    },
    onLeaveBack: () => {
      document.querySelector(".eighth-section > p").innerHTML =
        "In 1933, Vladimir Kotelnikov published the Sampling Theorem:<br /><br />He proved you could take a smooth continous wave ...";
      gsap.to(wavePoints, {
        alpha: 0,
      });
    },
  },
});

gsap.from(".wave", {
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "45% top",
    end: "55% top",
    scrub: 1,
    onEnter: () => {
      document.querySelector(".eighth-section > p").innerHTML =
        "Just the dots, and nothing else.";
    },
    onLeaveBack: () => {
      document.querySelector(".eighth-section > p").innerHTML =
        "And if you only keep a few key points ...";
    },
  },
});

gsap.from(".wave", {
  drawSVG: 1,
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "60% top",
    end: "70% top",
    scrub: 1,
    onEnter: () => {
      document.querySelector(".eighth-section > p").innerHTML =
        "You can rebuild the orinigal wave, and nothing was lost.<br> The original signal is fully rebuils, from just the samples.";
    },
    onLeaveBack: () => {
      document.querySelector(".eighth-section > p").innerHTML =
        "Just the dots, and nothing else.";
    },
  },
});

gsap.to(".eighth-section", {
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onEnter: () => {
      gsap.to(".ninth-section", {
        alpha: 0,
      });
    },
    onLeave: () => {
      gsap.to(".eighth-section", {
        alpha: 0,
      });
      gsap.to(".ninth-section", {
        alpha: 1,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".eighth-section", {
        alpha: 1,
      });
      gsap.to(".ninth-section", {
        alpha: 0,
      });
      changeBackgroundColor();
    },
  },
});

// Ninth section

gsap.to(".ninth-section", {
  scrollTrigger: {
    trigger: ".ninth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onEnter: () => {
      gsap.to(".tenth-section", {
        alpha: 0,
      });
    },
    onLeave: () => {
      gsap.to(".tenth-section", {
        alpha: 1,
      });
      gsap.to(".ninth-section", {
        alpha: 0,
      });
      changeBackgroundColor();
    },
    onEnterBack: () => {
      gsap.to(".tenth-section", {
        alpha: 0,
      });
      gsap.to(".ninth-section", {
        alpha: 1,
      });
      changeBackgroundColor();
    },
  },
});

// Tenth section

gsap.to(".tenth-section", {
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "20% top",
    end: "40% top",
    scrub: 1,
    onEnter: () => {
      for (let i = 0; i < tenthSectionCircles.length; i++) {
        gsap.to(tenthSectionCircles[i], {
          scale: Math.random() * 1.3 + 0.5,
        });
      }
    },
    onLeaveBack: () => {
      for (let i = 0; i < tenthSectionCircles.length; i++) {
        gsap.to(tenthSectionCircles[i], {
          scale: 1,
        });
      }
    },
  },
});

gsap.to(tenthSectionCircles, {
  /* backgroundImage : "radial-gradient(circle,rgba(255, 83, 36, 0.76) 30%,rgba(244, 241, 241, 0) 70%)", */
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "60% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".tenth-section", {
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onEnter: () => {
      gsap.to(".eleventh-section", {
        alpha: 0,
      });
    },
    onLeave: () => {
      gsap.to(".eleventh-section", {
        alpha: 1,
      });
      gsap.to(".tenth-section", {
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".eleventh-section", {
        alpha: 0,
      });
      gsap.to(".tenth-section", {
        alpha: 1,
      });
    },
  },
});

//eleventh section

gsap.to(".eleventh-section-point", {
  scale: 0.3,
  scrollTrigger: {
    trigger: ".eleventh-section-point",
    start: "20% top",
    end: "60% top",
    scrub: 1,
  },
});

gsap.to(".eleventh-section", {
  scrollTrigger: {
    trigger: ".eleventh-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onEnter: () => {
      gsap.to(".twelth-section", {
        alpha: 0,
      });
    },
    onLeave: () => {
      gsap.to(".twelth-section", {
        alpha: 1,
      });
      gsap.to(".eleventh-section", {
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".twelth-section", {
        alpha: 0,
      });
      gsap.to(".eleventh-section", {
        alpha: 1,
      });
    },
  },
});

gsap.to(".twelth-section", {
  scrollTrigger: {
    trigger: ".twelth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
  },
});
