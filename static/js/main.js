// static/js/main.js
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Auto-hide flash messages after 5 seconds
    const flashMessages = document.querySelectorAll('.alert');
    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 5000);
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields');
            } else if (!email.includes('@') || !email.includes('.')) {
                e.preventDefault();
                alert('Please enter a valid email address');
            }
        });
    }

    // Project search/filter functionality
    const searchInput = document.getElementById('project-search');
    if (searchInput) {
        searchInput.addEventListener('keyup', function () {
            const filter = this.value.toLowerCase();
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach(card => {
                const title = card.querySelector('.project-title')?.textContent.toLowerCase();
                const desc = card.querySelector('.project-desc')?.textContent.toLowerCase();
                if (title.includes(filter) || desc.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0');
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
});