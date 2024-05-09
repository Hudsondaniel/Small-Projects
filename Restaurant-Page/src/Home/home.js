import coverImg from '../Assets/cover-pic.jpg';
import pic1 from '../Assets/Carousal-Img/pic1.jpg';
import pic2 from '../Assets/Carousal-Img/pic2.jpg';
import pic3 from '../Assets/Carousal-Img/pic3.jpg';
import pic4 from '../Assets/Carousal-Img/pic4.jpg';
import pic5 from '../Assets/Carousal-Img/pic5.jpg';
import pic6 from '../Assets/Carousal-Img/pic6.jpg'; 
import menuPic from '../Assets/Menu-pic.jpg';

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

    //Adding 6 containers for pics carousal  -- This code could very well be done with a for loop but eh. Its fine.

    const firstPic = document.createElement('div');
    firstPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(firstPic);
    const img1 = document.createElement('img');
    img1.classList.add('carousal-Img');
    img1.setAttribute('src', pic1);
    firstPic.appendChild(img1);
    
    const secondPic = document.createElement('div');
    secondPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(secondPic);
    const img2 = document.createElement('img');
    img2.classList.add('carousal-Img');
    img2.setAttribute('src', pic2);
    secondPic.appendChild(img2);

    const thirdPic = document.createElement('div');
    thirdPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(thirdPic);
    const img3 = document.createElement('img');
    img3.classList.add('carousal-Img');
    img3.setAttribute('src', pic3);
    thirdPic.appendChild(img3);

    const fourthPic = document.createElement('div');
    fourthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(fourthPic);
    const img4 = document.createElement('img');
    img4.classList.add('carousal-Img');
    img4.setAttribute('src', pic4);
    fourthPic.appendChild(img4);

    const fifthPic = document.createElement('div');
    fifthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(fifthPic);
    const img5 = document.createElement('img');
    img5.classList.add('carousal-Img');
    img5.setAttribute('src', pic5);
    fifthPic.appendChild(img5);

    const sixthPic = document.createElement('div');
    sixthPic.classList.add('carousal-Pic');
    secondContainerPicDiv.appendChild(sixthPic);
    const img6 = document.createElement('img');
    img6.classList.add('carousal-Img');
    img6.setAttribute('src', pic6);
    sixthPic.appendChild(img6);

    //The last container of homepage

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-Container');
    thirdContainer.appendChild(menuContainer);
    const menuPic = document.createElement('img');
    menuPic.classList.add('menu-Pic');
    menuPic.setAttribute('src', '../Assets/menu-pic.jpg');
    menuContainer.appendChild(menuPic);

    const menuPicContainer = document.createElement('div');
    menuPicContainer.classList.add('menu-Pic-Container');
    thirdContainer.appendChild(menuPicContainer);


}

export {homePage}