const toggle = document.querySelector('#toggle-icon');
const sections = document.querySelectorAll("section");
const navItem = document.querySelectorAll(".nav-item");
const header = document.querySelector("header");

const nav = document.querySelector('#nav-links');
const toggleIcon = toggle.querySelector('i');

toggle.addEventListener('click', function () {
  nav.classList.toggle('nav-open'); // Toggle class for smooth display

  // Change icon on toggle
  if (toggleIcon.classList.contains('fa-bars')) {
      toggleIcon.classList.replace('fa-bars', 'fa-times'); // Show close icon
  } else {
      toggleIcon.classList.replace('fa-times', 'fa-bars'); // Revert to hamburger icon
  }
});

function setActiveNav() {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  navItem.forEach(link => link.classList.remove("active"));
  navItem[index].classList.add("active");


}
window.addEventListener("scroll", setActiveNav);


// Shrink header on scroll
function handleScroll() {
  if (window.scrollY > 50) {
      header.classList.add("shrink"); // Add shrink class
  } else {
      header.classList.remove("shrink"); // Remove shrink class
  }
}

window.addEventListener("scroll", () => {
  setActiveNav();
  handleScroll(); // Check for scroll to shrink header
});


//Yow Another user appear
  







