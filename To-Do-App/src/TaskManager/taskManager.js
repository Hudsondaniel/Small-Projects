import { createProject, renderProjects, handleOutsideClick, hidePopup, projects } from "../createNewPro/newProject";

function createDivForTasks(){
    const createDiv = document.querySelector('.new-project-list');
    createDiv.classList.add('new-task-div');
    createDiv.addEventListener('click', function(e) {
        console.log("Div clicked: ");
    });
}
export { createDivForTasks };
