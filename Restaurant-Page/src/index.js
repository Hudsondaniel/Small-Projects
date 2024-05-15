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
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

const content = document.querySelector('#content');

function clearElement(elementID) {
    let  element = document.querySelector(elementID);
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function handleHeaderNav() {
    homePage();
    homeBtn.classList.add("selected");
    headerNavBtns.forEach(button => {
        
    });
    
}