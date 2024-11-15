console.log("Bienvenue sur mon portfolio !");

document.addEventListener("DOMContentLoaded", function() {
    const projectsSection = document.querySelector("#projects");
    projectsSection.addEventListener("mouseover", () => {
        projectsSection.style.backgroundColor = "#e0f7fa";
    });
    projectsSection.addEventListener("mouseleave", () => {
        projectsSection.style.backgroundColor = "white";
    });
});
