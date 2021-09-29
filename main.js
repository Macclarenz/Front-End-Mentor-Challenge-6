let navSwitch = true;
let navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-list a');

let navToggle = addEventListener('click', () => {
    navList.classList.toggle('open');
    navLinks.forEach(navLinks => {
        navLinks.classList.toggle('link-visible');
    })
})

var x = window.matchMedia("(min-width: 800px)");

function navDisplay (x) {
    if (x.matches) {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.opacity = '1';
        }
    } else {
      
    }
}

navDisplay(x);
x.addEventListener(navDisplay);



