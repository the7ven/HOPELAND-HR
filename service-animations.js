// Animation au défilement pour la section services
document.addEventListener('DOMContentLoaded', function() {
    
    // Fonction pour vérifier si un élément est visible dans le viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Sélectionner tous les conteneurs de services
    const serviceContents = document.querySelectorAll('.service-content');
    
    // Ajouter la classe initiale pour le style de départ
    serviceContents.forEach((content, index) => {
        content.style.opacity = '0';
        content.style.transform = 'scale(0.8)';
        content.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        content.style.transitionDelay = '0s';
    });

    // Fonction d'animation
    function animateOnScroll() {
        serviceContents.forEach((content, index) => {
            if (isInViewport(content) && content.style.opacity === '0') {
                // Délai progressif pour chaque élément
                setTimeout(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'scale(1)';
                }, index * 150); // 150ms de délai entre chaque élément
            }
        });
    }

    // Animation des images et textes séparément pour plus d'effet
    function setupDetailedAnimations() {
        serviceContents.forEach((content) => {
            const image = content.querySelector('.service-image');
            const text = content.querySelector('.service-text');
            const listItems = content.querySelectorAll('.service-list li');
            const button = content.querySelector('.btn-primary');

            if (image) {
                image.style.opacity = '0';
                image.style.transform = 'scale(0.7) translateY(30px)';
                image.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s';
            }

            if (text) {
                const heading = text.querySelector('h2');
                const paragraph = text.querySelector('p');

                if (heading) {
                    heading.style.opacity = '0';
                    heading.style.transform = 'translateY(30px)';
                    heading.style.transition = 'all 0.6s ease 0.3s';
                }

                if (paragraph) {
                    paragraph.style.opacity = '0';
                    paragraph.style.transform = 'translateY(20px)';
                    paragraph.style.transition = 'all 0.6s ease 0.4s';
                }
            }

            if (listItems.length > 0) {
                listItems.forEach((item, i) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    item.style.transition = `all 0.4s ease ${0.5 + (i * 0.05)}s`;
                });
            }

            if (button) {
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px)';
                button.style.transition = 'all 0.6s ease 0.8s';
            }
        });
    }

    // Fonction pour animer les détails
    function animateDetails() {
        serviceContents.forEach((content) => {
            if (isInViewport(content)) {
                const image = content.querySelector('.service-image');
                const heading = content.querySelector('.service-text h2');
                const paragraph = content.querySelector('.service-text p');
                const listItems = content.querySelectorAll('.service-list li');
                const button = content.querySelector('.btn-primary');

                if (image && image.style.opacity === '0') {
                    image.style.opacity = '1';
                    image.style.transform = 'scale(1) translateY(0)';
                }

                if (heading && heading.style.opacity === '0') {
                    heading.style.opacity = '1';
                    heading.style.transform = 'translateY(0)';
                }

                if (paragraph && paragraph.style.opacity === '0') {
                    paragraph.style.opacity = '1';
                    paragraph.style.transform = 'translateY(0)';
                }

                listItems.forEach((item) => {
                    if (item.style.opacity === '0') {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }
                });

                if (button && button.style.opacity === '0') {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }
            }
        });
    }

    // Initialiser les animations détaillées
    setupDetailedAnimations();

    // Lancer l'animation au scroll
    window.addEventListener('scroll', function() {
        animateOnScroll();
        animateDetails();
    });

    // Vérifier au chargement de la page
    animateOnScroll();
    animateDetails();

    // Animation au survol des boutons (bonus)
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(0) scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animation au survol des images (bonus)
    const images = document.querySelectorAll('.service-image');
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(0)';
        });
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
});