let btn = document.querySelectorAll(".btns");
let AddBlog = document.querySelector("#btn");
let popup = document.querySelector(".container");
let body = document.querySelector(".body");
console.log(body);
AddBlog.addEventListener("click", () => {
  body.classList.toggle("form");
  //   popup.classList.toggle("form");
  alert("hllo");
});
