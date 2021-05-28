const cartItems = JSON.parse(localStorage.getItem("cartList")) ;
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function(cartElement) {
  total += parseInt(cartElement.price);
  cartContainer.innerHTML +=
  `
  <div class="cart-item">
    <h3>${cartElement.name}</h3>
    <h4>Color: ${cartElement.color}</h4>
    <h4>Size: ${cartElement.size}</h4>
    <div style="background-image: url(${cartElement.image})" class="cart-image"></div>

  </div>
  
  `
});

totalContainer.innerHTML =`<h3>Total: ${total} $</h3>`;