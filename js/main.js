/* =========================
   CURSEUR CUSTOM
========================= */

const cursor = document.querySelector(".cursor");
const cursorLabel = document.querySelector(".cursor-label");

document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

    if (cursorLabel) {
        cursorLabel.style.left = event.clientX + "px";
        cursorLabel.style.top = event.clientY + "px";
    }

});


/* =========================
   CURSEUR INTERACTIF
========================= */

document
    .querySelectorAll("a, .service, .price")
    .forEach((element) => {

        element.addEventListener("mouseenter", () => {

            if (cursor) {
                cursor.classList.add("big");
            }

        });

        element.addEventListener("mouseleave", () => {

            if (cursor) {
                cursor.classList.remove("big");
            }

        });

    });


/* =========================
   CURSEUR PROJETS
========================= */

document
    .querySelectorAll(".project")
    .forEach((project) => {

        project.addEventListener("mouseenter", () => {

            if (cursor) {
                cursor.classList.add("big");
            }

            document.body.classList.add("cursor-project");

        });

        project.addEventListener("mouseleave", () => {

            if (cursor) {
                cursor.classList.remove("big");
            }

            document.body.classList.remove("cursor-project");

        });

    });


/* =========================
   ANIMATIONS AU SCROLL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

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

    observer.observe(element);

});


/* =========================
   RETOUR EN HAUT
========================= */

document
    .querySelectorAll('a[href="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });
