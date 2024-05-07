import coverImg from '../Assets/cover-pic.jpg';

function homePage() {
    //Main div for the whole homepage
    
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');
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

    document.getElementById('content').appendChild(outerDiv);

    //Div for within the div

    const firstContainerImgDiv = document.createElement('div');
    firstContainerImgDiv.classList.add('first-Container-ImgDiv');
    firstContainer.appendChild(firstContainerImgDiv);

    //Adding data into the first container

    const firstContainerImage = document.createElement('img');
    firstContainerImage.classList.add('first-Container-Image');
    firstContainerImage.setAttribute('src', coverImg);
    firstContainerImgDiv.appendChild(firstContainerImage);
    
    
}

export {homePage}