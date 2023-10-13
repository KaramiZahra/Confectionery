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
    label: "Cake",
    price: 17,
    img: "img/cake-1.jpeg",
    count: 1,
  },
  {
    id: 2,
    title: "Cupcake",
    label: "Cupcake",
    price: 20,
    img: "img/cupcake-1.jpeg",
    count: 1,
  },
  {
    id: 3,
    title: "Doughnut",
    label: "Doughnut",
    price: 10,
    img: "img/doughnut-1.jpeg",
    count: 1,
  },
  {
    id: 4,
    title: "Cupcake",
    label: "Cupcake",
    price: 18,
    img: "img/cupcake-2.jpeg",
    count: 1,
  },
  {
    id: 5,
    title: "Doughnut",
    label: "Doughnut",
    price: 14,
    img: "img/doughnut-2.jpeg",
    count: 1,
  },
  {
    id: 6,
    title: "Sweet",
    label: "Sweet",
    price: 8,
    img: "img/sweets-1.jpeg",
    count: 1,
  },
  {
    id: 7,
    title: "Sweet",
    label: "Sweet",
    price: 11,
    img: "img/sweets-2.jpeg",
    count: 1,
  },
  {
    id: 8,
    title: "Cupcake",
    label: "Cupcake",
    price: 16,
    img: "img/cupcake-3.jpeg",
    count: 1,
  },
  {
    id: 9,
    title: "Cake",
    label: "Cake",
    price: 23,
    img: "img/cake-2.jpeg",
    count: 1,
  },
  {
    id: 10,
    title: "Sweet",
    label: "Sweet",
    price: 7,
    img: "img/sweets-3.jpeg",
    count: 1,
  },
  {
    id: 11,
    title: "Cake",
    label: "Cake",
    price: 21,
    img: "img/cake-3.jpeg",
    count: 1,
  },
  {
    id: 12,
    title: "Doughnut",
    label: "Doughnut",
    price: 13,
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
      '<div class="product"><div class="product-img"><img src="' +
        product.img +
        '"><div class="product-cart"><i data-icon-id="' +
        product.id +
        '" class="fa-solid fa-cart-shopping"></i></div></div><div class="product-description"><p>' +
        product.title +
        "</p><p>$" +
        product.price +
        "</p></div></div>"
    );
  });
}
createProductCard(productsArray);

// categorization
let allBtn = document.querySelector(".all-btn");
let cakeBtn = document.querySelector(".cake-btn");
let cupcakeBtn = document.querySelector(".cupcake-btn");
let doughnutBtn = document.querySelector(".doughnut-btn");
let sweetBtn = document.querySelector(".sweet-btn");

// shows all products
allBtn.addEventListener("click", function () {
  let allFilter = productsArray.filter(function (all) {
    return all.label;
  });
  createProductCard(allFilter);
});
// shows cakes
cakeBtn.addEventListener("click", function () {
  let cakeFilter = productsArray.filter(function (cake) {
    return cake.label === "Cake";
  });
  createProductCard(cakeFilter);
});
// shows cupcakes
cupcakeBtn.addEventListener("click", function () {
  let cupcakeFilter = productsArray.filter(function (cupcake) {
    return cupcake.label === "Cupcake";
  });
  createProductCard(cupcakeFilter);
});
// shows doughnuts
doughnutBtn.addEventListener("click", function () {
  let doughnutFilter = productsArray.filter(function (doughnut) {
    return doughnut.label === "Doughnut";
  });
  createProductCard(doughnutFilter);
});
// shows sweets
sweetBtn.addEventListener("click", function () {
  let sweetFilter = productsArray.filter(function (sweet) {
    return sweet.label === "Sweet";
  });
  createProductCard(sweetFilter);
});

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

// add product to basket by clicking the respective icon
let cartIcons = document.querySelectorAll(".product-cart i");
let userBasket = [];

cartIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    let getProductId = icon.getAttribute("data-icon-id");
    // find product in products' array
    let findProduct = productsArray.find(function (product) {
      return product.id == getProductId;
    });
    // check the product's exitence in basket
    let isInBasket = userBasket.some(function (product) {
      return product.id == findProduct.id;
    });
    if (!isInBasket) {
      userBasket.push(findProduct);
      console.log(userBasket);
    }
    setLocalStorage(userBasket)
  });
});

// set local storage
function setLocalStorage(products) {
  localStorage.setItem("user-basket", JSON.stringify(products));
}
// get local storage
window.addEventListener("load", function () {
  let getBasket = JSON.parse(localStorage.getItem("user-basket"));
  // place products in the basket in case of existence
  if (getBasket) {
    userBasket = getBasket;
  } else {
    userBasket = [];
  }
});
