const buttons = document.querySelectorAll("[data-carousel-button]"); //Taking the two carousel buttons
const navButton = document.querySelectorAll(".carousel_indicator"); //Taking all the Buttons
const slideLis = document.querySelectorAll(".slide"); //All the slide Lis

//For each buttons we do something
buttons.forEach((button) => {
  //For each button we add to it a click listener
  button.addEventListener("click", (e) => {
    //This event occurs each time we press one the two buttons
    const offset = button.dataset.carouselButton === "next" ? 1 : -1; //if [data-carousel-button] is equal to "next" return 1 other wise return -1
    const slides = document.querySelector("[data-slides]");
    const active = document.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(active) + offset;
    //newIndex is an integer that return the indexOf the active element + we verify either we are going previous or next with + offset, if we go next we add +1 to the newIndex and vice-versa
    if (newIndex < 0) {
      //if newIndex < 0 it means that we are at the first slide indexOf() = 0 and that we are trying to go back so newIndex reset back to the last slide image present
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      //if newIndex >= to slides children's length means that we are at the slide image so we just reset the newIndex back to 0 which is the first slide image
      newIndex = 0;
    }

    //Setting the current image's dataset to active
    slides.children[newIndex].dataset.active = true;

    //Remove the previous image's dataset of active
    delete active.dataset.active;

    //Executing the makeSlides function that takes newIndex as a variable
    makeSlides(newIndex);
  });
});

//For each button we create a nav element and a navIndex && for each click on the nav element we execute makeSlides function
navButton.forEach((nav, navIndex) => {
  nav.addEventListener("click", (e) => {
    makeSlides(navIndex);
  });
});

//makeSlides function takes index as a variable index === newIndex
function makeSlides(index) {
  //for each nav of navButtons we remove the class of "active"
  for (nav of navButton) {
    nav.classList.remove("active");
  }

  //navButton[index] = current image / we add that a class of active
  navButton[index].classList.add("active");

  //for each slide of slideLis we remove the attribute of data-active
  for (slide of slideLis) {
    slide.removeAttribute("data-active");
  }

  //After we remove the attribute of data-active to every slide element we add that "data-active" attribute to the current slide image
  slideLis[index].setAttribute("data-active", true);
}
