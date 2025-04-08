gsap.registerPlugin(ScrollTrigger);

gsap.to(".gros-carre", {
    scale: 20,
    scrollTrigger: {
        trigger: ".box",
        start: "top",
        end: "bottom",
        scrub: 1,
        pin: true,
        markers: true,
    },
});