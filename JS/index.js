const baseUrl ='https://sub.enlive.one/wp-json/wc/store/products';
const productContainer = document.querySelector(".featured-products");


async function getProducts(url) {
  const response = await fetch(url);
  const products = response.json();
  products.forEach(function(product) {
  productContainer.innerHTML +=`
  <div class='product'> <h2> ${product.name} </h2> </div>
  `
 });
    
}
products(product);
getProducts(baseUrl);