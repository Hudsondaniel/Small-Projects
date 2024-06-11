import { renderProjects, handleOutsideClick, hidePopup, projects } from "../createNewPro/newProject";



const taskListDetails = document.querySelector(".task-list")

function renderTasks(projectId){
    const project = projects.find(p => p.id === projectId);
    if(!project) return;
    console.log(taskListDetails);
}
export { renderTasks };
