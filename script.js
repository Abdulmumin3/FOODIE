// const showMore = document.querySelectorAll(".show-more");
// const showLess = document.querySelectorAll(".show-less");
// const contents = document.querySelectorAll(".content");

// function toggleContent() {
//   if (contents.classList.includes("hidden")) {
//     contents.classList.remove("hidden");
//     button.textContent = "show less";
//   } else {
//     contents.classList.add("hidden");
//     button.textContent = "show menu";
//   }
// }

// const openContent = function (e) {
//   contents[e].classList.remove("hidden");
// };
// const closeContent = function (e) {
//   contents[e].classList.add("hidden");
// };
// for (let i = 0; i < showMore.length; i++) {
//   showMore[i].addEventListener("click", openContent[i]);
// }
// for (let i = 0; i < showMore.length; i++) {
//   showLess[i].addEventListener("click", closeContent[i]);
// }
const sections = document.querySelectorAll(".section");
for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  const showMore = section.querySelector(".show-more");
  const showLess = section.querySelector(".show-less");
  const content = section.querySelector(".content");
  showMore.addEventListener("click", () => show(content));
  showLess.addEventListener("click", () => hide(content));
}
function show(el) {
  el.classList.remove("hidden");
}
function hide(el) {
  el.classList.add("hidden");
}
