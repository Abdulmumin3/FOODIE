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
// const sections = document.querySelectorAll(".section");
// for (let i = 0; i < sections.length; i++) {
//   const section = sections[i];
//   const showMore = section.querySelector(".show-more");
//   const showLess = section.querySelector(".show-less");
//   const content = section.querySelector(".content");
//   showMore.addEventListener("click", () => show(content));
//   showLess.addEventListener("click", () => hide(content));
// }
// function show(el) {
//   el.classList.remove("hidden");
// }
// function hide(el) {
//   el.classList.add("hidden");
// }

// started from here
// this is using the forEach loop
const sections = document.querySelectorAll(".content");
const showMore = document.querySelectorAll(".show-more");
const showLess = document.querySelectorAll(".show-less");

// showMore.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     console.log(sections[i]);
//     sections[i].classList.remove("hidden");
//   });
// });

// showLess.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     sections[i].classList.add("hidden");
//   });
// });

// using the normal for loop
for (let i = 0; i < showMore.length; i++) {
  showMore[i].addEventListener("click", () => {
    sections[i].classList.remove("hidden");
  });
}

for (let i = 0; i < showLess.length; i++) {
  showLess[i].addEventListener("click", () => {
    sections[i].classList.add("hidden");
  });
}

// what this means is that, since all the buttons and the contents are the same nodelist length, then we can access a particular section based on the current index of the button that was clicked. You can console.log() things to see the way it happens.
