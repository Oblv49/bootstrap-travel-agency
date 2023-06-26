javascript

var card = document.getElementById("myCard");

card.addEventListener("mouseover", function() {
  this.classList.add("animate__animated", "animate__heartBeat");
});

card.addEventListener("mouseout", function() {
  this.classList.remove("animate__animated", "animate__heartBeat");
});