// If you have any JavaScript functionality or animations,
// you can include them here. For example:

// Example: Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for nav height
        behavior: 'smooth'
      });
    }
  });
});
