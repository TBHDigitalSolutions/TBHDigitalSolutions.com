document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('popup-modal');
    const openButton = document.getElementById('open-contact-form');
    const closeButton = document.querySelector('.close-button');
    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmation-message');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;
    const isMobile = window.innerWidth < 768;

    if (modal && openButton && closeButton && form && confirmationMessage && steps.length > 0) {
        // Open Modal
        openButton.addEventListener('click', () => openModal());
        closeButton.addEventListener('click', closeModal);
        window.addEventListener('click', (event) => {
            if (event.target === modal) closeModal();
        });

        function openModal() {
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';   // Center vertically
            modal.style.justifyContent = 'center'; // Center horizontally
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
            closeButton.focus();
        }

        function closeModal() {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
            resetForm(); // Reset form on modal close
        }

        function resetForm() {
            steps[currentStep].classList.remove('active');
            currentStep = 0;
            steps[currentStep].classList.add('active');
            confirmationMessage.style.display = 'none';
        }

        // Navigation through form steps
        document.querySelectorAll('.next-step').forEach(button => {
            button.addEventListener('click', () => navigateSteps(1));
        });
        document.querySelectorAll('.prev-step').forEach(button => {
            button.addEventListener('click', () => navigateSteps(-1));
        });

        function navigateSteps(step) {
            // Ensure we are within step bounds
            if (currentStep + step >= 0 && currentStep + step < steps.length) {
                steps[currentStep].classList.remove('active'); // Hide current step
                currentStep += step; // Update step
                steps[currentStep].classList.add('active'); // Show next step

                // Scroll into view for mobile
                if (isMobile) {
                    steps[currentStep].scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        // Form submission
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            steps[currentStep].classList.remove('active');
            confirmationMessage.style.display = 'block';
            closeButton.focus();
        });
    } else {
        console.warn('Required elements for the modal are missing in the DOM.');
    }
});
