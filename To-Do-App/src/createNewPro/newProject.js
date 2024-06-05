const plusButton = document.querySelector(".plus-symbol");
const newProjectList = document.querySelector(".new-project");
const newList = document.querySelector(".my-lists");

let tasks = []; // Array to store tasks

function createProject() {
    if (plusButton) {
        plusButton.addEventListener('click', function(e) {
            // Prevent the outside click handler from immediately triggering
            e.stopPropagation();

            newProjectList.innerHTML = `
                <div class="overlay active">
                    <div class="pop-up-content">
                        <input type="text" id="getInput" placeholder="Add A Project To The List">
                        <button class="continue">Continue</button>
                    </div>
                </div>`;

            // Add event listener for outside click
            setTimeout(() => {
                document.addEventListener('click', handleOutsideClick);
            }, 0);

            // Add event listener for the close button
            const closeMark = document.querySelector(".close-mark");
            if (closeMark) {
                closeMark.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent the outside click handler from triggering
                    hidePopup();
                });
            }

            // Add event listener for continue button
            const continueButton = document.querySelector(".continue");
            if (continueButton) {
                continueButton.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent the outside click handler from triggering
                    console.log("continue button clicked");
                    const getInput = document.getElementById('getInput');
                    const taskName = getInput.value;

                    // Create a new task object
                    const task = {
                        id: tasks.length + 1, // Unique ID for the task
                        name: taskName
                    };

                    // Add the new task to the tasks array
                    tasks.push(task);

                    // Render the tasks list
                    renderTasks();

                    // Hide the popup after adding the task
                    hidePopup();
                });
            }
        });
    } else {
        console.log("Plus button not found");
    }
}

// Function to render tasks
function renderTasks() {
    newList.innerHTML = ''; // Clear the current list

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div class="new-project-list">${task.name}</div>`;
        newList.appendChild(taskItem);
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

export default createProject;

