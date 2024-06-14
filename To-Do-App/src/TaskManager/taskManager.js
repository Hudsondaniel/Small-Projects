import { createProject, renderProjects, handleOutsideClick, hidePopup, projects } from "../createNewPro/newProject";
import addIcon from "../../Assets/Icons/Add-Icon.svg"
import bellIcon from "../../Assets/Icons/Bell-icon.svg"
import notesIcon from "../../Assets/Icons/notes-icon.svg"
import tagIcon from "../../Assets/Icons/Tag-icon.svg"


const taskList = document.querySelector(".task-list")
const taskInnerList = document.querySelector("#task-details");

function renderTasks(projectId){
    const project = projects.find(p => p.id === projectId);
    if(!project) 
    {
        console.log("Project not found");
        return;
    }
    taskList.innerHTML = `
    <div class="task-container">
        <h2 class = "project-name">${project.name}</h2>
        <ul class="tasks">
            ${project.tasks.map(task => `
                <li class="unique-Task" id="task-${task.id}">
                    <input type="radio" name="radio-button" class="task-radio" data-task-id="${task.id}">
                    <span>
                        <div class="task-name">${task.name}</div>
                    </span>
                </li>`).join('')}
        </ul>
        <div class = "input-button">
            <button class="add-task"><img src="${addIcon}" alt="Add Task"></button>
            <input type="text" id="taskInput" placeholder="Add a new task">
        </div>
    </div>
`;

    const addTaskButton = taskList.querySelector('.add-task');
    const taskInput = taskList.querySelector('#taskInput');

    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value;
        if (taskName.trim()) {
            project.tasks.push(
                {name: taskName,
                id: project.tasks.length + 1,
                description: [],
                });
            renderTasks(projectId); // Re-render tasks
        }
    });
    
    //Function to add a unique container for task details
    project.tasks.forEach(task =>{
        const taskElement = document.querySelector(`#task-${task.id}`);
        taskElement.addEventListener('click', () =>{
            taskInnerList.innerHTML =`
                <div class="task-inner-div">
                    <div class="inner-title"><h1>${task.name}</h1></div>
                    <div class="icons">
                        <div class="inner-icons"><img src="${bellIcon}" alt=""><p>Remind me</p></div>
                        <div class="inner-icons"><img src="${notesIcon}" alt=""><p>Personal</p></div>
                        <div class="inner-icons"><img src="${tagIcon}" alt=""><p>Tags</p></div>
                    </div>
                    <div class="inner-notes">
                        <h2>Notes</h2>
                        ${task.description.map(desc => `
                        <div>${desc.notes} - ${desc.timestamp}</div>
                        `).join('')}
                        <input type="text" id="additionalNotesInput" placeholder="Insert Your Notes">
                        <button id="addNotesButton">Add Notes</button>
                    </div>
                    <div class="inner-attachments">
                        <h2>Attachments</h2>
                        <div class="attachment-box"></div>
                    </div>
                </div>
            `;
            
        const additionalNotesInput = document.getElementById('additionalNotesInput');
        const addNotesButton = document.getElementById('addNotesButton');

        addNotesButton.addEventListener('click', () => {
            const newNote = additionalNotesInput.value.trim();
            if (newNote) {
                task.description.push({
                    notes: newNote,
                    timestamp: new Date().toISOString()
                });
                // Re-render the task details with the updated notes
                renderTasks(projectId);
            }
            console.log(task.description[0]);
        });
        });
    });

    //Function to delete a task
    const taskRadios = document.querySelectorAll('.task-radio');
    taskRadios.forEach(radio => {
        radio.addEventListener('click', (e) => {
            const taskId = e.target.getAttribute('data-task-id');
            project.tasks = project.tasks.filter(task => task.id != taskId);
            renderTasks(projectId); // Re-render tasks
        });
    });

    
}
export { renderTasks };
