// index.js

import { home } from "./home";
import { about } from "./about";
import './style.css';
import { menu } from "./menu";


document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.querySelector('.btn-home');
    const menuBtn = document.querySelector('.btn-menu');
    const aboutBtn = document.querySelector('.btn-about');
    const content = document.querySelector('#content');

    homeBtn.addEventListener("click", () => {
        // Clear existing content and display home content
        content.innerHTML = "";
        home();
        // Add the active class to the clicked button
        homeBtn.classList.add("active");
        // Remove the active class from other buttons
        menuBtn.classList.remove("active");
        aboutBtn.classList.remove("active");
    });

    menuBtn.addEventListener("click", () => {
        // Clear existing content and display home content
        content.innerHTML = "";
        menu();
        menuBtn.classList.add("active");
        // Remove the active class from other buttons
        homeBtn.classList.remove("active");
        aboutBtn.classList.remove("active");
    });

    aboutBtn.addEventListener("click", () => {
        // Clear existing content and display about content
        content.innerHTML = "";
        about();
        aboutBtn.classList.add("active");
        // Remove the active class from other buttons
        homeBtn.classList.remove("active");
        menuBtn.classList.remove("active");
    });

    // Load the home page by default
    home();
    homeBtn.classList.add("active");
});
