// Typing Animation
const texts = ["Tech Enthusiast", "Web Developer", "Flutter Learner", "Problem Solver"];
let count = 0;
let index = 0;

function type() {
    const typingElement = document.getElementById('typing');
    const currentText = texts[count];
    
    typingElement.textContent = currentText.slice(0, ++index);

    if (index === currentText.length) {
        count = (count + 1) % texts.length;
        index = 0;
        setTimeout(type, 1800);
    } else {
        setTimeout(type, 70);
    }
}

// Scroll Reveal Animation
function revealSections() {
    document.querySelectorAll('.section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('active');
        }
    });
}

// Hamburger Menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

// Initialize
window.onload = () => {
    type();
    window.addEventListener('scroll', revealSections);
    revealSections();
};


/*const form = document.getElementById("contactForm");
const message = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    message.textContent = "Message sent successfully!";
    message.style.color = "lightgreen";

    form.reset();
});*/
