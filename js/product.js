// products array
let productsArray = [
  {
    id: 1,
    title: "Cake",
    label: "Cake",
    price: 17,
    img: "img/cake-1.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -cake-1",
  },
  {
    id: 2,
    title: "Cupcake",
    label: "Cupcake",
    price: 20,
    img: "img/cupcake-1.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -cupcake-1",
  },
  {
    id: 3,
    title: "Doughnut",
    label: "Doughnut",
    price: 10,
    img: "img/doughnut-1.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -doughnut-1",
  },
  {
    id: 4,
    title: "Cupcake",
    label: "Cupcake",
    price: 18,
    img: "img/cupcake-2.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -cupcake-2",
  },
  {
    id: 5,
    title: "Doughnut",
    label: "Doughnut",
    price: 14,
    img: "img/doughnut-2.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -doughnut-2",
  },
  {
    id: 6,
    title: "Sweet",
    label: "Sweet",
    price: 8,
    img: "img/sweets-1.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -sweet-1",
  },
  {
    id: 7,
    title: "Sweet",
    label: "Sweet",
    price: 11,
    img: "img/sweets-2.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -sweet-2",
  },
  {
    id: 8,
    title: "Cupcake",
    label: "Cupcake",
    price: 16,
    img: "img/cupcake-3.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -cupcake-3",
  },
  {
    id: 9,
    title: "Cake",
    label: "Cake",
    price: 23,
    img: "img/cake-2.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -cake-2",
  },
  {
    id: 10,
    title: "Sweet",
    label: "Sweet",
    price: 7,
    img: "img/sweets-3.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -sweet-3",
  },
  {
    id: 11,
    title: "Cake",
    label: "Cake",
    price: 21,
    img: "img/cake-3.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -cake-3",
  },
  {
    id: 12,
    title: "Doughnut",
    label: "Doughnut",
    price: 13,
    img: "img/doughnut-3.jpeg",
    count: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati ad voluptate sunt ducimus neque Provident dolorum odio ex nobis aut quaerat voluptatibus eum nesciunt fuga cupiditate, reiciendis odit vitae Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est perspiciatis obcaecati repellendus architecto quod vero eius nam sit, nobis facilis at odit quasi dolor possimus commodi eaaliquid tenetur -doughnut-3",
  },
];

// move one page back
let backBtn = document.querySelector(".back-btn");
backBtn.addEventListener("click", function () {
  history.back();
});

let itemTitle = document.querySelector("h2");
let itemText = document.querySelector("p");
let itemImage = document.querySelector("img");
// get the product's id
let locationParams = new URLSearchParams(location.search);
let itemId = locationParams.get("id");

// fin the product in store
let findItem = productsArray.find(function (item) {
  return item.id == itemId;
});

// customize the product page
if (findItem) {
  itemTitle.innerHTML = findItem.title;
  itemText.innerHTML = findItem.desc;
  itemImage.setAttribute("src", findItem.img);
}

// add product to basket
let itemBtn = document.querySelector("button");
let userBasket = [];

itemBtn.addEventListener("click", function () {
  let getProductId = itemId;
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
    alert("The item added to your shopping cart");
  } else {
    alert("The item exists in your shopping cart");
  }
  setLocalStorage(userBasket);
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
