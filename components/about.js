document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  const image = document.querySelector(".image-container img");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Trigger animations when the section is visible
              aboutSection.style.animation = "fadeIn 1.5s ease forwards";
              image.style.animation = "bounceIn 1.5s ease forwards";
          }
      });
  }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
  });

  observer.observe(document.querySelector("#about"));
});

