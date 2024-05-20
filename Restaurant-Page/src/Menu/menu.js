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

    const firsColumnDiv = document.createElement('div');
    firsColumnDiv.classList.add('first-column');
    menuTwoItemsDiv.appendChild(firsColumnDiv);

    const secondColumnDiv = document.createElement('div');
    secondColumnDiv.classList.add('second-column');
    menuTwoItemsDiv.appendChild(secondColumnDiv);

    const thirdColumnDiv = document.createElement('div');
    thirdColumnDiv.classList.add('third-column');
    menuTwoItemsDiv.appendChild(thirdColumnDiv);

    //First menu text content

    //First item in cutom bowl
    const firstTextContent = document.createElement('div');
    firstTextContent.classList.add('first-text-content');
    firstTextContent.innerHTML = ` 
        <h2 class = "custom-bowl-heading-one">1. CHOOSE BASE </h2>
        <ul class = "ul-cutom-bowl-one">
            <li class = "list-items-one">Multigrain Rice <span> w/ Scallion </span></li>
            <li class = "list-items-one">Green Salad <span>w/ Sunflower Seed</span></li>
            <li class = "list-items-one">Paprika Fries <span>w/ Scallion</span></li>
        </ul>`;
    firsColumnDiv.appendChild(firstTextContent);

    //second item in custom bowl
    
    const secondTextContent = document.createElement('div');
    secondTextContent.classList.add('second-text-content');
    secondTextContent.innerHTML = ` 
        <h2 class = "custom-bowl-heading-two">2. CHOOSE PROTEIN</h2>
        <ul class = "ul-cutom-bowl-two">
            <li class = "list-items-two">BUTTERMILK CRISPY CHICKEN <span> $17.95 </span> </li>
            <ul>
                <li class = "list-items-two-inside">- Original</li>
                <li class = "list-items-two-inside"> - Soy Vinaigrette <span>+$1.00</span></li>
                <li class = "list-items-two-inside">- Chili Peppercorn <span>+$2.00</span></li>
            </ul>
            </li>
            <li class = "list-items-two">BULGOGI BEEF DF <span>$18.95</span></li>
            <li class = "list-items-two">SPICY PORK KIMCHI DF <span>$17.95</span></li>
            <li class = "list-items-two">TOFU CAULIFLOWER VG <span>$17.75</span></li>
        </ul>`;
    firsColumnDiv.appendChild(secondTextContent);

    //middle section of the custom bowl menu section

    secondColumnDiv.innerHTML = ` 

        <h2 class = "middle-div-heading-1">CHOOSE TOSS-INS (UP TO 3)</h2>
            <p>Select your choice of toss-ins. You can choose up to 3.</p>
        <ul>
            <li> GREEN SALAD, CORN, EDAMAME, PICKLED CARROT, PICKLED RED ONION, PICKLED PEPPER, PICKLED RED CABBAGE, RED RADISH, SCALLION, SUNFLOWER SEED, CRISPY SHALLOT, COCONUT FLAKE </li>
        </ul>
        <h3>OR</h3>
        <h2>CHOOSE SAUCES (TWO SAUCES 1oz OR ONE DRESSING 2oz)</h2>
        <ul>
            <li>VEGAN RANCH VG GF <span>($0.50)</span></li>
            <li>GARLIC RANCH GF <span>($0.50)</span></li>
            <li>ORIENTAL VINAIGRETTE VG <span>($0.50)</span></li>
            <li>SWEET BEET VG GF <span>($0.50)</span></li>
            <li>SWEET CHILI VG <span>($0.50)</span></li>
            <li>CHILI CHILI VG <span>($0.50)</span></li>
        </ul>
    `;    
    
}


export default menuPage;