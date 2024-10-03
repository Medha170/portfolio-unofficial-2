document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#menu .item a");

    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Check if the link is an external link (like Resume)
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetSection = document.querySelector(targetId);

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active section on scroll
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${section.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});
