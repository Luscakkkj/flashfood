// Elements
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
const inputs = document.querySelectorAll('.input-field')
const singinForm = document.querySelector('.sign-in-form')
const singupForm = document.querySelector('.sign-up-form')

//Input Form Masks
$('#phone').mask('(00) 00000-0000')
$('#CPF').mask('000.000.000-00', { reverse: true });

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode")
  });
});

function moveSlider() {
  const index = this.dataset.value;

  const currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

function autoMoveSlider() {
  const activeBullet = document.querySelector(".bullets .active");
  const nextBullet = activeBullet.nextElementSibling || bullets[0];
  nextBullet.click();
}

setInterval(autoMoveSlider, 3000);
