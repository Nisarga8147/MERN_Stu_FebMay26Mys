
document.addEventListener("DOMContentLoaded", function () {

    function initProjectExpand() {
        const container = document.getElementById("projects-container");

        if (!container) return;

        const projects = projectsData.map(p => ({
            ...p,
            expanded: false
        }));

        const SHORT_LENGTH = 60;

        function renderProjects(projectexpand) {
        // window.renderProjects = function(list) {
            container.innerHTML = "";

            list.forEach((project, index) => {
                const isExpanded = project.expanded;

                const text = isExpanded || project.description.length <= SHORT_LENGTH
                    ? project.description
                    : project.description.slice(0, SHORT_LENGTH) + "...";

                const buttonText = isExpanded ? "View Less" : "View More";

                const card = document.createElement("div");
                card.className = "p-6 border rounded shadow";

                card.innerHTML = `
                    <h3 class="text-xl font-bold mb-2">${project.name}</h3>
                    <p class="text-gray-600 mb-3">${text}</p>
                    <button data-index="${index}" class="text-blue-600 font-bold">
                        ${buttonText}
                    </button>
                `;

                container.appendChild(card);
            });

            const buttons = container.querySelectorAll("button");

            buttons.forEach(btn => {
                btn.addEventListener("click", function () {
                    const i = this.dataset.index;

                    projects[i].expanded = !projects[i].expanded;

                    renderProjects(projects);
                });
            });
        }

        renderProjects(projects);
    }

    initProjectExpand();
});