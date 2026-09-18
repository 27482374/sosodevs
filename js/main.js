/* ========================================
   SOSO.DEV — MAIN JS
======================================== */


/* ========================================
   CUSTOM CURSOR
======================================== */

const cursor = document.querySelector(".cursor");
const cursorLabel = document.querySelector(".cursor-label");

if (cursor) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

        if (cursorLabel) {
            cursorLabel.style.left = mouseX + "px";
            cursorLabel.style.top = mouseY + "px";
        }

    });


    /* Curseur sur les éléments cliquables */

    const clickableElements = document.querySelectorAll(
        "a, button, iframe, .project, .service, .price"
    );

    clickableElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.style.transform =
                "translate(-50%, -50%) scale(1.8)";

            if (cursorLabel) {
                cursorLabel.style.opacity = "1";
            }

        });


        element.addEventListener("mouseleave", () => {

            cursor.style.transform =
                "translate(-50%, -50%) scale(1)";

            if (cursorLabel) {
                cursorLabel.style.opacity = "0";
            }

        });

    });

}


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}


/* ========================================
   BACK TO TOP
======================================== */

const backToTop = document.querySelector(
    '.footer-bottom a[href="#"]'
);

if (backToTop) {

    backToTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ========================================
   NAVBAR SCROLL
======================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}


/* ========================================
   MARQUEE
======================================== */

const marqueeTrack = document.querySelector(".marquee-track");

if (marqueeTrack) {

    marqueeTrack.addEventListener("mouseenter", () => {
        marqueeTrack.style.animationPlayState = "paused";
    });

    marqueeTrack.addEventListener("mouseleave", () => {
        marqueeTrack.style.animationPlayState = "running";
    });

}


/* ========================================
   PAGE LOADED
======================================== */

document.documentElement.classList.add("js-loaded");
