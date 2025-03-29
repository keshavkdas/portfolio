// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dynamic Projects Section
const projects = [
    { name: "Project 1", description: "Description of project 1", link: "#" },
    { name: "Project 2", description: "Description of project 2", link: "#" },
    { name: "Project 3", description: "Description of project 3", link: "#" }
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach(proj => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
        <a href="${proj.link}" target="_blank">View Project</a>
    `;
    projectsContainer.appendChild(projectDiv);
});
