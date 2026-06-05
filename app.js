gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    // Locks the track to the screen and links everything to user scroll speed
    gsap.to(".truck-track", {
        x: "-200vw", // Moves across the width of the extra sections
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // Smoothly captures trackpad or scrollwheel momentum
            pin: true
        }
    });

    // Handle timing for the text fades and technical grid pop on section 2
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

    // Sequence details
    timeline
        // Fade first text out right as the DAF GHP truck rolls away
        .to(".segment-1 .text-overlay", { opacity: 0, y: -30, duration: 2 })
        
        // As the DAF Refrigerated Truck enters, pull up the new text copy
        .from(".segment-2 .text-overlay", { opacity: 0, y: 30, duration: 2 }, "+=1")
        
        // Turn on the illuminated tactical digital yard matrix over the reefer truck
        .to(".tech-grid-matrix", { opacity: 1, duration: 1.5 })
        
        // Clear them out for the final brand landing message slide
        .to(".segment-2 .text-overlay, .tech-grid-matrix", { opacity: 0, duration: 2 }, "+=1")
        .from(".segment-3 .text-overlay", { opacity: 0, scale: 0.95, duration: 2 });
});
