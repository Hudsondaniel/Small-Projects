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
    
    //First menu text content
    const itemOne = document.createElement('div');
    itemOne.classList.add('item-one');
    menuOneItemsDiv.appendChild(itemOne);
    const itemOneDishHtml = document.createElement('div');
    itemOneDishHtml.innerHTML = `
        <h2> 1. BUTTERMILK CRISPY CHICKEN RICE BOWL <span> $18.95 </span> </h2>
        <p> Multigrin Rice, Coleslaw, Pickled Red Onion, Scallion </p>
        <h4>- ORIGINAL : Garlic Ranch, Sweet Chili </h4>
        <h4>- SOY VINAIGRETTE + $ 1.00 : Sesame Seed, Garlic Ranch </h4>
        <h4>- CHILLI PEPPERCORN + $ 2.00 : Crispy Sahllot, Chilli Chilli </h4>`;
    itemOne.appendChild(itemOneDishHtml);
    
    //Second menu text content
    const itemTwo = document.createElement('div');
    itemTwo.classList.add('item-two');
    menuOneItemsDiv.appendChild(itemTwo);
    const itemTwoDishHtml = document.createElement('div');
    itemTwoDishHtml.innerHTML = `
        <h2>2. BULGOGI BEEF RICE BOWL <span> $19.95 </span></h2>
        <p>Multigrin Rice, Green Salad, Poached Egg, Smashed Potato, Pickled red cabbaage, Scallion, Crispy shallot, Garlic ranch, Sweet Chill</p>`;
    itemTwo.appendChild(itemTwoDishHtml);
    

    const itemThree = document.createElement('div');
    itemThree.classList.add('item-three');
    menuOneItemsDiv.appendChild(itemThree);
    const itemThreeDishHtml = document.createElement('div');
    itemThreeDishHtml.innerHTML = `
        <h2>3. SPICY PORK KIMCHI RICE BOWL <span> $18.95 </span></h2>
        <p>Multigrin Rice, Green Salad, Poached Egg, Smashed Potato, Pickled red cabbaage, Scallion, Crispy shallot, Garlic ranch, Sweet Chill</p>`;
    itemThree.appendChild(itemThreeDishHtml);

    const itemFour = document.createElement('div');
    itemFour.classList.add('item-four');
    menuOneItemsDiv.appendChild(itemFour);
    const itemFourDishHtml = document.createElement('div');
    itemFourDishHtml.innerHTML = `
        <h2>4. BBQ CHICKEN RICE BOWL <span> $18.95 </span></h2>
        <p>Multigrin Rice, Green Salad, Poached Egg, Smashed Potato, Pickled red cabbaage, Scallion, Crispy shallot, Garlic ranch, Sweet Chill</p>`;
    itemFour.appendChild(itemFourDishHtml);

    const firstText = document.createElement('div');
    firstText.classList.add('first-text');
    firstText.textContent = 'All bowls are customizable. Please inquire with our staff for personalized options';
    menuDiv.appendChild(firstText);

    //Second div for the menu

    const menuTwoDiv = document.createElement('div');
    menuTwoDiv.classList.add('menu-two');
    menuDiv.appendChild(menuTwoDiv);

    //Second div menu title sec
    const menuTwoTitleDiv = document.createElement('div');
    menuTwoTitleDiv.classList.add('menu-two-title');
    menuTwoDiv.appendChild(menuTwoTitleDiv);
    const titleH2 = document.createElement('h1');
    titleH2.classList.add('menu-title-text');
    titleH2.textContent = 'CUSTOM BOWL';
    menuTwoTitleDiv.appendChild(titleH2);

    //Second div for menu content
    const menuTwoItemsDiv = document.createElement('div');
    menuTwoItemsDiv.classList.add('menu-two-items');
    menuTwoDiv.appendChild(menuTwoItemsDiv);

    //Four grids to go within the menuTwoDiv

    //First menu text content
    const itemOneTwo = document.createElement('div');
    itemOneTwo.classList.add('item-one-two');
    menuTwoItemsDiv.appendChild(itemOneTwo);
    const itemOneTwoDishHtml = document.createElement('div');
    itemOneTwoDishHtml.innerHTML = `
        <h2> 1. BUTTERMILK CRISPY CHICKEN RICE BOWL <span> $18.95 </span> </h2>
        <p> Multigrin Rice, Coleslaw, Pickled Red Onion, Scallion </p>
        <h4>- ORIGINAL : Garlic Ranch, Sweet Chili </h4>
        `;
    itemOneTwo.appendChild(itemOneTwoDishHtml);
}


export default menuPage;