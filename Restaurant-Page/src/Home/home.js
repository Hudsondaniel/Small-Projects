


function homePage() {
    const outerDiv = document.createElement('div');
    OuterDiv.classList.add('outerDiv');
    const firstContainer = document.createElement('div');
    firstContainer.classList.add('first-Container');
    const secondContainer = document.createElement('div');
    secondContainer.classList.add('second-Container');
    const thirdContainer = document.createElement('div');
    thirdContainer.classList.add('third-Container');
    const fourthContainer = document.createElement('div');
    fourthContainer.classList.add('fourth-Container');
    const fifthContainer = document.createElement('div');
    fifthContainer.classList.add('fifth-Container');

    //Implementing five containers within the outerdiv

    outerDiv.appendChild(firstContainer);
    outerDiv.appendChild(secondContainer);
    outerDiv.appendChild(thirdContainer);
    outerDiv.appendChild(fourthContainer);
    outerDiv.appendChild(fifthContainer);

    document.getElementById('contents').appendChild(outerDiv);
}

export {homePage}