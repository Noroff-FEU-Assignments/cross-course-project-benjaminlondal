const shopOverlay = document.getElementById("shop-overlay");
const cartDropDown = document.querySelector(".cart");
const cartIcon = document.getElementById("grid-cart");

function displayShopOverlay() {
    shopOverlay.style.display = "block";
}

function displayCartDropDown() {
    if (cartDropDown.style.display === "none") {
        cartDropDown.style.display = "block";
      } else {
        cartDropDown.style.display = "none";
      }
    
}

cartIcon.onclick = displayCartDropDown;