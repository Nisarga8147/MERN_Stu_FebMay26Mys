 function renderProjects(filteredProjects = projectsData) {
  const container = document.getElementById("projects-container");

  container.innerHTML = "";

  filteredProjects.forEach((project) => {
    const card = document.createElement("div");

    card.className =
      "bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col h-full";

    const techList = project.technologies
      .map(
        (tech) =>
          `<span class="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs">${tech}</span>`
      )
      .join(" ");

    card.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${project.name}</h3>

      <p class="text-sm text-gray-500 mb-2">${project.category}</p>

      <p class="text-gray-700 text-sm mb-4">
        ${project.description}
      </p>

      <div class="flex flex-wrap gap-2 mb-4">
        ${techList}
      </div>

      <div class="mt-auto flex justify-between items-center">
        <span class="text-green-600 font-semibold text-sm">
          ${project.status}
        </span>
      </div>
    `;

    container.appendChild(card);
  });
}
function setupProjectSearch() {
  const searchInput = document.getElementById("project-search");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = projectsData.filter(project =>
      project.name.toLowerCase().includes(value)
    );

    renderProjects(filtered);
  });
}