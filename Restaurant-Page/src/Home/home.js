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
    
    //Adding data into the second container

    const secondContainerLettersDiv = document.createElement('div');
    secondContainerLettersDiv.classList.add('second-Container-LettersDiv');
    secondContainer.appendChild(secondContainerLettersDiv);
    const secondContainerLetters = document.createElement('h1');
    const title = document.createElement('h1');
    const subheader = document.createElement('h3');
    title.textContent = 'KOREAN BOWL & BOA';
    title.classList.add('second-div-title');
    subheader.textContent = 'We cook up bright, bold, and unique korean bowls. And we serve it all hot & fast';
    secondContainerLettersDiv.append(title);
    secondContainerLettersDiv.appendChild(subheader);

    //Creating another container within the second container for the pics carousal

    const secondContainerPicDiv = document.createElement('div');
    secondContainerPicDiv.classList.add('second-Container-PicDiv');
    secondContainer.appendChild(secondContainerPicDiv);

    //Adding 6 containers for pics carousal 

    const firstPic = document.createElement('div');
    firstPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(firstPic);
    const img1 = document.createElement('img');
    img1.classList.add('carousal-Img');
    img1.setAttribute('src', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    firstPic.appendChild(img1);
    
    const secondPic = document.createElement('div');
    secondPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(secondPic);
    const thirdPic = document.createElement('div');
    thirdPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(thirdPic);
    const fourthPic = document.createElement('div');
    fourthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(fourthPic);
    const fifthPic = document.createElement('div');
    fifthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(fifthPic);
    const sixthPic = document.createElement('div');
    sixthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(sixthPic);

}

export {homePage}