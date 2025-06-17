gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  TextPlugin,
  MotionPathPlugin,
  DrawSVGPlugin
);

let menuOpen = false;
let backgroundIsOrange = true;
let buttonMenuColor = "var(--background-color)";
let sectionTexts = document.querySelectorAll(".section-text");
let sectionHeaders = document.querySelectorAll(".section-header");
let sectionLines = document.querySelectorAll(".section-line");
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
    document.querySelector(".button-menu").style.width = "50dvw";
    document.querySelector(".button-menu img").style.width = "50dvw";
    document.querySelector(".button-menu").style.height = "50dvw";
    document.querySelector(".button-menu img").style.height = "50dvw";
    gsap.to(".button-menu", {
      x: "20dvw",
      y: "10%",
      duration: 0,
    });
    if (backgroundIsOrange) {
      buttonMenuColor = "var(--text-color)";
    }
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
  x: "55%",
  color: "#ff5424",
  scrollTrigger: {
    trigger: ".landing",
    start: "top",
    end: "30% top",
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
          value: "Everything you see... starts here",
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
    end: "30% top",
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
    start: "20% top",
    end: "80% top",
    scrub: 1,
  },
});

gsap.to(".chapter-one", {
  scale: 10,
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".chapter-one",
    start: "80% top",
    end: "bottom",
    scrub: 1,
  },
});

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
  filter: "blur(1px)",
  scrollTrigger: {
    trigger: ".second-section",
    start: "30% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".second-section-header", {
  alpha: 0,
  scrollTrigger: {
    trigger: ".second-section",
    start: "30% top",
    end: "60% top",
    scrub: 1,
  },
});

gsap.to(".second-section > p", {
  alpha: 0,
  scrollTrigger: {
    trigger: ".second-section",
    start: "30% top",
    end: "60% top",
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
    },
    onEnterBack: () => {
      gsap.to(".second-section", {
        alpha: 1,
      });
      gsap.to(".third-section", {
        alpha: 0,
      });
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
  filter: "blur(10px)",
  borderRadius: "50%",
  scrollTrigger: {
    trigger: ".third-section",
    start: "10% top",
    end: "30% top",
    scrub: 1,
    onLeaveBack: () => {
      changeBackgroundColor();
    },
    onEnter: () => {
      changeBackgroundColor();
    },
  },
});

gsap.to(".third-section-pixel", {
  y: "50svw",
  scrollTrigger: {
    trigger: ".third-section",
    start: "30% top",
    end: "80% top",
    scrub: 1,
  },
});

// Third section text
gsap.to(".third-section-text", {
  text: {
    delimiter: "",
    value: "A pixel is a <b>point of light</b>.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".third-section",
    start: "top",
    end: "20% top",
    scrub: 1,
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
    value: "It doesn't have edges. <br/><br/>It doesn't have a shape.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".third-section",
    start: "30% top",
    end: "50% top",
    scrub: 1,
    onEnter: () => {
      gsap.to(".third-section-text-delete", {
        alpha: 0,
      });
    },
  },
});

// Third section pixel color change to blue and text
gsap.to(".third-section-pixel", {
  backgroundColor: "#0000FF",
  scrollTrigger: {
    trigger: ".third-section",
    start: "50% top",
    end: "70% top",
    scrub: 1,
  },
});

gsap.to(".third-section-text", {
  text: {
    delimiter: "",
    value:
      "It’s a signal, one that triggers a tiny burst of red, green, and blue light. <br/><br/>Like a spotlight on a stage, a pixel performs a precise cue: <br/><b>This color, at this moment, right here.</b>",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".third-section",
    start: "60% top",
    end: "80% top",
    scrub: 1,
  },
});

gsap.to(".third-section-pixel", {
  scale: 10,
  filter: "hue-rotate(150deg)",
  alpha: 0.5,
  scrollTrigger: {
    trigger: ".third-section",
    start: "90% top",
    end: "bottom",
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

gsap.to(".fourth-section-date", {
  scale: 20,
  scrollTrigger: {
    trigger: ".fourth-section",
    start: "50% top",
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
      gsap.to(".chapter-two", {
        alpha: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".fourth-section", {
        alpha: 1,
      });
      gsap.to(".chapter-two", {
        alpha: 0,
      });
    },
    onEnter: () => {
      changeBackgroundColor();
    },
    onLeaveBack: () => {
      changeBackgroundColor();
    },
  },
});

// Chapter two

gsap.to(".chapter-two > img", {
  scale: 1.4,
  scrollTrigger: {
    trigger: ".chapter-two",
    start: "top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".chapter-two", {
  scrollTrigger: {
    trigger: ".chapter-two",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".chapter-two", {
        alpha: 0,
      });
      gsap.to(".sixth-section", {
        alpha: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".chapter-two", {
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
      changeBackgroundColor();
    },
    onLeaveBack: () => {
      gsap.to(".sixth-section", {
        alpha: 1,
      });
      gsap.to(".chapter-two", {
        alpha: 0,
      });
      changeBackgroundColor();
    },
  },
});

// Sixth section

gsap.to(".sixth-section-container", {
  x: "-340svw",
  scrollTrigger: {
    trigger: ".sixth-section",
    start: "20% top",
    end: "70% top",
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
    start: "70% top",
    end: "90% top",
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
    },
    onEnterBack: () => {
      gsap.to(".sixth-section", {
        alpha: 1,
      });
      gsap.to(".seventh-section", {
        alpha: 0,
      });
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
      "He realized that any signal, even a sound, is just a combination of simple waves.",
  },
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "5% top",
    end: "10% top",
    scrub: 1,
  },
});

gsap.to(".seventh-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "We all know music is made of waves. Each sound , every note, every chords, is a blend of waves: <br><br>Some faster (higher pitch), some taller (louder).",
  },
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "25% top",
    end: "30% top",
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
    start: "45% top",
    end: "50% top",
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
    start: "65% top",
    end: "70% top",
    scrub: 1,
    onEnter: () => {
      gsap.to("#sineCanvas", {
        alpha: 0,
      });
      gsap.to(".seventh-section-wave", {
        alpha: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to("#sineCanvas", {
        alpha: 1,
      });
      gsap.to(".seventh-section-wave", {
        alpha: 0,
      });
    },
  },
});

gsap.to(".seventh-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "These waves could build any image. But they were still analog, still infinite. <br><br>Someone had to bring them into the digital world.",
  },
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "80% top",
    end: "85% top",
    scrub: 1,
  },
});

gsap.to(".seventh-section-wave", {
  scale: 10,
  filter: "blur(2px)",
  scrollTrigger: {
    trigger: ".seventh-section",
    start: "95% top",
    end: "bottom",
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
    onEnter: () => {
      changeBackgroundColor();
    },
    onLeaveBack: () => {
      changeBackgroundColor();
    },
  },
});

const canvas = document.getElementById("sineCanvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio || 1;

function resizeCanvas() {
  const width = window.innerWidth;
  const height = window.innerHeight / 2;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let time = 0;

function drawGrid(width, height) {
  ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
  ctx.lineWidth = 0.5;

  for (let x = 0; x <= width; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0; y <= height; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function drawSingleWave(yOffset, amplitude, frequency, color, speed) {
  ctx.beginPath();
  ctx.moveTo(0, yOffset);

  for (let x = 0; x < window.innerWidth; x++) {
    const y = yOffset + Math.sin((x + time * speed) * frequency) * amplitude;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function draw() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  ctx.clearRect(0, 0, width, height);
  drawGrid(width, height);

  const sharedFrequency = 0.04;

  const topY = height * 0.12;
  const midY = height * 0.3;
  const botY = height * 0.4;

  drawSingleWave(topY, height * 0.1, sharedFrequency, "f4f1f1", 0.5); // Top wave
  drawSingleWave(midY, height * 0.06, sharedFrequency, "f4f1f1", 1); // Middle wave (slightly smaller)
  drawSingleWave(botY, height * 0.03, sharedFrequency, "f4f1f1", 0.7); // Bottom wave

  time += 2;
  requestAnimationFrame(draw);
}

draw();

// Chapter three

gsap.to(".chapter-three > img", {
  scale: 0.7,
  y: 100,
  scrollTrigger: {
    trigger: ".chapter-three",
    start: "20% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".chapter-three", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".chapter-three",
    start: "80% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".chapter-three", {
  scrollTrigger: {
    trigger: ".chapter-three",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".chapter-three", {
        alpha: 0,
      });
      gsap.to(".chapter-three-presentation", {
        alpha: 1,
        duration: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".chapter-three", {
        alpha: 1,
      });
      gsap.to(".chapter-three-presentation", {
        alpha: 0,
      });
    },
  },
});

//Chapter three bis

gsap.from(".chapter-three-presentation", {
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".chapter-three-presentation",
    start: "top",
    end: "15% top",
    scrub: 1,
  },
});

gsap.to(".chapter-three-presentation > img", {
  scale: 10,
  xPercent: 10,
  yPercent: 300,
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".chapter-three-presentation",
    start: "80% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".chapter-three-presentation", {
  scrollTrigger: {
    trigger: ".chapter-three-presentation",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".chapter-three-presentation", {
        alpha: 0,
      });
      gsap.to(".eighth-section", {
        alpha: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".chapter-three-presentation", {
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
  },
});

gsap.to(".eighth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "In 1933, Vladimir Kotelnikov published the Sampling Theorem:<br /><br />He proved you could take a smooth continous wave ...",
  },
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "top",
    end: "5% top",
    scrub: 1,
  },
});

gsap.to(".eighth-section > .section-text", {
  text: {
    delimiter: "",
    value: "And if you only keep a few key points ...",
  },
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "20% top",
    end: "25% top",
    scrub: 1,
    onLeaveBack: () => {
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
      for (let i = 0; i < wavePoints.length; i++) {
        gsap.to(wavePoints[i], {
          alpha: 1,
        });
      }
    },
    onLeaveBack: () => {
      gsap.to(wavePoints, {
        alpha: 0,
      });
    },
  },
});

gsap.to(".eighth-section > .section-text", {
  text: {
    delimiter: "",
    value: "Just the dots, and nothing else.",
  },
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "40% top",
    end: "45% top",
    scrub: 1,
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
  },
});

gsap.to(".eighth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "Still… nothing was lost. <br>The original signal is fully rebuilt, from just the samples.",
  },
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "60% top",
    end: "65% top",
    scrub: 1,
    onLeaveBack: () => {
      document.querySelector(".eighth-section > .section-text").innerHTML =
        "Just the dots, and nothing else.";
    },
  },
});

gsap.to(".wave-point-transition", {
  scale: 50,
  filter: "blur(1px)",
  scrollTrigger: {
    trigger: ".eighth-section",
    start: "80% top",
    end: "bottom",
    scrub: 1,
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

gsap.to(".ninth-section-circle", {
  scale: 10,
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".ninth-section",
    start: "90% top",
    end: "bottom",
    scrub: 1,
  },
});

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
    },
    onEnterBack: () => {
      gsap.to(".tenth-section", {
        alpha: 0,
      });
      gsap.to(".ninth-section", {
        alpha: 1,
      });
    },
  },
});

// Tenth section

gsap.to(".tenth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "This is what a digital image is made of.A grid of samples. Each one a tiny carrier of information.",
  },
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "0% top",
    end: "5% top",
    scrub: 1,
  },
});

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

gsap.to(".tenth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "Each dot holds a value, its brightness or strength. The size of each circle shows how strong that value is.",
  },
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "20% top",
    end: "40% top",
    scrub: 1,
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

gsap.to(".tenth-section > .section-text", {
  text: {
    delimiter: "",
    value: "Together, all dots combine to form the full image.",
  },
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "60% top",
    end: "65% top",
    scrub: 1,
  },
});

gsap.to(".tenth-section-container", {
  scale: 2,
  filter: "blur(2px)",
  alpha: 0.5,
  scrollTrigger: {
    trigger: ".tenth-section",
    start: "90% top",
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
    onLeave: () => {
      gsap.to(".eleventh-section", {
        alpha: 1,
      });
      gsap.to(".tenth-section", {
        duration: 0.1,
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".eleventh-section", {
        alpha: 0,
      });
      gsap.to(".tenth-section", {
        alpha: 1,
        duration: 0.1,
      });
    },
    onEnter: () => {
      changeBackgroundColor();
    },
    onLeaveBack: () => {
      changeBackgroundColor();
    },
  },
});

//eleventh section

gsap.to(".eleventh-section-point", {
  scale: 0.1,
  scrollTrigger: {
    trigger: ".eleventh-section",
    start: "80% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".eleventh-section", {
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".eleventh-section",
    start: "90% top",
    end: "bottom",
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

// Twelth section

gsap.to(".twelth-section-img", {
  scale: 3,
  y: "60svw",
  x: "10svw",
  scrollTrigger: {
    trigger: ".twelth-section",
    start: "80% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".twelth-section", {
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".twelth-section",
    start: "90% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".twelth-section", {
  scrollTrigger: {
    trigger: ".twelth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".twelth-section", {
        alpha: 0,
      });
      gsap.to(".chapter-four", {
        alpha: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".chapter-four", {
        alpha: 0,
      });
      gsap.to(".twelth-section", {
        alpha: 1,
      });
    },
  },
});

// Chapter four

gsap.to(".chapter-four > img", {
  scale: 3,
  x: "-100svw",
  y: "20svw",
  scrollTrigger: {
    trigger: ".chapter-four",
    start: "80% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".chapter-four", {
  scrollTrigger: {
    trigger: ".chapter-four",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".thirteenth-section", {
        alpha: 1,
      });
      gsap.to(".chapter-four", {
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".thirteenth-section", {
        alpha: 0,
      });
      gsap.to(".chapter-four", {
        alpha: 1,
      });
    },
  },
});

// Thirteenth section

gsap.to(".thirteenth-section-svg", {
  alpha: 1,
  scrollTrigger: {
    trigger: ".thirteenth-section",
    start: "10% top",
    end: "20% top",
    scrub: 1,
  },
});

gsap.to(".thirteenth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "In 1948, the Manchester Baby became the world’s first stored-program computer. It was the very first machine to display digital pixels, the building blocks of every image we see on screens today.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".thirteenth-section",
    start: "top",
    end: "5% top",
    scrub: 1,
  },
});

gsap.to(".thirteenth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "Baby didn’t just show still images. It could animate, even scrolling the word “PIXAR” on its screen in 2013’s replica. This was the start of digital animation and games, “displaying the first spread pixels.”",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".thirteenth-section",
    start: "40% top",
    end: "50% top",
    scrub: 1,
  },
});

gsap.to(".thirteenth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "Millions of pixels make one picture. No human can add all those values instantaneously, computers do the calculations fast. This “spread and add” process is central to all digital images, from photos to CGI.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".thirteenth-section",
    start: "75% top",
    end: "80% top",
    scrub: 1,
  },
});

gsap.to(".thirteenth-section", {
  scrollTrigger: {
    trigger: ".thirteenth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".fourteenth-section", {
        alpha: 1,
      });
      gsap.to(".thirteenth-section", {
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".fourteenth-section", {
        alpha: 0,
      });
      gsap.to(".thirteenth-section", {
        alpha: 1,
      });
    },
    onEnter: () => {
      changeBackgroundColor();
    },
    onLeaveBack: () => {
      changeBackgroundColor();
    },
  },
});

// Fourteenth section

gsap.to(".fourteenth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "Since 1965, computer power has grown over 100 billion times, roughly doubling every 18 months. <br><br>This trend, known as <b>Moore’s Law</b>, enabled color pixels and 3D graphics, sparking a revolution in digital images.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "top",
    end: "5% top",
    scrub: 1,
  },
});

gsap.to(".fourteenth-section-line:nth-child(1)", {
  width: "20dvw",
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "10% top",
    end: "20% top",
    scrub: 1,
  },
});

gsap.to(".fourteenth-section-line:nth-child(2)", {
  width: "40dvw",
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "20% top",
    end: "30% top",
    scrub: 1,
  },
});

gsap.to(".fourteenth-section-line:nth-child(3)", {
  width: "80dvw",
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "30% top",
    end: "40% top",
    scrub: 1,
  },
});

gsap.to(".fourteenth-section-line:nth-child(4)", {
  width: "160dvw",
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "40% top",
    end: "60% top",
    scrub: 1,
  },
});

gsap.to(".fourteenth-section-container", {
  x: "-100svw",
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "50% top",
    end: "80% top",
    scrub: 1,
  },
});

gsap.to(".fourteenth-section > .section-text", {
  text: {
    delimiter: "",
    value:
      "This was the dawn of the “digital convergence,” when pixels took over photography, movies, games, and VR.",
    preserveSpaces: true,
  },
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "60% top",
    end: "65% top",
    scrub: 1,
    onLeaveBack: () => {
      document.querySelector(".fourteenth-section > .section-text").innerHTML =
        "Since 1965, computer power has grown over 100 billion times, roughly doubling every 18 months. <br><br>This trend, known as <b>Moore’s Law</b>, enabled color pixels and 3D graphics, sparking a revolution in digital images.";
    },
  },
});

gsap.to(".fourteenth-section-line:nth-child(4)", {
  scale: 30,
  filter: "blur(2px)",
  y: "-75svw",
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "80% top",
    end: "bottom",
    scrub: 1,
  },
});

gsap.to(".fourteenth-section", {
  scrollTrigger: {
    trigger: ".fourteenth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onLeave: () => {
      gsap.to(".fifteenth-section", {
        alpha: 1,
      });
      gsap.to(".fourteenth-section", {
        alpha: 0,
      });
    },
    onEnterBack: () => {
      gsap.to(".fifteenth-section", {
        alpha: 0,
      });
      gsap.to(".fourteenth-section", {
        alpha: 1,
      });
      (document.querySelector(".fourteenth-section > .section-text").innerHTML =
        "This was the dawn of the “digital convergence,” when pixels took over photography, movies, games, and VR."),
        changeBackgroundColor();
    },
  },
});

// Fifteenth section
gsap.to(".fifteenth-section", {
  scrollTrigger: {
    trigger: ".fifteenth-section",
    start: "top",
    end: "bottom",
    pin: true,
    scrub: 1,
    onEnter: () => {
      changeBackgroundColor();
    },
  },
});
