const buttons = document.querySelectorAll(".product button");
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

  const groupedCart = {};

  cart.forEach(function(productName) {

    if (groupedCart[productName]) {
      groupedCart[productName]++;
    } else {
      groupedCart[productName] = 1;
    }

  });

  Object.keys(groupedCart).forEach(function(productName) {

    const quantity = groupedCart[productName];
    const productTotal = quantity * 2.99;

    const newItem = document.createElement("li");

    newItem.textContent =
      productName +
      " – " +
      productTotal.toFixed(2) +
      " € ";

    const minusButton = document.createElement("button");
    minusButton.textContent = "−";

    minusButton.addEventListener("click", function() {

      const index = cart.indexOf(productName);

      cart.splice(index, 1);

      updateCart();

    });

    const quantityText = document.createElement("span");
    quantityText.textContent = " " + quantity + " ";

    const plusButton = document.createElement("button");
    plusButton.textContent = "+";

    plusButton.addEventListener("click", function() {

      cart.push(productName);

      updateCart();

    });

    newItem.appendChild(minusButton);
    newItem.appendChild(quantityText);
    newItem.appendChild(plusButton);

    cartItems.appendChild(newItem);

  });

  cartCount.textContent = cart.length;

  const total = cart.length * 2.99;

  cartTotal.textContent = "Gesamt: " + total.toFixed(2) + " €";
}
