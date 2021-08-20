const querystring = document.location.search;

const params = new URLSearchParams(querystring);

const id = params.get("id");

console.log(id);

const url ="https://sub.enlive.one/wp-json/wc/store/products/" +id;

const specificContainer = document.querySelector(".Pspecific");

async function productSpecific() {
  const response = await fetch(url);
  const specific = await response.json();
  console.log(specific);

  
  specificContainer.innerHTML+=`<div class="product-specific">
                                  <h2>${specific.name}</h2>
                                  <div class='product-specific-image'style="background-image:url('${specific.images[0].src}')"> </div>
                                  <p> <b>$ ${specific.prices.price}</b></p>
                                </div>`
}
productSpecific();