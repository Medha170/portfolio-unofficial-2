document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress');
    
    // Set progress bars to their skill percentage on page load
    progressBars.forEach(progress => {
        const skillPercentage = progress.getAttribute('data-skill');
        setTimeout(() => {
            progress.style.width = skillPercentage;
        }, 200); // Small delay for smoother animation
    });
});

