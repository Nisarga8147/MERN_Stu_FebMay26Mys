function renderSkills(){
    const skillsContainer = document.getElementById("skills-container");
    if(!skillsContainer){
        console.log("skills container not found");
        return;
    }
    skillsContainer.innerHTML = "";
    skillsData.forEach(function(skill){
        //to create outer card
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";
        //create icon 
        const iconBOx = document.createElement("div");
        iconBOx.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";
        //create icon text 
        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = skill.shortLabel;
        //put ico text inside icon box
        iconBOx.appendChild(iconText);
        //create skill name
        const skillName = document.createElement("h3");
        skillName.className = "text-xl font-bold mb-2";
        skillName.textContent = skill.name;
        //create skill desc
        const skillDescription = document.createElement("p");
        skillDescription.className = "text-sm";
        skillDescription.textContent = skill.description;
        //append all chid elements to card
        card.appendChild(iconBOx);
        card.appendChild(skillName);
        card.appendChild(skillDescription);
        //Append card to skill container
        skillsContainer.appendChild(card);
    });
    console.log("Skills rendered successfully");
}