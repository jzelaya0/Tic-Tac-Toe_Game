//PLAYER SETTINGS
var playerTurn = 0;
var winner;
var player1;
var player2;

//GRABS ALL SQUARES
var squares =  document.getElementsByClassName('squares');


//ADD EVENT LISTENER TO EACH BOX
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click' , setPlayer);
}

//DETERMINES WHICH PLAYER STARTS THE GAME
function setPlayer() {

  if (playerTurn == 1) {
    this.innerHTML = "<p>X</p>";
    this.style.backgroundColor = "lightblue";
    playerTurn -= 1;
    getWinner();
    player1 = "X";
  }else {
    this.innerHTML = "<p>O</p>";
    this.style.backgroundColor = "coral";
    playerTurn += 1;
    getWinner();
  }
}




// GETS WINNER
function getWinner() {
  // GETS WINNER FOR X (TOP - ROWS)
  if (squares[0].textContent ==  player1 &&
      squares[1].textContent == player1 &&
      squares[2].textContent == player1) {
    alert('Winner is X');
  }else if (squares[3].textContent == player1 &&
            squares[4].textContent == player1 &&
            squares[5].textContent == player1) {
    alert('Winner is X');
  }else if (squares[6].textContent == player1 &&
            squares[7].textContent == player1 &&
            squares[8].textContent == player1) {
    alert('Winner is X');
  //GETS WINNER FOR X (COLUMNS)
  }else if (squares[0].textContent ==  player1 &&
            squares[3].textContent == player1 &&
            squares[6].textContent == player1) {
    alert('Winner is X');
  }else if (squares[1].textContent == player1 &&
            squares[4].textContent == player1 &&
            squares[7].textContent == player1) {
    alert('Winner is X');
  }else if (squares[2].textContent == player1 &&
            squares[5].textContent == player1 &&
            squares[8].textContent == player1) {
    alert('Winner is X');
  }


}
