let btn = document.querySelector(".no");
let bts = document.querySelector(".yes");
let mudar = document.querySelector(".page");
let teamo = document.querySelector(".teamo");

let position;
btn.addEventListener("mouseover", () => {
  position ? (position = 0) : (position = 150);
  btn.style.transform = `translate(${position}px,0px)`;
  btn.style.transition = "all 0.3s ease";
});

function tanks() {
  prompt("Tem Certeza");
}

function not() {
  alert("why? ");
}

bts.addEventListener("click", () => {
  mudar.classList.add("hide");
});
bts.addEventListener("click", () => {
  teamo.classList.remove("hide");
});
