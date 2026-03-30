// Project data
const projects = [
    { title: "Movie Time" },
    { title: "Gola" },
    { title: "Portfolio Website" },
    { title: "Developer Stats Dashboard" }
];

const searchInput = document.getElementById("project-search");
const container = document.getElementById("projects-container");

function showProjects(list) {
    container.innerHTML = "";

    list.forEach(project => {
        container.innerHTML += `<p>${project.title}</p>`;
    });
}

showProjects(projects);

searchInput.addEventListener("input", function () {
    const text = searchInput.value.toLowerCase();

    const filtered = projects.filter(p =>
        p.title.toLowerCase().includes(text)
    );

    showProjects(filtered);
});