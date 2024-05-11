import { homePage } from "./Home/home";
import './style.css';
import './home/homeStyle.css';

homePage();

const menuPage = document.querySelector('.menu-button');
const homePageButton = document.querySelector('.Home-button');
const contentDiv = document.getElementById('content');

menuPage.addEventListener('click', () => {
    contentDiv.innerHTML = '';
});

homePageButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    const homePageContent = homePage();
    contentDiv.innerHTML = homePageContent;
})


