const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");
console.log(id);

const url ="https://sub.enlive.one/wp-json/wc/store/products";

const specificContainer = document.querySelector(".Pspecific");

async function productSpecific() {
  const response = await fetch(url);
  const specific = await response.json();
  console.log(specific);

  specificContainer.innerHTML+="";
  specificContainer.innerHTML+=`<div>
                                  <h2>${specific.name}</h2>
  
                                </div>`
}
productSpecific();