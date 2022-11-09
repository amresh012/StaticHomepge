const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

//dynamic cpyright year
const year = document.querySelector("#current-year")

year.innerHTML = new Date().getFullYear()

//validation function

//chatbot
// type writer effect js
let i = 0;
let data = [
    'Affordable',
    'Efficient',

]
let loop = 0;
let typingspeed = 175;
let deletespeed = 50;
let stringIsFull = false;
let stringIsempty = true;

// function start here
const typewriter = () => {
    loop = loop % data.length
    let text = data[loop];

    if (i <= text.length && !stringIsFull) {
        document.getElementById('demo').innerHTML = text.substring(0, i);
        i++;

        if (i == text.length + 1) {

        }
    }
}
