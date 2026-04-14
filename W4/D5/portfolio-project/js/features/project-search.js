function renderProjects(){

    const projectContainer = document.getElementById("projects-container");
    if(!projectContainer){
        console.log("Projects Container Not Found");
        return;
    }

    projectContainer.innerHTML = "";

    projectsData.forEach(function(project){
        const card = document.createElement("div");
        card.className = "p-10 text-center bg-green-300 rounded-8xl shadow-lg";
        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;
        const projectCategory = document.createElement("p");
        projectCategory.className = "text-sm font-semibold";
        projectCategory.textContent = project.category;
        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm";
        projectTechnologies.textContent = project.technologies;
        const projectStatus = document.createElement("p");
        projectStatus.className = "text-sm";
        projectStatus.textContent = project.status;
        const projectLiveDemo = document.createElement("p");
        projectLiveDemo.className = "text-sm";
        projectLiveDemo.textContent = project.liveDemo;
        const projectGithub = document.createElement("p");
        projectGithub.className = "text-sm";
        projectGithub.textContent = project.github;
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm";
        projectDescription.textContent = project.description;
        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectLiveDemo);
        card.appendChild(projectGithub);

        projectContainer.appendChild(card);

    });
    console.log("")
}
renderProjects();