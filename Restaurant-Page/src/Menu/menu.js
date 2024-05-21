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

        <h2 class = "middle-div-heading-1">3. CHOOSE TOSS-INS (UP TO 3)</h2>
            <p class="middle-items-p">You can choose up to 3.</p>
        <ul>
            <li class= "middle-items"> GREEN SALAD, CORN, EDAMAME, PICKLED CARROT, PICKLED RED ONION</li>
            <li class= "middle-items"> PICKLED PEPPER, PICKLED RED CABBAGE, RED RADISH, SCALLION, SUNFLOWER SEED, CRISPY SHALLOT, COCONUT FLAKE </li>
        </ul>
        <h2 class = "middle-div-heading-1">4. CHOOSE SAUCES</h2>
        <ul class = "ul-cutom-bowl-two">
            <li class = "middle-bowl-list">VEGAN RANCH VG GF <span>($0.50)</span></li>
            <li class = "middle-bowl-list">GARLIC RANCH GF <span>($0.50)</span></li>
            <li class = "middle-bowl-list">ORIENTAL VINAIGRETTE VG <span>($0.50)</span></li>
            <li class = "middle-bowl-list">SWEET BEET VG GF <span>($0.50)</span></li>
            <li class = "middle-bowl-list">SWEET CHILI VG <span>($0.50)</span></li>
            <li class = "middle-bowl-list">CHILI CHILI VG <span>($0.50)</span></li>
        </ul>
    `;    

    // Third column menu content

    thirdColumnDiv.innerHTML = ` 
    <h2 class = "middle-div-heading-1">5. CHOOSE EXTRAS</h2>
    <ul class="extras-list">
        <li class = "items-list">PROTEIN 100g <span class="price">$5.00</span></li>
        <li class = "items-list">COLESLAW 6oz <span class="price">$4.00</span></li>
        <li class = "items-list">CABBAGE KIMCHI VG 4oz <span class="price">$3.00</span></li>
        <li class = "items-list">PICKLES 4oz <span class="price">$3.00</span></li>
        <li class = "items-list">Carrot/Pepper/Red Onion/Red Cabbage</li>
        <li class = "items-list">MOZZA & CHEDDAR 4oz <span class="price">$3.00</span></li>
        <li class = "items-list">POACHED EGG <span class="price">$2.00</span></li>
        <li class = "items-list">SMASHED POTATO <span class="price">$2.00</span></li>
        <li class = "items-list">EDAMAME HUMMUS <span class="price">$2.00</span></li>
        <li class = "items-list">SAUCE or DRESSING 2oz <span class="price">$2.00</span></li>
        <li class = "items-list">PAPER BAG <span class="price">$0.15</span></li>
    </ul>`;

    //Third div for the menu
    const secondText = document.createElement('div');
    secondText.classList.add('second-text');
    secondText.textContent = 'Having hard time to choose? Experience the best of our flavors with the signature Bowl menu, a curated delight for those seeking our most popular and beloved combination.' ;
    menuDiv.appendChild(secondText);

    //Fourth div for the menu
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outer-div-fouth-container-menu');
    menuDiv.appendChild(outerDiv);
    const firstDivFourth = document.createElement('div');
    firstDivFourth.classList.add('first-div-fourth');
    outerDiv.appendChild(firstDivFourth);
    const secondDivFourth = document.createElement('div');
    secondDivFourth.classList.add('second-div-fourth');
    outerDiv.appendChild(secondDivFourth);

    //Title for the two divs
    const firstInnerDiv = document.createElement('h1');
    firstInnerDiv.classList.add('first-inner-div');
    firstDivFourth.appendChild(firstInnerDiv);
    const firstInnerDivtText = document.createElement('h1');
    firstInnerDivtText.classList.add('first-inner-div-text');
    firstInnerDiv.appendChild(firstInnerDivtText);
    firstInnerDivtText.textContent = 'BAO';

    //Title for second div
    const secondInnerDiv = document.createElement('h1');
    secondInnerDiv.classList.add('second-inner-div');
    secondDivFourth.appendChild(secondInnerDiv);
    const secondInnerDivtText = document.createElement('h1');
    secondInnerDivtText.classList.add('second-inner-div-text');
    secondInnerDiv.appendChild(secondInnerDivtText);
    secondInnerDivtText.textContent = 'SIDE';

    //Second container of the first div fourth
    const secondInnerDivBao = document.createElement('div');
    secondInnerDivBao.classList.add('second-inner-div-bao');
    firstDivFourth.appendChild(secondInnerDivBao);
    secondInnerDivBao.innerHTML = `
    <p class="first-p-bao">Steamed Bun (Flour/ Whole Wheat <span>+$0.50)</span></p>
    <h2 class="bao">BUTTERMILK CRISPY CHICKEN <span>$7.25</span></h2>
    <p class="bao-in">Pickled Red Onion, Scallion, Sweet Chilli</p>
    <h3 class="bao-ingredients-bold">(Original / Soy vinaigrette +0.50 / Chili Peppercorn +$1.00)</h3>
    <h2 class="bao">BULGOGI BEEF <span>$7.50</span></h2>
    <p class="bao-in">Pickled Red Cabbage, Scallion, Garlic Ranch</p>
    <h2 class="bao">SPICY PORK KIMCHI <span>$7.25</span></h2>
    <p class="bao-in">Pickled Red Onion, Scallion, Sweet Chilli</p>
    <h2 class="bao">TOFU CAULIFLOWER <span> $6.95 </span></h2>
    <p class="bao-in">Pickled Carrot, Scallion, Vegan Ranch</p>
    <h2 class="bao-special">FAOURITE BAO COMBO: $1.00 OFF</h2>
    <ul class="bao-combo">
        <li class="bao-combo-items">BUTTERMILK CRISPY CHICKEN BAO + PAPRIKA FRIES</li>
        <li class="bao-combo-items">BULGOGI BEEF BAO + WONTON SOUP</li>
        <li class="bao-combo-items">SPICY PORK KIMCHI BAO + CORN RIB</li>
        <li class="bao-combo-items">TOFU CAULIFLOWER BAO + SMASHED POTATO</li>
    </ul>`;

    //Side menu implementation
    const firstInnerDivSide = document.createElement('div');
    firstInnerDivSide.classList.add('first-inner-div-side');
    secondDivFourth.appendChild(firstInnerDivSide);
    firstInnerDivSide.innerHTML = `
    <h2 class="side">PAPRIKA FRIES <span>$6.00</span></h2>
    <p class="bao-in">Paprika Salt, Dried Seaweed, Garlic, Ranch</p>
    <h2 class="bao">SMASHED POTATO <span>$7.00</span></h2>
    <p class="bao-in">Paprika Salt, Dried Seaweed</p>
    <h2 class="bao">CORN RIB<span>$8.00</span></h2>
    <p class="bao-in">Paprika Salt, Dried Seaweed, Coconut Flake</p>
    <h2 class="bao">TOFU CAULIFLOWER BITE <span>$13.00</span></h2>
    <p class="bao-in">Edamame Hummus, Coconut Flake, Crispy shallot, Scallion</p>
    <h2 class="bao">BUTTERMIL CRISPY CHICKEN NUGGET <span>$15.00</span></h2>
    <p class="bao-in">Scallion, Sweet Chilli</p>`;

    const secondInnerDivSide = document.createElement('div');
    secondInnerDivSide.classList.add('second-inner-div-side');
    secondDivFourth.appendChild(secondInnerDivSide);
    const secondInnerDivSideOne = document.createElement('div');
    secondInnerDivSideOne.classList.add('second-inner-div-side-one');
    secondInnerDivSide.appendChild(secondInnerDivSideOne);
    const secondInnerDivSideTwo = document.createElement('div');
    secondInnerDivSideTwo.classList.add('second-inner-div-side-two');
    secondInnerDivSide.appendChild(secondInnerDivSideTwo);

    const secondInnerDivSideHeading = document.createElement('h1');
    secondInnerDivSideHeading.classList.add('second-inner-div-side-heading');
    secondInnerDivSideOne.appendChild(secondInnerDivSideHeading);
    secondInnerDivSideHeading.textContent = 'DRINKS';
    
    const htmlDrinks = document.createElement('div');
    htmlDrinks.classList.add('html-drinks');
    secondInnerDivSideTwo.appendChild(htmlDrinks);
    htmlDrinks.innerHTML = ` 
    <ul class="drinks">
        <li class="drinks-items1">BUTTERMILK CRISPY CHICKEN BAO + PAPRIKA FRIES</li>
        <li class="drinks-items">BULGOGI BEEF BAO + WONTON SOUP</li>
        <li class="drinks-items">SPICY PORK KIMCHI BAO + CORN RIB</li>
        <li class="drinks-items">TOFU CAULIFLOWER BAO + SMASHED POTATO</li>
    </ul>
    `;

}


export default menuPage;