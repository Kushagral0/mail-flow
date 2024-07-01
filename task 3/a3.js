// JavaScript for form validation, interactive menus, and dynamic content updates

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'All fields are required.';
    } else if (!validateEmail(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
    } else {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you for your message. We will get back to you soon.';
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Interactive Menu
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Dynamic Content Updates
document.getElementById('services').addEventListener('click', function() {
    alert('Check out our latest services and offers!');
});
