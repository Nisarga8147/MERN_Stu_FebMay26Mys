document.addEventListener("DOMContentLoaded", function () {

    function initProjectFilters() {
        const filterContainer = document.getElementById("project-filters");
        const projectsContainer = document.getElementById("projects-container");

        if (!filterContainer || !projectsContainer) return;

        const projects = [
            { name: "Movie Time", category: "fullstack" },
            { name: "Gola", category: "backend" },
            { name: "Portfolio Website", category: "fullstack" },
            { name: "Developer Stats Dashboard", category: "frontend" }
        ];

        const categories = ["all", "frontend", "backend", "fullstack"];

        categories.forEach(cat => {
            const btn = document.createElement("button");
            btn.textContent = cat.toUpperCase();
            btn.className = "px-4 py-2 border rounded font-bold";
            btn.dataset.category = cat;

            filterContainer.appendChild(btn);
        });

        function renderProjects(list) {
            projectsContainer.innerHTML = "";

            list.forEach(project => {
                const card = document.createElement("div");
                card.className = "p-6 border rounded shadow";

                card.innerHTML = `
                    <h3 class="text-xl font-bold">${project.name}</h3>
                    <p class="text-gray-500">${project.category}</p>
                `;

                projectsContainer.appendChild(card);
            });
        }

        renderProjects(projects);

        const buttons = filterContainer.querySelectorAll("button");

        buttons.forEach(btn => {
            btn.addEventListener("click", function () {
                const category = this.dataset.category;

                buttons.forEach(b => b.classList.remove("bg-blue-500", "text-white"));
                this.classList.add("bg-blue-500", "text-white");

                const filtered =
                    category === "all"
                        ? projects
                        : projects.filter(p => p.category === category);

                renderProjects(filtered);
            });
        });

        buttons[0].classList.add("bg-blue-500", "text-white");
    }

    initProjectFilters();
});