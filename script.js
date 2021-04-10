const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateDOM();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateDOM();
});

const updateDOM = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  const widthPercentage =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
  progress.style.width = widthPercentage;

  if (currentActive > circles.length - 1) {
    next.setAttribute("disabled", true);
  } else if (currentActive < 2) {
    prev.setAttribute("disabled", true);
  } else {
    next.removeAttribute("disabled");
    prev.removeAttribute("disabled");
  }
};
