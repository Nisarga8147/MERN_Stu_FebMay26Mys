document.addEventListener("DOMContentLoaded", function () {

    window.projects = [
        { name: "Movie Time" },
        { name: "Gola" },
        { name: "Portfolio Website" },
        { name: "Developer Stats Dashboard" }
    ];

    function initProjectCount() {
        const countEl = document.getElementById("project-count");
        const searchInput = document.getElementById("project-search");
        const container = document.getElementById("projects-container");

        if (!countEl || !searchInput || !container) return;

        const projects = window.projects;

        function updateCount(list) {
            countEl.textContent = list.length + " project(s) found";
        }

        function renderProjects(list) {
            container.innerHTML = "";

            if (list.length === 0) {
                container.innerHTML = "<p>No projects found</p>";
            } else {
                list.forEach(project => {
                    const div = document.createElement("div");
                    div.className = "p-4 border rounded";
                    div.textContent = project.name;
                    container.appendChild(div);
                });
            }

            updateCount(list);
        }

        renderProjects(projects);

        searchInput.addEventListener("input", function () {
            const text = this.value.toLowerCase();

            const filtered = projects.filter(p =>
                p.name.toLowerCase().includes(text)
            );

            renderProjects(filtered);
        });
    }

    initProjectCount();
});