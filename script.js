const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 0.8
});

gsap.registerPlugin(ScrollTrigger);

// Loader Animation
gsap.to("#loader",{
    top: "-100%",
    delay: 1,
    duration: 1,
    ease: "power4.inOut"
})

// Initial Animations
gsap.from("#navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 2
});

// Head-1 Animations
gsap.from("#head-1 img", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 2
});

gsap.from("#head-1 h4", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 2
});

// Head-2 Animations
gsap.to("#center", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1,
    delay: 2.5,
    ease: "power4.inOut"
});

gsap.to("#center img", {
    scale: 1,
    duration: 1,
    delay: 3,
    ease: "power4.inOut"
});

gsap.to("#head-2 #left", {
    y: 0,
    duration: 1,
    delay: 3,
    ease: "power4.inOut"
});

gsap.to("#head-2 #right", {
    y: 0,
    duration: 1,
    delay: 3,
    ease: "power4.inOut"
});

// Page 2 Animations
gsap.from("#page2 h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 80%",
    }
});

// Page 3 Animations
document.querySelectorAll("#page3 .wrap").forEach(wrap => {
    gsap.from(wrap.children, {
        y: "100%",
        duration: 1,
        scrollTrigger: {
            trigger: wrap,
            scroller: "#main",
            start: "top 80%"
        }
    });
});

// Page 6 Animations
gsap.to("#page6 .elem:nth-child(1) img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 80%"
    }
});

gsap.to("#page6 .elem:nth-child(2) img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 80%"
    }
});

// Page 12 Hover Animations
document.querySelectorAll("#page12 .elm").forEach(elm => {
    elm.addEventListener("mouseenter", () => {
        gsap.to(elm.querySelector("h2"), {
            y: "-100%",
            duration: 0.4,
            ease: "power2.inOut"
        });
    });
    
    elm.addEventListener("mouseleave", () => {
        gsap.to(elm.querySelector("h2"), {
            y: "0%",
            duration: 0.4,
            ease: "power2.inOut"
        });
    });
});

// Update ScrollTrigger when locomotive scroll updates
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
});

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
