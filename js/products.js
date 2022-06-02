import { games } from "./data/games.js";

const gameContainer = document.querySelector(".game-container");
let gamesToRender = games;



function renderGames() {
    gamesToRender.forEach(function(games) {
        gameContainer.innerHTML += `<div class="product_content">
                                        <img src="${games.image}">
                                        <h2>${games.title}(${games.year})</h2>
                                        <p>$${games.price}</p>
                                        <a href="product_specific.html?id=${games.id}" class="cta"> VIEW GAME </a>
                                    </div>`;
    
    
    });
}

renderGames();