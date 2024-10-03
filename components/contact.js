document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading or processing message
    document.getElementById('form-message').textContent = 'Sending...';

    // Send email via EmailJS
    emailjs.sendForm('service_c703bjk', 'template_nrp41kq', this)
        .then(function() {
            // Success message
            document.getElementById('form-message').textContent = 'Message sent successfully!';
        }, function(error) {
            // Error message
            document.getElementById('form-message').textContent = 'Failed to send message. Please try again later.';
        });

    // Optionally reset the form
    this.reset();
});

// Animate contact section on scroll
window.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    const contactPosition = contactSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contactPosition < screenPosition) {
        contactSection.style.opacity = '1';
        contactSection.style.transform = 'translateY(0)';
    }
});
