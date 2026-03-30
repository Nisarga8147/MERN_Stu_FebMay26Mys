function initScrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("text-blue-600", "font-bold");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("text-blue-600", "font-bold");
            }
        });
    });
}
initScrollSpy();