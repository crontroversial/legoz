const buttons = document.querySelectorAll("button");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");

let cart = [];

buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    const product = button.closest(".product");
    const productName = product.querySelector("h2").textContent;

    cart.push(productName);

    updateCart();

  });
});

function updateCart() {

  cartItems.innerHTML = "";

  cart.forEach(function(productName, index) {

    const newItem = document.createElement("li");

    newItem.textContent = productName + " – 2,99 € ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Entfernen";

    removeButton.addEventListener("click", function() {

      cart.splice(index, 1);

      updateCart();

    });

    newItem.appendChild(removeButton);
    cartItems.appendChild(newItem);

  });

  cartCount.textContent = cart.length;

  const total = cart.length * 2.99;

  cartTotal.textContent = "Gesamt: " + total.toFixed(2) + " €";
}
