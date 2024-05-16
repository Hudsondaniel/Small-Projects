function menuPage() {

    const contentDiv = document.getElementById('content');
    contentDiv.classList.add('content-container');

    // First div for the menu
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container'); // More descriptive class name
    contentDiv.appendChild(menuDiv);
  
    // Menu title section
    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.classList.add('menu-title');
    menuDiv.appendChild(menuTitleDiv);
  
    const titleH1 = document.createElement('h1');
    titleH1.classList.add('menu-title-text');
    titleH1.textContent = 'SIGNATURE BOWL';
    menuTitleDiv.appendChild(titleH1);
  
    // Menu items section (replace with your menu item creation logic)
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');
    menuDiv.appendChild(menuItemsDiv);
  
    // Here you would add logic to create elements for each menu item
    // (e.g., name, description, price, image) and append them to menuItemsDiv
  }
  

export default menuPage;