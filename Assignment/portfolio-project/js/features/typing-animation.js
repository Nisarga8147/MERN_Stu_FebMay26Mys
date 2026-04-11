
const roles = [
    "Full-Stack Developer",
    "MERN Enthusiast",
    "Competitive Programmer"
];

const textElement = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
    const currentRole = roles[roleIndex];

    textElement.textContent = currentRole.slice(0, charIndex);

    charIndex++;

    if (charIndex > currentRole.length) {
        setTimeout(() => {
            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;
        }, 1000);
    }

    setTimeout(typeEffect, 100); // typing speed
}

typeEffect();