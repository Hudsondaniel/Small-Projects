import './style.css';
import homePage  from "./Home/home.js";
import './home/homeStyle.css';
import './Menu/menuStyle.css';
import './about/aboutStyle.css';
import  aboutPage  from "./about/about.js"
import logo from './Assets/Logo.png';
import  menuPage  from "./Menu/menu.js";


const logoImg = document.querySelector('.logo-img')
logoImg.src = logo;

const header = document.querySelector('header');
const headerNav = document.querySelector('nav');
const headerNavBtns = document.querySelector('button');
const homeBtn = document.querySelector('.Home-button');
const menuBtn = document.querySelector('.menu-button');
const aboutBtn = document.querySelector('.about-button');

const content = document.querySelector('#content');

function clearContent() {
    while(content.hasChildNodes()) 
        content.removeChild(content.lastChild);
}

homePage();
tabListener();

function tabListener() {
    const menuPageListener = document.querySelectorAll(".menu-button");
    menuPageListener.forEach((item) => {
        item.addEventListener("click", () => {
            console.log("Menu Page Works");
            clearContent();
            menuPage();
            tabListener();
        });
    });

    const homePageListener = document.querySelectorAll(".Home-button");
    menuPageListener.forEach((item) => {
        item.addEventListener("click", () => {
            console.log("Home Page Works");
            clearContent();
            homePage();
            tabListener();
        });
    });

    const aboutPageListener = document.querySelectorAll(".about-button");
    menuPageListener.forEach((item) => {
        item.addEventListener("click", () => {
            console.log("About Page Works");
            clearContent();
            aboutPage();
            tabListener();
        });
    });
}