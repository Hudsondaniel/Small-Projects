const plusButton = document.querySelector(".plus-symbol");
const newProjectList = document.querySelector(".new-project");

function createProject(){
    plusButton.addEventListener('click', function(e){
        newProjectList.innerHTML = `
        <div class = "overlay">
            <div class = "pop-up-content">
                <input type="text" name="" id="" placeholder="Add a new project">
                <button class="continue">Continue</button>
            </div>
        </div>`;
    });
}

export default createProject;
