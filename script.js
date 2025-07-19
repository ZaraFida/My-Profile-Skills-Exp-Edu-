// Toggle icon navbar (This will be for mobile menu later, adding it now)
// Note: Hamburger menu icon HTML is not yet added, so this part won't visually work until then.
let menuIcon = document.querySelector('#menu-icon'); // Assuming you'll add an element with id="menu-icon" for the hamburger menu
let navbar = document.querySelector('.navbar');

if (menuIcon) { // Check if menuIcon exists to avoid errors
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}


// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust 150px offset for fixed header (150px is a common value, you can fine-tune it)
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the section's bounds
        if(top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links first
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' class to the nav link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });

    // Sticky navbar (makes the header stick to the top after scrolling down)
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Add 'sticky' class if scrolled more than 100px

    // Remove toggle icon and navbar when click navbar link (scroll)
    // This is for when a mobile menu might be open and the user scrolls, it closes the menu.
    if (menuIcon) { // Check if menuIcon exists
        menuIcon.classList.remove('bx-x');
    }
    navbar.classList.remove('active');
};