let menu = document.querySelector(".menu")
let navCart = document.querySelector(".nav-cart-bg")
let menuIcon = document.querySelector(".header-menu");
let icon = document.querySelector(".header-menu i");

menuIcon.addEventListener("click", function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
    menu.style.display = 'block'
    navCart.style.display = 'block'
  } else {
    icon.classList.replace("fa-times", "fa-bars");
    menu.style.display = 'none'
    navCart.style.display = 'none'
  }
});
