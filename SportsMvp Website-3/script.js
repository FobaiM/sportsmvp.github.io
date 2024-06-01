// Selecting the menu icon and the navigation list
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Adding a click event listener to the menu icon
menu.onclick = () => {
    // Toggling the 'bx-x' class on the menu icon
    menu.classList.toggle('bx-x');
    
    // Toggling the 'open' class on the navigation list
    navlist.classList.toggle('open');
};

// Using the ScrollReveal library to apply reveal effects
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

// Applying reveal effects to specific elements
sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector(".navlist");
  
    menuIcon.addEventListener("click", function () {
      navList.classList.toggle("open");
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get the last modified date of the current page
    var lastModifiedDate = document.lastModified;
  
    // Display the last modified date in a specific element
    var lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
      lastModifiedElement.textContent = lastModifiedDate;
    }
  });