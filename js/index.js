// Creat Footer

const footer = document.createElement("footer");
document.body.appendChild(footer);

// Get the current date
const today = new Date();

// Get the current year
const thisYear = today.getFullYear();

// Create a paragraph element for the copyright notice
const copyright = document.createElement("p");
copyright.innerText = `\u00A9 ${thisYear} Olena Salnikova.`;

// Add the copyright to the footer
footer.appendChild(copyright);

// Create a link to go back to the top of the page
const backToTop = document.createElement("a");
backToTop.href = "#top";
backToTop.id = "backToTop";
backToTop.innerText = "Back to Top";

// Add the link "Back to Top" to the footer
footer.appendChild(backToTop);


// Create List of Skills
const skills = [
    "JavaScript", 
    "HTML", 
    "CSS", 
    "DOM",
    "API",
    "Git",
    "GitHub"
];

// Get the skills section and the unordered list within it
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

// Create a wrapper div with a new class for custom styling
const skillsWrapper = document.createElement("div");
skillsWrapper.classList.add("skills-section");

// Move the ul into the wrapper
skillsWrapper.appendChild(skillsList);

// Add the wrapper to the skills section
skillsSection.appendChild(skillsWrapper);

// Create a for loop to iterate over your skills Array
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

