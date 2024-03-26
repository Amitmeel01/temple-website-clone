let slides = document.getElementsByClassName("slides");
let dot = document.getElementsByClassName("dot");
let currentSlide = 0;

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
prev.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});
function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  } else if (moveTo < 0) {
    moveTo = slides.length - 1;
  }
  slides[currentSlide].classList.toggle("active");
  dot[currentSlide].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  dot[moveTo].classList.toggle("activeDot");
  currentSlide = moveTo;
}

window.onload = setInterval(function () {
  changeSlide(currentSlide + 1);
}, 3000);

// description

const editList = document.querySelectorAll(".edit");
const descList = document.querySelectorAll(".desc");

editList.forEach((edit, index) => {
  edit.addEventListener("click", () => {
    if (descList[index].style.display === "none") {
      descList[index].style.display = "block";
    } else {
      descList[index].style.display = "none";
    }
  });
});

//sidebar

function openNav() {
  document.getElementById("mySidebar").style.width = "400px";
  
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
 
}


