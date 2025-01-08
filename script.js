function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // Loader Animation
    gsap.to("#loader",{
        top: "-100%",
        delay: 1,
        duration: 1.5,
        ease: "power4.inOut"
    });

    // Page 1 Animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top top",
            end: "bottom top",
            scrub: 3
        }
    });

    tl.to("#head-1 h4", {
        y: -100,
        stagger: 0.1
    });

    // Head-2 Animations
    gsap.to("#center", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        delay: 3,
        ease: "power4.inOut"
    });

    gsap.to("#center img", {
        scale: 1,
        duration: 2,
        delay: 3.5,
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

    // Page 3 Text Animation
    document.querySelectorAll("#page3 .wrap").forEach(wrap => {
        gsap.from(wrap.children, {
            y: "100%",
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: wrap,
                scroller: "#main",
                start: "top 60%"
            }
        });
    });

    // Page 6 Image Animations
    gsap.to("#page6 .elem:nth-child(1) img", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 60%"
        }
    });

    gsap.to("#page6 .elem:nth-child(2) img", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 60%"
        }
    });

    // Page 11 Slider Animation
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        gsap.to(slide, {
            x: "-100%",
            ease: "none",
            scrollTrigger: {
                trigger: "#page11",
                scroller: "#main",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true
            }
        });
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init();
