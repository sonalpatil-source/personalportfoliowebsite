// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


/*const form = document.getElementById("contactForm");
const message = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    message.textContent = "Message sent successfully!";
    message.style.color = "lightgreen";

    form.reset();
});*/