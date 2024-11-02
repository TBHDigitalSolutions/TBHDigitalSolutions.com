document.addEventListener('DOMContentLoaded', function() {
    // Hero Section: Play background video if paused
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo && heroVideo.paused) heroVideo.play();

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card, .card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.classList.add('hovered'));
        card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
    });

    // Lazy Load Images
    const lazyImages = document.querySelectorAll('.media-showcase img');
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

    // Slider Scroll Effect
    const slider = document.querySelector('.slider');
    let isDown = false, startX, scrollLeft;
    if (slider) {
        slider.addEventListener('mousedown', startSliderScroll);
        slider.addEventListener('mouseleave', resetSliderScroll);
        slider.addEventListener('mouseup', resetSliderScroll);
        slider.addEventListener('mousemove', handleSliderScroll);
    }

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

    // Modal Logic for Contact Form
    const modal = document.getElementById('popup-modal');
    const openButtons = document.querySelectorAll('.open-form'); // Any button with class 'open-form'
    const closeButton = document.querySelector('.close-button');
    if (modal && closeButton) {
        openButtons.forEach(button => {
            button.addEventListener('click', openModal);
        });
        closeButton.addEventListener('click', closeModal);
        window.addEventListener('click', (event) => {
            if (event.target === modal) closeModal();
        });
    }

    function openModal() {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        closeButton.focus();
    }

    function closeModal() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
    }

    // Smooth Scrolling for In-Page Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in Animation for Sections on Scroll
    const sections = document.querySelectorAll(".section");
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("section-visible");
        });
    });
    sections.forEach(section => sectionObserver.observe(section));

    // "Read More" Expand Effect for Service Cards
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => toggleCardExpansion(event, button));
    });

    function toggleCardExpansion(event, button) {
        event.preventDefault();
        const card = button.closest('.card');
        const cardText = card.querySelector('.card-text');
        document.querySelectorAll('.card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
                otherCard.querySelector('.card-text').style.display = 'none';
                const otherButton = otherCard.querySelector('.read-more');
                otherButton.textContent = 'Read More';
                otherButton.setAttribute('aria-expanded', 'false');
            }
        });
        const isExpanded = card.classList.toggle('expanded');
        cardText.style.display = isExpanded ? 'block' : 'none';
        button.textContent = isExpanded ? 'Read Less' : 'Read More';
        button.setAttribute('aria-expanded', isExpanded);
    }

    // Contact Section Hover Effect for Card and Logo
    const cardContainer = document.querySelector('.card-container');
    const logoImage = document.querySelector('.contact-left img');
    if (cardContainer && logoImage) {
        cardContainer.addEventListener('mouseenter', expandContactSection);
        cardContainer.addEventListener('mouseleave', collapseContactSection);
    }

    function expandContactSection() {
        cardContainer.classList.add('expanded');
        logoImage.classList.add('expanded-logo');
    }

    function collapseContactSection() {
        cardContainer.classList.remove('expanded');
        logoImage.classList.remove('expanded-logo');
    }
});
