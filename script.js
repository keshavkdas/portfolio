document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const projects = [
    { name: "Project 1", description: "Description of project 1", link: "#" },
    { name: "Project 2", description: "Description of project 2", link: "#" }
];

const projectsContainer = document.getElementById("projects-container");
projects.forEach(proj => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `<h3>${proj.name}</h3><p>${proj.description}</p><a href="${proj.link}">View Project</a>`;
    projectsContainer.appendChild(projectDiv);
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent! (This is a demo, implement backend for real messages)");
    this.reset();
});

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const sections = document.querySelectorAll("section");
function revealSections() {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", revealSections);
revealSections();

const text = "Your Name";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 150);
    }
}
window.onload = typeEffect;
