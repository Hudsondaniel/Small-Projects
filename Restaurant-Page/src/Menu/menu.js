
function menuPage(){
    
    const mainDiv = document.getElementById('content');

// First div for menu
const menuDiv = document.createElement('div'); // Clearer name for the div
menuDiv.classList.add('first-Div');
mainDiv.appendChild(menuDiv);

// Two more divs for menu components (assuming you need them both)
const menuTitleDiv = document.createElement('div');
menuDiv.appendChild(menuTitleDiv);

const menuContentDiv = document.createElement('div'); // Placeholder, adjust name as needed
menuDiv.appendChild(menuContentDiv);

const titleFirstDiv = document.createElement('h1');
titleFirstDiv.classList.add('title-First-Div');
titleFirstDiv.textContent = 'SIGNATURE BOWL';
menuTitleDiv.appendChild(titleFirstDiv);

// Add content to menuContentDiv if needed



}

export {menuPage};