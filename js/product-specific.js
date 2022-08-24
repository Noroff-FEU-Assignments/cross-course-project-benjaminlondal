const detailContainer = document.querySelector(".detail-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const gameUrl = "https://gamehub-api-games.dvergnir.one/wp-json/wc/store/products/" + id;

async function getProducts(gameUrl){

  showLoadingIndicator()

  try {
      const response = await fetch(gameUrl);
      const products = await response.json();

      hideLoadingIndicator()

        document.title = `${products.name} | GameHub`;

        detailContainer.innerHTML += `<div class="product_specific">
                                        <img src="${products.images[0].src}" alt="${products.images[0].alt}"></a>
                                        <h1>${products.name}</h1>
                                        <p class="product_specific_info">${products.description}</p>
                                        <p class="cost">Price: $${products.prices.price}</p>
                                        <button class="cta" data-game=${products.id}> Add to Cart </button>
                                    </div>`;

  } catch(error) {
      console.log(error);
  }
}
 

getProducts(gameUrl);

const button = document.querySelector("button");

button.onclick = function(event){

  displayShopOverlay();
  
}