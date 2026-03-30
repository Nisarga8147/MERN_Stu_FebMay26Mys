function initScrollProgress() {
    const scrollBar = document.getElementById("scroll-bar");

    if (!scrollBar) return;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        scrollBar.style.width = scrollPercent + "%";
    });
}
initScrollProgress();