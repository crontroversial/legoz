const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Du hast Lego gekauft!");
  });
});
