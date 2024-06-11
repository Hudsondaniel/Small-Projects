import { renderProjects, handleOutsideClick, hidePopup, projects } from "../createNewPro/newProject";



const taskList = document.querySelector(".task-list")

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
            ${project.tasks.map(task => `<li>${task.name}</li>`).join('')}
        </ul>
        <input type="text" id="taskInput" placeholder="Add a new task">
        <button class="add-task">Add Task</button>
    </div>
`;

    const addTaskButton = taskList.querySelector('.add-task');
    const taskInput = taskList.querySelector('#taskInput');

    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value;
        if (taskName.trim()) {
            project.tasks.push({ name: taskName });
            renderTasks(projectId); // Re-render tasks
        }
    });
    
}
export { renderTasks };
