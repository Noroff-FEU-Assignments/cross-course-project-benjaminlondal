import { games } from "./data/games.js";

const detailContainer = document.querySelector(".detail-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const game = games.find( ({ id }) => id == params);

console.log(game);

document.title = `${games.name} | GameHub`;

detailContainer.innerHTML += `<div class="product_content">
                                    <img src="${games.image}">
                                    <h2>${games.title}(${games.year})</h2>
                                    <p>$${games.price}</p>
                                    <a href="product_specific.html" class="cta"> VIEW GAME </a>
                            </div>`;