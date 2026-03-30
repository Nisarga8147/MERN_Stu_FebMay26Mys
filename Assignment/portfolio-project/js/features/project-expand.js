document.addEventListener("DOMContentLoaded", function () {

    function initProjectExpand() {
        const container = document.getElementById("projects-container");

        if (!container) return;

        const projects = [
            {
                name: "Developer Stats Dashboard",
                description: "Dynamic dashboard that loads developer statistics and profile insights using Fetch API.",
                expanded: false
            },
            {
                name: "Portfolio Website",
                description: "Responsive personal portfolio website showcasing projects, skills, and contact information.",
                expanded: false
            },
            {
                name: "Movie Time",
                description: "Full stack movie ticket booking application with AI-powered smart movie suggestions.",
                expanded: true
            },
            {
                name: "Gola",
                description: "Cab booking platform that helps users quickly book rides for daily travel.",
                expanded: false
            }
        ];

        const SHORT_LENGTH = 60;

        function renderProjects(list) {
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