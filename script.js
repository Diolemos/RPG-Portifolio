
window.onload = function () {

    //Progress bars
    var htmlProgress = document.getElementById("html-bar");
    if (htmlProgress) {
        RPGUI.set_value(htmlProgress, 0.7);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'html-bar' not found.");
    }
    var reactProgress = document.getElementById("react-bar");
    if (reactProgress) {
        RPGUI.set_value(reactProgress, 0.5);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'react-bar' not found.");
    }

    var javaProgress = document.getElementById("java-bar");
    if (javaProgress) {
        RPGUI.set_value(javaProgress, 0.6);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'java-bar' not found.");
    }
    var jsProgress = document.getElementById("js-bar");
    if (jsProgress) {
        RPGUI.set_value(jsProgress, 0.8);
        console.log(RPGUI);
    } else {
        console.error("Element with ID 'js-bar' not found.");
    }

// Projects


const projects = [
    {
        name: "To-Do List",
        category: "js",
        image: "./images/todo.jpg",
        description: "A simple to-do list app using JavaScript and LocalStorage.",
        liveLink: "https://example.com/todo",
        githubLink: "https://github.com/username/todo"
    },



        {
            name: "Restaurant Page",
            category: "js",
            image: "./images/projects/BurgerDuke.png",
            description: "A single page website using javascript modules,npm and webpack. The content is rendered dynamically and each element is a javascript object",
            liveLink: "https://diolemos.github.io/Restaurant/",
            githubLink: "https://github.com/Diolemos/Restaurant?tab=readme-ov-file"
        },


    {
        name: "Food Order App",
        category: "react",
        image: "./images/projects/gostosuras-ss.png",
        description: "A food order app built with react.",
        liveLink: "https://gostosuras-food-order-react-app.netlify.app/",
        githubLink: "https://github.com/Diolemos/food-order-app"
    },
    {
        name: "Portfolio",
        category: "html",
        image: "./images/portfolio.jpg",
        description: "My personal portfolio website built with HTML, CSS, and JavaScript.",
        liveLink: "https://example.com/portfolio",
        githubLink: "https://github.com/username/portfolio"
    },
    {
        name: "AI Chatbot",
        category: "python",
        image: "./images/chatbot.jpg",
        description: "A chatbot powered by Python and GPT-3 API.",
        liveLink: "https://example.com/chatbot",
        githubLink: "https://github.com/username/chatbot"
    },
    {
        name: "blackjack",
        category: "python",
        image: "./images/projects/blackjack.png",
        description: "A text game. lorem ipsum dolor sit amet ",
        liveLink: "https://replit.com/@pedrodio/Black-jack?v=1",
        githubLink: "https://github.com/Diolemos/blackjack/tree/main"
    },


    
    {
        name: "E-commerce Platform",
        category: "java",
        image: "./images/ecommerce.jpg",
        description: "An e-commerce backend built with Java and Spring Boot.",
        liveLink: "https://example.com/ecommerce",
        githubLink: "https://github.com/username/ecommerce"
    }
];

const dropdown = document.querySelector(".rpgui-dropdown");
const projectContainer = document.querySelector(".projects-container");

function displayProjects(selectedCategory) {
    // Clear existing projects
    projectContainer.innerHTML = "";

    // Filter projects based on category
    const filteredProjects = selectedCategory === "all" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    // Generate project cards
    filteredProjects.forEach(project => {
        const projectCard = document.createElement("li");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <div class="card">
                <img src="${project.image}" alt="${project.name}" class="project-image">
                <div class="project-details">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.liveLink}" target="_blank" ><button class="rpgui-button">Live Demo</button></a>
                        <a href="${project.githubLink}" target="_blank" ><button class="rpgui-button">GitHub</button></a>
                    </div>
                </div>
            </div>
        `;
        projectContainer.appendChild(projectCard);
    });
}

// Initial load (show all projects)
displayProjects("all");

// Listen for dropdown changes
dropdown.addEventListener("change", (event) => {
    displayProjects(event.target.value);
});




}