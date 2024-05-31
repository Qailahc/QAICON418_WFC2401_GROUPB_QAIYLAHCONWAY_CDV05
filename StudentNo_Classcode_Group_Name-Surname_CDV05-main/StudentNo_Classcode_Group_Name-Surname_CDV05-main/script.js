// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Here you can add code to handle form submission, like sending data to a server
    alert('Your message has been submitted!'); // For demonstration purposes
});



