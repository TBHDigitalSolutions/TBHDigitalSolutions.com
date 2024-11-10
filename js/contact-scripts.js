document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const steps = Array.from(form.querySelectorAll(".step"));
    const confirmationMessage = document.getElementById("confirmation-message");
    let currentStep = 0;

    // Navigation logic
    document.querySelectorAll(".next-step").forEach((btn) => {
        btn.addEventListener("click", () => {
            steps[currentStep].classList.remove("active");
            currentStep++;
            steps[currentStep].classList.add("active");
        });
    });

    document.querySelectorAll(".prev-step").forEach((btn) => {
        btn.addEventListener("click", () => {
            steps[currentStep].classList.remove("active");
            currentStep--;
            steps[currentStep].classList.add("active");
        });
    });

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const consentCheckbox = document.getElementById("consent");
        if (!consentCheckbox.checked) {
            alert("Please consent to being contacted.");
            return;
        }
        form.style.display = "none";
        confirmationMessage.style.display = "block";
    });
});
