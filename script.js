document.addEventListener('DOMContentLoaded', function() {
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');

            hamburgerMenu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                hamburgerMenu.classList.toggle('open');
            });

            // Optional: Close menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburgerMenu.classList.remove('open');
                    }
                });
            });
        });