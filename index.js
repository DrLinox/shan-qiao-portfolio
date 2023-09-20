const navSkills = document.getElementsByClassName("navigation-skills");
const navDes = document.getElementsByClassName("skills-des");
const loaderContainer = document.querySelector(".loader-container");
const content = document.querySelector(".full-page");
const portfolioImg = document.querySelectorAll(".portfolio-card");

// Simulate loading and hide content
function showLoader() {
  loaderContainer.style.display = "flex";

  setTimeout(() => {
    loaderContainer.style.display = "none";
    document.querySelector("html").style.overflowY = "scroll";
    document.querySelector(".navbar").classList.add("animate__fadeIn");
    document.querySelector("h1").classList.add("animate__fadeInDown");
    document.querySelector("h2").classList.add("animate__fadeInDown");
    document.querySelector(".logo").classList.add("animate__fadeInDown");
  }, 1000); // Change this delay to match your desired duration
}

// Call the function when the page loads
window.onload = showLoader;

function opentab(tabname) {
  for (nav of navSkills) {
    nav.classList.remove("focus");
  }
  for (des of navDes) {
    des.classList.remove("active-des");
  }
  event.currentTarget.classList.add("focus");
  document.getElementById(tabname).classList.add("active-des");
}

var scrollToTopButton = document.getElementById("Home-btn");

// Show the button when the user has scrolled down a bit
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling behavior
  });
});

const isDisplay = document.querySelector(".active-des");
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    isDisplay.style.opacity = "100";
    isDisplay.classList.add(`animate__fadeInUp`);
  } else if (window.scrollY < 600) {
    isDisplay.style.opacity = "0";
    isDisplay.classList.remove(`animate__fadeInUp`);
  }
});
