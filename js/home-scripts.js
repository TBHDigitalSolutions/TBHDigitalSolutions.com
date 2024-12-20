document.addEventListener('DOMContentLoaded', function () {
    // Hero Section: Play background video if paused
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('canplay', () => {
            if (heroVideo.paused) heroVideo.play();
        });
    }

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card, .card');
    if (serviceCards.length > 0) {
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => card.classList.add('hovered'));
            card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
        });
    }

    // Lazy Load Images
    const lazyImages = document.querySelectorAll('.media-showcase img');
    if ('IntersectionObserver' in window && lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(image => imageObserver.observe(image));
    }

    // Slider Scroll Effect
    const slider = document.querySelector('.slider');
    let isDown = false, startX, scrollLeft;
    if (slider) {
        slider.addEventListener('mousedown', startSliderScroll);
        slider.addEventListener('mouseleave', resetSliderScroll);
        slider.addEventListener('mouseup', resetSliderScroll);
        slider.addEventListener('mousemove', handleSliderScroll);

        function startSliderScroll(e) {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }

        function resetSliderScroll() {
            isDown = false;
            slider.classList.remove('active');
        }

        function handleSliderScroll(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        }
    }

    // Modal Logic for Contact Form
    const modal = document.getElementById('popup-modal');
    const openButtons = document.querySelectorAll('.open-form');
    const closeButton = document.querySelector('.close-button');
    if (modal) {
        const closeModal = () => {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
        };

        const openModal = () => {
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
            closeButton.focus();
        };

        openButtons.forEach(button => button.addEventListener('click', openModal));
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
            window.addEventListener('click', event => {
                if (event.target === modal) closeModal();
            });
        }
    }

    // Smooth Scrolling for In-Page Links
    const inPageLinks = document.querySelectorAll('a[href^="#"]');
    inPageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
            }
        });
    });

    // Fade-in Animation for Sections on Scroll
    const sections = document.querySelectorAll('.section');
    if ('IntersectionObserver' in window && sections.length > 0) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        });
        sections.forEach(section => sectionObserver.observe(section));
    }

    // "Read More" Expand Effect for Service Cards
    const readMoreButtons = document.querySelectorAll('.read-more');
    if (readMoreButtons.length > 0) {
        readMoreButtons.forEach(button => {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                const card = button.closest('.card');
                const cardText = card.querySelector('.card-text');

                // Close other expanded cards
                document.querySelectorAll('.card.expanded').forEach(expandedCard => {
                    if (expandedCard !== card) {
                        expandedCard.classList.remove('expanded');
                        const otherText = expandedCard.querySelector('.card-text');
                        if (otherText) otherText.style.display = 'none';
                        const otherButton = expandedCard.querySelector('.read-more');
                        if (otherButton) {
                            otherButton.textContent = 'Read More';
                            otherButton.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Toggle current card's expansion
                if (card && cardText) {
                    const isExpanded = card.classList.toggle('expanded');
                    cardText.style.display = isExpanded ? 'block' : 'none';
                    button.textContent = isExpanded ? 'Read Less' : 'Read More';
                    button.setAttribute('aria-expanded', isExpanded);
                }
            });
        });
    }

    // Contact Section Hover Effect for Card and Logo
    const cardContainer = document.querySelector('.card-container');
    const logoImage = document.querySelector('.contact-left img');
    if (cardContainer && logoImage) {
        cardContainer.addEventListener('mouseenter', () => {
            cardContainer.classList.add('expanded');
            logoImage.classList.add('expanded-logo');
        });
        cardContainer.addEventListener('mouseleave', () => {
            cardContainer.classList.remove('expanded');
            logoImage.classList.remove('expanded-logo');
        });
    }
});
