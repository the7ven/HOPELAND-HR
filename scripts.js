
//menu hamburger

const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Fermer le menu lors du clic sur un lien
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Fermer le menu lors du clic en dehors
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });


        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Observe service cards
        document.querySelectorAll('.service-card').forEach(card => {
            observer.observe(card);
        });

        // Observe value cards
        document.querySelectorAll('.value-card').forEach(card => {
            observer.observe(card);
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message envoyé avec succès!');
        });

        // Smooth scroll for links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }); 