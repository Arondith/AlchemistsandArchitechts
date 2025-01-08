document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderContent = document.getElementById('loader-content');
    const loaderTitle = loaderContent.querySelector('h1');

    // Brief Loading Screen Animation
    const loadingTimeline = gsap.timeline({
        onComplete: () => {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        }
    });

    loadingTimeline
        .to(loaderTitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        })
        .to(loaderTitle, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            delay: 0.5,
            ease: 'power2.in'
        });

    // Smooth Scroll Initialization
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    });

    // GSAP ScrollTrigger Integration
    gsap.registerPlugin(ScrollTrigger);
    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });

    // Services Section Animations
    gsap.from('.services-grid .service-card', {
        scrollTrigger: {
            trigger: '#services',
            scroller: '#main',
            start: 'top 70%'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
    });

    // Gallery Section Hover Effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { scale: 1.05, duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { scale: 1, duration: 0.3 });
        });
    });

    // Booking Form Validation
    const bookingForm = document.querySelector('.booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = bookingForm.querySelectorAll('input, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            // Simulate form submission
            const submitBtn = bookingForm.querySelector('button');
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Booking request submitted! We\'ll contact you soon.');
                bookingForm.reset();
                submitBtn.textContent = 'Schedule Consultation';
                submitBtn.disabled = false;
            }, 1500);
        }
    });

    // Navbar Scroll Effects
    const navbar = document.querySelector('#navbar');
    locoScroll.on('scroll', (args) => {
        if (args.scroll.y > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
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

    // Ensure ScrollTrigger is updated
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
});
