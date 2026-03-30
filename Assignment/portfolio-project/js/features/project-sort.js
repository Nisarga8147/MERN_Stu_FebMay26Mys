document.addEventListener("DOMContentLoaded", function () {

    function initProjectSorting() {
        const sortSelect = document.getElementById("project-sort");
        const container = document.getElementById("projects-container");

        if (!sortSelect || !container) return;

        let projects = [
            { name: "Movie Time", status: "completed" },
            { name: "Gola", status: "ongoing" },
            { name: "Portfolio Website", status: "completed" },
            { name: "Developer Stats Dashboard", status: "pending" }
        ];

        function renderProjects(list) {
            container.innerHTML = "";

            list.forEach(project => {
                const card = document.createElement("div");
                card.className = "p-6 border rounded shadow";

                card.innerHTML = `
                    <h3 class="text-xl font-bold">${project.name}</h3>
                    <p class="text-gray-500">${project.status}</p>
                `;

                container.appendChild(card);
            });
        }

        renderProjects(projects);

        sortSelect.addEventListener("change", function () {
            const value = this.value;

            let sorted = [...projects];

            if (value === "az") {
                sorted.sort((a, b) => a.name.localeCompare(b.name));
            } else if (value === "za") {
                sorted.sort((a, b) => b.name.localeCompare(a.name));
            } else if (value === "status") {
                sorted.sort((a, b) => a.status.localeCompare(b.status));
            }

            renderProjects(sorted);
        });
    }

    initProjectSorting();
});