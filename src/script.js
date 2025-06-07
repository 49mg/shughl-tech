// src/script.js
// This file can be used for any plain JavaScript interactivity.
// For example, handling mobile navigation toggle, form submissions, etc.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Simple mobile navigation toggle (if implemented in HTML)
    const mobileMenuButton = document.querySelector('header button.md\:hidden');
    const navLinks = document.querySelector('header nav'); // Assuming nav is toggleable

    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle visibility of navigation links
            // This would typically involve adding/removing Tailwind classes like 'hidden' or 'flex'
            // For this static HTML, it's just a placeholder for interaction
            console.log('Mobile menu button clicked!');
            // navLinks.classList.toggle('hidden'); // Example toggle
        });
    }

    // You can add more JavaScript logic here
    console.log('ShaghlTech website loaded!');
});
