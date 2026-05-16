const header = document.querySelector("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // 一番上なら必ず表示
    if (currentScrollY <= 0) {
        header.classList.remove("hide");
    }

    // 下スクロールで隠す
    else if (currentScrollY > lastScrollY) {
        header.classList.add("hide");
    }

    // 上スクロールで表示
    else {
        header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});