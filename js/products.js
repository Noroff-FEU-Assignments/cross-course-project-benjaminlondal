const gamesUrl = "https://gamehub-api-games.dvergnir.one/wp-json/wc/store/products";
const gameContainer = document.querySelector(".game-container");

async function getProducts(url){

    showLoadingIndicator()

    try {
        const response = await fetch(url);
        const products = await response.json();

        hideLoadingIndicator()

        products.forEach(function(product){

            gameContainer.innerHTML += `<div class="product_content">
                                            <a href="product_specific.html?id=${product.id}">
                                            <img src="${product.images[0].src}" alt="${product.images[0].alt}"></a>
                                            <h2>${product.name}</h2>
                                            <p>${product.price_html}</p>
                                            <a href="product_specific.html?id=${product.id}" class="cta"> VIEW GAME </a>
                                        </div>`;

        });
    } catch(error) {
        console.log(error);
    }
}
   

getProducts(gamesUrl);
