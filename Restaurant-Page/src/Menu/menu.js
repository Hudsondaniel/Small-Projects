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

    // First div Menu title sec
    const menuOneTitleDiv = document.createElement('div');
    menuOneTitleDiv.classList.add('menu-one-title');
    menuOneDiv.appendChild(menuOneTitleDiv);
    const titleH1 = document.createElement('h1');
    titleH1.classList.add('menu-title-text');
    titleH1.textContent = 'SIGNATURE BOWL';
    menuOneTitleDiv.appendChild(titleH1);

    //Second div for menu content
    const menuOneItemsDiv = document.createElement('div');
    menuOneItemsDiv.classList.add('menu-one-items');
    menuOneDiv.appendChild(menuOneItemsDiv);

    //Four grids to go within the menuOneDiv

    const itemOne = document.createElement('div');
    itemOne.classList.add('item-one');
    menuOneItemsDiv.appendChild(itemOne);

    //First menu text content
    const itemOneDishName = document.createElement('h2');
    itemOneDishName.classList.add('item-one-dish-name');
    itemOneDishName.textContent = '1. BUTTERMILK CRISPY CHICKEN RICE BOWL $18.95';
    itemOne.appendChild(itemOneDishName);


    const itemTwo = document.createElement('div');
    itemTwo.classList.add('item-two');
    menuOneItemsDiv.appendChild(itemTwo);

    const itemThree = document.createElement('div');
    itemThree.classList.add('item-three');
    menuOneItemsDiv.appendChild(itemThree);

    const itemFour = document.createElement('div');
    itemFour.classList.add('item-four');
    menuOneItemsDiv.appendChild(itemFour);


}


export default menuPage;