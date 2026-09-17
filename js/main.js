const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

});

document.querySelectorAll("a, .service, .project, .price").forEach((element) => {

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
