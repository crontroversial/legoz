const buttons = document.querySelectorAll("button");
const cartCount = document.querySelector("#cart-count");

let cart = [];

buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    const product = button.closest(".product");
    const productName = product.querySelector("h2").textContent;

    cart.push(productName);

    cartCount.textContent = cart.length;

    console.log(cart);

    alert(productName + " wurde hinzugefügt!");

  });
});
