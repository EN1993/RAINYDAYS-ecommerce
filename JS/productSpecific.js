const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");
console.log(id);

const url ="https://sub.enlive.one/wp-json/wc/store/products/35";

const specificContainer = document.querySelector(".Pspecific");

async function productSpecific() {
  const response = await fetch(url);
  const specific = await response.json();
  console.log(specific);

  
  specificContainer.innerHTML+=`<div>
                                  <h2>${specific.name}</h2>
                                  <div class='product-image'style="background-image:url('${specific.images[0].src}')"> </div>
                                  <p>$ ${specific.prices.price}</p>
                                </div>`
}
productSpecific();