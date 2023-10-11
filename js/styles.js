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
let productsArray = [
  {
    id: 1,
    title: "Cake",
    price: 17,
    img: "img/cake-1.jpeg",
    count: 1,
  },
  {
    id: 2,
    title: "Cupcake",
    price: 17,
    img: "img/cupcake-1.jpeg",
    count: 1,
  },
  {
    id: 3,
    title: "Doughnut",
    price: 17,
    img: "img/doughnut-1.jpeg",
    count: 1,
  },
  {
    id: 4,
    title: "Cupcake",
    price: 17,
    img: "img/cupcake-2.jpeg",
    count: 1,
  },
  {
    id: 5,
    title: "Doughnut",
    price: 17,
    img: "img/doughnut-2.jpeg",
    count: 1,
  },
  {
    id: 6,
    title: "Sweet",
    price: 17,
    img: "img/sweets-1.jpeg",
    count: 1,
  },
  {
    id: 7,
    title: "Sweet",
    price: 17,
    img: "img/sweets-2.jpeg",
    count: 1,
  },
  {
    id: 8,
    title: "Cupcake",
    price: 17,
    img: "img/cupcake-3.jpeg",
    count: 1,
  },
  {
    id: 9,
    title: "Cake",
    price: 17,
    img: "img/cake-2.jpeg",
    count: 1,
  },
  {
    id: 10,
    title: "Sweet",
    price: 17,
    img: "img/sweets-3.jpeg",
    count: 1,
  },
  {
    id: 11,
    title: "Cake",
    price: 17,
    img: "img/cake-3.jpeg",
    count: 1,
  },
  {
    id: 12,
    title: "Doughnut",
    price: 17,
    img: "img/doughnut-3.jpeg",
    count: 1,
  },
];
let productsContainer = document.querySelector(".products-container");

// create card for each product
function createProductCard(products) {
  productsContainer.innerHTML = "";

  products.forEach(function (product) {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      '<div data-product-id="' +
        product.id +
        '" class="product"><div class="product-img"><img src="' +
        product.img +
        '"><div class="product-cart"><i class="fa-solid fa-cart-shopping"></i></div></div><div class="product-description"><p>' +
        product.title +
        "</p><p>$" +
        product.price +
        "</p></div></div>"
    );
  });
}
createProductCard(productsArray);

// show product's cart icon
let product = document.querySelectorAll(".product");

function showCartIcon(e) {
  let cartIcon = e.currentTarget.querySelector(".product-cart");
  cartIcon.style.cssText = "right:0; bottom:3.5rem;";
}

function hideCartIcon(e) {
  let cartIcon = e.currentTarget.querySelector(".product-cart");
  cartIcon.style.cssText = "right:-4rem; bottom:0;";
}

product.forEach(function (item) {
  item.addEventListener("mouseenter", showCartIcon);
  item.addEventListener("touchstart", showCartIcon);
  item.addEventListener("mouseleave", hideCartIcon);
  item.addEventListener("touchend", hideCartIcon);
});
