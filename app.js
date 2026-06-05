gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    buildBromedinPipeline();
});

function buildBromedinPipeline() {
    // Master timeline governing the entire locked frame sequence
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-engine",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6, // Fast, crisp scroll tracking reaction time
            pin: true
        }
    });

    // STEP 1: Bring the first title block out into view immediately
    tl.to(".headline-block.h1", { opacity: 1, y: 0, scale: 1, duration: 2 })
      .to(".daf-ghp .truck-asset", { scale: 1.05, duration: 2 }, "<");

    // STEP 2: Simultaneously pan the camera and pull the DAF GHP text cards away
    tl.to(".fleet-carrier", { 
        x: "-100vw", 
        duration: 8, 
        ease: "power2.inOut" 
    })
    .to(".headline-block.h1", { 
        opacity: 0, 
        y: -40, 
        duration: 3 
    }, "<")
    // Parallax sky offset move to give deep 3D background depth
    .to(".skyline-bg", {
        backgroundPosition: "40% 50%",
        duration: 8,
        ease: "power2.inOut"
    }, "<")
    
    // STEP 3: Reveal the DAF Refrigerated Rig Content Card beautifully
    .to(".headline-block.h2", { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 3 
    }, "-=2")
    .fromTo(".daf-reefer .truck-asset", 
        { scale: 0.9, rotation: -1 }, 
        { scale: 1.05, rotation: 0, duration: 4, ease: "power1.out" }, 
        "-=2"
    )

    // STEP 4: Ultimate Finale - Zoom out slightly into final company branding display
    .to(".headline-block.h2", { opacity: 0, y: -40, duration: 3 })
    .to(".headline-block.h3", { opacity: 1, y: 0, duration: 3 })
    .to(".truck-blueprint-overlay", { 
        borderColor: "rgba(57, 255, 20, 0.3)", 
        duration: 2 
    });
}
