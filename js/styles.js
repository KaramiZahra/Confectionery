// hamburger menu
let menu = document.querySelector(".menu");
let navCart = document.querySelector(".nav-cart-bg");
let menuIcon = document.querySelector(".header-menu");
let icon = document.querySelector(".header-menu i");

menuIcon.addEventListener("click", function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
    menu.style.display = "block";
    navCart.style.display = "block";
  } else {
    icon.classList.replace("fa-times", "fa-bars");
    menu.style.display = "none";
    navCart.style.display = "none";
  }
});
// store section array
let productsContainer = document.querySelector(".products-container");
let storeArray = [
  { id: 1, title: "Cake", price: 17, img: "img/cake-1.jpeg", count: 1 },
  { id: 2, title: "Cupcake", price: 17, img: "img/cupcake-1.jpeg", count: 1 },
  { id: 3, title: "Doughnut", price: 17, img: "img/doughnut-1.jpeg", count: 1 },
  { id: 4, title: "Cupcake", price: 17, img: "img/cupcake-2.jpeg", count: 1 },
  { id: 5, title: "Doughnut", price: 17, img: "img/doughnut-2.jpeg", count: 1 },
  { id: 6, title: "Sweet", price: 17, img: "img/sweets-1.jpeg", count: 1 },
  { id: 7, title: "Sweet", price: 17, img: "img/sweets-2.jpeg", count: 1 },
  { id: 8, title: "Cupcake", price: 17, img: "img/cupcake-3.jpeg", count: 1 },
  { id: 9, title: "Cake", price: 17, img: "img/cake-2.jpeg", count: 1 },
  { id: 10, title: "Sweet", price: 17, img: "img/sweets-3.jpeg", count: 1 },
  { id: 11, title: "Cake", price: 17, img: "img/cake-3.jpeg", count: 1 },
  { id: 12, title: "Doughnut", price: 17, img: "img/doughnut-3.jpeg", count: 1 },
];

storeArray.forEach(function (storeInfo) {
  productsContainer.insertAdjacentElement(
    "beforeend",
    '<div class="product"><div class="product-img"><img src="' +
      storeInfo.img +
      '"><div class="product-cart"><i class="fa-solid fa-cart-shopping"></i></div></div><div class="product-description"><p>' +
      storeInfo.title +
      "</p><p>$" +
      storeInfo.price +
      "</p></div></div>"
  );
});
