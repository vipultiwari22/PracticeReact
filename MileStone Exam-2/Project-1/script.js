let AddBlog = document.querySelector("#btn");
let popup = document.querySelector("#form");
let closeButton = document.querySelector(".Cross");
let close = document.querySelector(".cross");
let btns = document.querySelectorAll(".btns");
let blog = document.querySelector(".blog-conatiner");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    blog.classList.toggle("show");
    // blog.style.display = "block";
  });
  close.addEventListener("click", () => {
    blog.style.display = "none";
  });
});

AddBlog.addEventListener("click", () => {
  popup.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});
