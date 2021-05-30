import{productArray} from "./constans/productList.js";
const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let cartArray = [];

productArray.forEach(function(product) {
  
  productsContainer.innerHTML +=
  `
  <div class="product">
    <h2>${product.name}</h2>
    <div style="background-image: url(${product.image})" class="product-image"></div>
    <h4 class="product-price"> ${product.price} $</h4>
    <h4 class="product-color">Color: ${product.color}</h4>
    <h4 class="product-size">Size: ${product.size}</h4>
    <button class="product-button" data-product="${product.id}"> Add To Cart </button>
  </div>
  
  `
});

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

 button.onclick = function(event) {
  const itemToAdd = productArray.find(item => item.id === event.target.dataset.product)
  cartArray.push(itemToAdd)
  showCart(cartArray)
  localStorage.setItem("cartList", JSON.stringify(cartArray));
 
 }
});

function showCart(cartItems) {
  cart.style.display = "flex";
  cartList.innerHTML="";
  let total = 0;
  cartItems.forEach(function(cartElement) {
    total += parseInt(cartElement.price);
    cartList.innerHTML +=
    `
    <div class="cart-item">
      <h3>${cartElement.name}</h3>
      <h4 style="padding: 0px 8px"> Color: ${cartElement.color}</h4>
      <h4> Size: ${cartElement.size}</h4>
      <div style="background-image: url(${cartElement.image})" class="cart-image"></div>
    </div>
    
    `
  })
  totalContainer.innerHTML = `<h3>Total: ${total} $</h3>`;
};