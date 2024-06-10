import trashIcon from '../../Assets/Icons/delete-icon.svg';
import finishIcon from '../../Assets/Icons/check-icon.svg';
import { renderTasks, addTaskToProject } from './taskManager.js';

const plusButton = document.querySelector(".plus-symbol");
const newProjectList = document.querySelector(".new-project");
const newList = document.querySelector(".my-lists");

let projects = []; // Array to store projects, each with its own tasks

function createProject() {
    if (plusButton) {
        plusButton.addEventListener('click', function(e) {
            e.stopPropagation();

            newProjectList.innerHTML = `
                <div class="overlay active">
                    <div class="pop-up-content">
                        <input type="text" id="getInput" placeholder="Add A Project To The List">
                        <button class="continue">Continue</button>
                    </div>
                </div>`;

            setTimeout(() => {
                document.addEventListener('click', handleOutsideClick);
            }, 0);

            const closeMark = document.querySelector(".close-mark");
            if (closeMark) {
                closeMark.addEventListener('click', function(e) {
                    e.stopPropagation();
                    hidePopup();
                });
            }

            const continueButton = document.querySelector(".continue");
            if (continueButton) {
                continueButton.addEventListener('click', function(e) {
                    e.stopPropagation();
                    console.log("continue button clicked");
                    const getInput = document.getElementById('getInput');
                    const projectName = getInput.value;

                    // Create a new project object
                    const project = {
                        id: projects.length + 1, // Unique ID for the project
                        name: projectName,
                        tasks: [] // Initialize with an empty tasks array
                    };

                    // Add the new project to the projects array
                    projects.push(project);

                    // Render the projects list
                    renderProjects();

                    // Hide the popup after adding the project
                    hidePopup();
                });
            }
        });
    } else {
        console.log("Plus button not found");
    }
}

function renderProjects() {
    newList.innerHTML = ''; // Clear the current list

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `
            <div class="project">
                <h3>${project.name}</h3>
                <ul class="task-list" data-project-id="${project.id}"></ul>
                <button class="add-task-button" data-project-id="${project.id}">Add Task</button>
            </div>`;
        newList.appendChild(projectItem);
    });

    // Add event listeners for the new task buttons
    document.querySelectorAll('.add-task-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const projectId = e.target.getAttribute('data-project-id');
            addTaskToProject(projectId);
        });
    });
}

// Function to handle clicks outside the popup
function handleOutsideClick(event) {
    const clickedElement = event.target;
    const popup = document.querySelector('.overlay.active');

    // Check if the clicked element is not part of the popup
    if (popup && !clickedElement.closest('.pop-up-content')) {
        hidePopup();
    }
}

// Function to hide the popup
function hidePopup() {
    const popup = document.querySelector('.overlay.active');
    if (popup) {
        popup.classList.remove('active');
        popup.remove();
    }
    document.removeEventListener('click', handleOutsideClick); // Remove event listener after closing
    console.log("Popup hidden");
}

// Initialize the createProject function
createProject();

export { createProject, renderProjects, projects };

