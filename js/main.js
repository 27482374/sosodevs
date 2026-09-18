/* ========================================
   SOSO.DEV — MAIN JS
   Curseur + animations + navbar + retour haut
======================================== */


/* ========================================
   CUSTOM CURSOR
======================================== */

const cursor = document.querySelector(".cursor");
const cursorLabel = document.querySelector(".cursor-label");

if (cursor) {

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;

        if (cursorLabel) {
            cursorLabel.style.left = `${event.clientX}px`;
            cursorLabel.style.top = `${event.clientY}px`;
        }

    });


    const clickableElements = document.querySelectorAll(
        "a, button, iframe, .project, .service, .price"
    );


    clickableElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.classList.add("hover");

            if (cursorLabel) {
                cursorLabel.classList.add("visible");
            }

        });


        element.addEventListener("mouseleave", () => {

            cursor.classList.remove("hover");

            if (cursorLabel) {
                cursorLabel.classList.remove("visible");
            }

        });

    });

}


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {

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
   NAVBAR
======================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

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
   PAGE READY
======================================== */

document.documentElement.classList.add("js-loaded");
