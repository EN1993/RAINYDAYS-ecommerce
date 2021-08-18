const baseUrl ='https://sub.enlive.one/wp-json/wc/store/products';
const productContainer = document.querySelector(".products");


async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function(product) {
  productContainer.innerHTML +=`
  <a href="productSpecific.html?id=${product.id}}">
  <div class='product'>
   <h2> ${product.name} </h2> 
   <div class='product-image'style="background-image:url('${product.images[0].src}')"> </div>
   <p>$ ${product.prices.price}</p>
  
  </div>
  `
 });
    
}

getProducts(baseUrl);