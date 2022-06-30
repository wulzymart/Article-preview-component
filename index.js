const screenWidth = window.screen.width;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const userBox = document.querySelector(".user-box");
const append = document.querySelector(".append");

function smallWidthToggler() {
  userBox.classList.toggle("hidden");
  append.classList.toggle("hidden");
}
if (screenWidth <= 375) {
  btn1.addEventListener("click", smallWidthToggler);
  btn2.addEventListener("click", smallWidthToggler);
}
if (screenWidth > 375) {
  btn1.addEventListener("click", function () {
    append.classList.toggle("hidden");
  });
}
