// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing animation effect
const roles = ["Web Developer", "Designer", "Freelancer", "Tech Enthusiast"];
let roleIndex = 0;

function changeRole() {
    document.getElementById("dynamic-role").textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}
setInterval(changeRole, 2000);
changeRole();

// Live clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = `🕒 ${timeString}`;
}
setInterval(updateClock, 1000);
updateClock();

// Dark mode toggle (Fixed)
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});

if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
}

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message Sent Successfully!");
    this.reset();
});

// Back to top button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
