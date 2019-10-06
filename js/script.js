// Declare as variáveis

var modal = document.getElementById("modal-block");
var modalButton = document.getElementById("modal-button");
var closeButton = document.querySelector(".close");

// Use o evento 'on click' para disparar o estilo do elemento do modal.

modalButton.addEventListener("click", function(){
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});