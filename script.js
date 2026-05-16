history.scrollRestoration = "manual";

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, 10);
});


const header = document.querySelector("header");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
        header.classList.remove("hide");
    }
    else if (currentScrollY > lastScrollY) {
        header.classList.add("hide");
    }
    else {
        header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});