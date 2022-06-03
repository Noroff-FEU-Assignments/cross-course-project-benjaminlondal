import { games } from "./data/games.js";

const detailContainer = document.querySelector(".detail-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const game = games.find( ({ id }) => id == params.get("id"));

document.title = `${game.title} | GameHub`;

detailContainer.innerHTML += `<div class="product_specific">
                                <img src="${game.image}" alt="Racing game" class="product_content_specific">
                                <h1>${game.title} (${game.year})</h1>
                                <p class="product_specific_info">${game.about}</p>
                                <p class="cost">Price: $${game.price}</p>
                                <button class="cta" data-game=${game.id}> Add to Cart </button>
                            </div>`;



const button = document.querySelector("button");

var cartArray = [];

button.onclick = function(event){

    cartArray.push(event.target.dataset.game);
    displayShopOverlay();
    console.log(cartArray);
    
  }