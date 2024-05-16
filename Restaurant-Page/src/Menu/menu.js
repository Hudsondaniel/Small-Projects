function menuPage() {

    const contentDiv = document.getElementById('content');
    contentDiv.classList.add('content-container');

    // First div for the menu
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container'); 
    contentDiv.appendChild(menuDiv);

    // Need three divs for the menu
    
    //First div for the menu

    const menuOneDiv = document.createElement('div');
    menuOneDiv.classList.add('menu-one');
    menuDiv.appendChild(menuOneDiv);

    // Menu title sec
    const menuOneTitleDiv = document.createElement('div');
    menuOneTitleDiv.classList.add('menu-one-title');
    menuOneDiv.appendChild(menuOneTitleDiv);

    const titleH1 = document.createElement('h1');
    titleH1.classList.add('menu-title-text');
    titleH1.textContent = 'SIGNATURE BOWL';
    menuOneTitleDiv.appendChild(titleH1);

    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');
    menuDiv.appendChild(menuItemsDiv);

}


export default menuPage;