// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Prevent the default link behavior
    e.preventDefault();

    // Get the target element's id from the link's href attribute
    const targetId = this.getAttribute('href').substring(1);

    // Find the target element by its id
    const targetElement = document.getElementById(targetId);

    // Check if the target element exists
    if (targetElement) {
      // Calculate the height of the fixed navbar
      const navbarHeight = document.querySelector('nav').offsetHeight;

      // Scroll to the target element with smooth behavior, adjusting for the navbar height
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  });
});