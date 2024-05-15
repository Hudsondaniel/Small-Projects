import './style.css';
import homePage from "./Home/home.js";
import './home/homeStyle.css';
import './Menu/menuStyle.css';
import './about/aboutStyle.css';
import aboutPage from "./about/about.js";
import logo from './Assets/Logo.png';
import menuPage from "./Menu/menu.js";

const logoImg = document.querySelector('.logo-img');
logoImg.src = logo;

const header = document.querySelector('header');
const headerNav = document.querySelector('nav');
// Remove headerNavBtns if not used

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

const content = document.querySelector('#content');

function clearElement(elementID) {
    let element = document.getElementById(elementID);
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
}

function handleHeaderNav() {
    homePage(); // Call homePage before potential clear
    homeBtn.classList.add("selected");

    const buttons = document.querySelectorAll('header nav button'); // Assuming buttons are within header nav

    buttons.forEach(button => {
        button.addEventListener('click', function() {
        clearElement('content');

        switch (button.id){
        case "home":
            console.log(`${button.id} button clicked`);
            homePage();
            homeBtn.classList.add('selected');
            menuBtn.classList.remove('selected');
            aboutBtn.classList.remove('selected');
            break;
        case "menu":
            console.log(`${button.id} button clicked`);
            menuPage(); // Use menuPage instead of menuSection
            homeBtn.classList.remove('selected');
            menuBtn.classList.add('selected');
            aboutBtn.classList.remove('selected');
            break;
        case "about":
            console.log(`${button.id} button clicked`);
            aboutPage();
            homeBtn.classList.remove('selected');
            menuBtn.classList.remove('selected');
            aboutBtn.classList.add('selected');
            break;
        }
    });
});
}

handleHeaderNav();
