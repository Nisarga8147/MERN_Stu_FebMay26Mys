function renderEducation() {
  const container = document.getElementById("education-container");

  container.innerHTML = ""; // clear before rendering

  educationsData.forEach((edu) => {
    const card = document.createElement("div");

    card.className =
      "bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition";

    card.innerHTML = `
      <h3 class="text-xl font-bold text-indigo-600">${edu.course}</h3>
      <p class="text-gray-700">${edu.college}</p>
      <p class="text-sm text-gray-500">${edu.board} • ${edu.year}</p>
      <p class="text-sm font-semibold mt-2">${edu.percentage}</p>
    `;

    container.appendChild(card);
  });
}