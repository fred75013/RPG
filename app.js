const btnStart = document.querySelector(".btn");
btnStart.addEventListener("click", function () {
  const gameStart = new Game(10);
  gameStart.newTurn();
});
