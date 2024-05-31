const plusButton = document.querySelector(".plus-symbol");
const newProjectList = document.querySelector(".new-project");

function createProject() {
    if (plusButton) {
        plusButton.addEventListener('click', function(e) {
            // Prevent the outside click handler from immediately triggering
            e.stopPropagation();

            newProjectList.innerHTML = `
                <div class="overlay active">
                    <div class="pop-up-content">
                        <button class="close-mark">X</button>
                        <input type="text" placeholder="Add a new project">
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
        });
    } else {
        console.log("Plus button not found");
    }
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

export default createProject;
