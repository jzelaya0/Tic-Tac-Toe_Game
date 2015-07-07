// PLAYER SETTINGS
var playerTurn = 0;
var X;
var playerO;
var winner;
//GRABS ALL SQUARES
var squares =  document.getElementsByClassName('squares');




//ADD EVENT LISTENER TO EACH BOX
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click' , setPlayer);
}

//DETERMINES WHICH PLAYER STARTS THE GAME
function setPlayer() {
  if (this.id !== "") {
    alert('Square is Occupied');
    console.log(this);
  }
  else if(playerTurn % 2 === 0) {
    this.innerHTML = '<p>X</p>';
    this.id = 'X';
    this.style.backgroundColor = "lightblue";
    console.log(this);
    playerTurn += 1;
    getWinner();
  }
  else {
    this.innerHTML = '<p>O</p>';
    this.id = 'O';
    this.style.backgroundColor = "coral";
    console.log(this);
    playerTurn += 1;
    getWinner();
  }
}


// GETS WINNER
function getWinner(){
  // GETS WINNER FOR X (TOP - ROWS)
  if (squares[0].id ==  "X" && squares[1].id == "X" && squares[2].id == "X") {
      alert('Winner is X');
  }else if (squares[3].id == "X" && squares[4].id == "X" && squares[5].id == "X") {
      alert('Winner is X');
  }else if (squares[6].id == "X" && squares[7].id == "X" && squares[8].id == "X") {
    alert('Winner is X');
  //GETS WINNER FOR X (COLUMNS)
  }else if (squares[0].id ==  "X" && squares[3].id == "X" && squares[6].id == "X") {
    alert('Winner is X');
  }else if (squares[1].id == "X" && squares[4].id == "X" && squares[7].id == "X") {
    alert('Winner is X');
  }else if (squares[2].id == "X" && squares[5].id == "X" && squares[8].id == "X") {
    alert('Winner is X');
  //GETS WINNER FOR X (DIAGONAL)
  }else if (squares[0].id ==  "X" && squares[4].id == "X" && squares[8].id == "X") {
    alert('Winner is X');
  }else if (squares[2].id == "X" && squares[4].id == "X" && squares[6].id == "X") {
    alert('Winner is X');
  // GETS WINNER FOR O (TOP ROWS)
  }else if (squares[0].id ==  "O" && squares[1].id == "O" && squares[2].id == "O") {
      alert('Winner is X');
  }else if (squares[3].id == "O" && squares[4].id == "O" && squares[5].id == "O") {
      alert('Winner is O');
  }else if (squares[6].id == "O" && squares[7].id == "O" && squares[8].id == "O") {
    alert('Winner is O');
  //GETS WINNER FOR O (COLUMNS)
  }else if (squares[0].id ==  "O" && squares[3].id == "O" && squares[6].id == "O") {
    alert('Winner is O');
  }else if (squares[1].id == "O" && squares[4].id == "O" && squares[7].id == "O") {
    alert('Winner is O');
  }else if (squares[2].id == "O" && squares[5].id == "O" && squares[8].id == "O") {
    alert('Winner is O');
  //GETS WINNER FOR O (DIAGONAL)
  }else if (squares[0].id ==  "O" && squares[4].id == "O" && squares[8].id == "O") {
    alert('Winner is O');
  }else if (squares[2].id == "O" && squares[4].id == "O" && squares[6].id == "O") {
    alert('Winner is O');
  }
}
