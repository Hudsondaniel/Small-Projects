import { createProject, renderProjects, handleOutsideClick, hidePopup, projects } from "../createNewPro/newProject";
import addIcon from "../../Assets/Icons/Add-Icon.svg"


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
                <li class = "unique-Task" id="task-${task.id}">
                    <input type="radio" name="radio-button" class="task-radio">
                    <span>${task.name}</span>
                    <button class="delete-task" data-task-id="${task.id}">Delete</button>
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
            ${task.name}`;
        });
    });

    //Function to delete a task
    const deleteTaskButtons = document.querySelectorAll('.delete-task');
    deleteTaskButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const taskId = e.target.getAttribute('data-task-id');
            project.tasks = project.tasks.filter(task => task.id != taskId);
            renderTasks(projectId); // Re-render tasks
        });
    });

    
}
export { renderTasks };
