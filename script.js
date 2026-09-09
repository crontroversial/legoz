const buttons = document.querySelectorAll("button");
const cartCount = document.querySelector("#cart-count");

let count = 0;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    const product = button.closest(".product");
    const productName = product.querySelector("h2").textContent;

    count = count + 1;
    cartCount.textContent = count;

    alert(productName + " wurde hinzugefügt!");

  });
});
