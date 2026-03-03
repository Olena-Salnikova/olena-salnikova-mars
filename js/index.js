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

// Create a form submit event listener
// 1. Find the form by name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

// 2. Add a handler for the form submission event
messageForm.addEventListener("submit", function(event) {
    // Stop the standard page refresh
    event.preventDefault();

    // 3. Get values ​​from form fields
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    // 4. Log data to the console (for verification)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // 5. Find the section with messages and access <ul>
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    // --- Show the section if it is hidden
    messageSection.style.display = "block";

    // 6. Create a new li for the message
    const newMessage = document.createElement("li");
    // ---Form the HTML content of li: name as a mailto link and message in a span
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;
    
    // 7. Create a delete button for each message
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    // 8. Add a handler to the button: remove the parent element (li) when clicked
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    // 9. Add a button to li
    newMessage.appendChild(removeButton);


    // 10. Add a new li to the ul of the message list
    messageList.appendChild(newMessage);

    // If there are no more messages after deletion, hide the section
    removeButton.addEventListener("click", function() {
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
        }
    });

    // 11. Clear the form after adding a message with reset() method
    messageForm.reset();
});


// Fetching GitHub Repositories
fetch("https://api.github.com/users/Olena-Salnikova/repos")
    .then(response => response.json())
    .then(repositories => {
        console.log(repositories);

        const projectSection = document.querySelector("#projects");// Select the projects section by id
        const projectList = projectSection.querySelector("ul");    // Select the <ul> inside the projects section

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");          // Create a list item
            const link = document.createElement("a");              // Create an anchor element
            link.href = repositories[i].html_url;                  // Set anchor href to repository URL
            link.innerText = repositories[i].name;                 // Set anchor text to repository name
            link.target = "_blank";                                // Open the link in a new tab (optional)
            project.appendChild(link);                             // Append the anchor to the list item
            projectList.appendChild(project);                      // Append the list item to the project list
        }
    })
    .catch(error =>
        console.error("Error fetching repositories:", error)        // Error handling
    );
