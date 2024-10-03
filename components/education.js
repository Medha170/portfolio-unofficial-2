document.addEventListener("DOMContentLoaded", () => {
    const educationSection = document.querySelector("#education");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation when section is visible
                educationSection.querySelectorAll('.institution').forEach((institution, index) => {
                    institution.style.animation = `fadeIn 0.5s ease ${index * 0.3}s forwards`;
                });
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the section is visible
    });

    observer.observe(document.querySelector("#education"));
});
