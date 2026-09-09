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
      " × " +
      quantity +
      " – " +
      productTotal.toFixed(2) +
      " € ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Entfernen";

    removeButton.addEventListener("click", function() {

      const index = cart.indexOf(productName);

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
