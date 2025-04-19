gsap.registerPlugin(ScrollTrigger);

for (let i = 0; i < sections.length+1; i++) {
    gsap.to(sections[i], {
        scrollTrigger: {
            trigger: sections[i],
            start: "top top",
            endTrigger : "section" + (i+1),
            scrub : true,
        },
        backgroundColor : colors[i+1],
})};