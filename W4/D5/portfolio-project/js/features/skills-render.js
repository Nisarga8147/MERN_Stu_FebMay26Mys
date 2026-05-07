function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  // group by category
  const grouped = {};

  skillsData.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill);
  });

  // render each category
  for (let category in grouped) {

    const section = document.createElement("div");
    section.className = "w-full";

    section.innerHTML = `
      <h3 class="text-xl font-bold mb-4 text-indigo-600">${category}</h3>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${grouped[category].map(skill => `
          <div class="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 flex items-center justify-center 
                          bg-indigo-600 text-white font-bold rounded-full">
                ${skill.shortLabel}
              </div>

              <h4 class="font-semibold">${skill.name}</h4>
            </div>

            <p class="text-sm text-gray-600">
              ${skill.description}
            </p>

          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  }
}