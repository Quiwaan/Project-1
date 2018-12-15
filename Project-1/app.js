document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM was loaded!');
});

var rows = 10;
var cols = 10;
var squareSize = 50;
var gameBoardGrid2 = document.getElementById("board2")
var gameBoardGrid = document.getElementById("board");
var messages = document.getElementById("msg");
function setShotGrid(){
// make the grid columns and rows, got from stackflow
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			
			// create a new div HTML element for each grid square 
			var square = document.createElement("div");
			gameBoardGrid.appendChild(square);
			square.setAttribute("data-marked", 'false')

	    // give each div element an id 
			square.id = 'sq' + j + i;	

			square.classList.add("square")


			
			// multiples of the current row or column number
			var topPosition = j * squareSize;
			var leftPosition = i * squareSize;			
			
			// place each grid square on the page
			square.style.top = topPosition + 'px';
			square.style.left = leftPosition + 'px';						
		}
	}
}
setShotGrid()

function setShipGrid(){
// make the grid columns and rows, got from stackflow
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			
			// create a new div HTML element for each grid square 
			var square2 = document.createElement("div");
			gameBoardGrid2.appendChild(square2);
			square2.setAttribute("data-marked2", 'false')

	    // give each div element an id 
			square2.id = 'sQ' + j + i;	

			square2.classList.add("square2")

			
			// multiples of the current row or column number
			var topPosition = j * squareSize;
			var leftPosition = i * squareSize;			
			
			// place each grid square on the page
			square2.style.top = topPosition + 'px';
			square2.style.left = leftPosition + 'px';						
		}
	}
}
setShipGrid()

// 0 = square, 1 = ship, 2 = hit, 3 = missed

var gameBoard = [
[0,0,0,0,0,0,0,1,1,1],
[0,0,0,1,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0],
[0,1,0,0,1,1,1,1,0,0],
[0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,0,0,0,0]
];

var gameBoard2 = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
];


// stores the html collection in an array so we can run forEach on it
var hits = 0;
var ships = 0;
var squareDivs = Array.from(document.getElementsByClassName("square"));
squareDivs.forEach(function(cell){
	cell.addEventListener("click", fireHit);
});

function fireHit(e) {
	if(e.target.getAttribute("data-marked") === 'false') {
		console.log("inside fire hit");
		var x = e.target.id[3];
		var y = e.target.id[2];
		if (gameBoard[y][x]) {
			e.target.style.background = "red";
			// console.log(x,y, 'hit');
			hits++;
		} else {
			e.target.style.background = "blue";
			// console.log(x,y, 'miss');
		}
		e.target.setAttribute("data-marked", "true")
	}
	if(hits == 17){
		messages.textContent = "all ships dead you are the winner";
	}
}


var resetButton = document.getElementById("reset-game");
	resetButton.addEventListener("click", resetGame);
		console.log("reset click");

	
	
function resetGame(e) {
	squareDivs.forEach(function(cell){
		cell.setAttribute("data-marked", "false")
		cell.style.background = "white";
		hits = 0;
		messages.textContent = " ";
	})

}

var squareDivs2 = Array.from(document.getElementsByClassName("square2"));
squareDivs2.forEach(function(cell){
cell.addEventListener("click", clicks);
});


  
function clicks(e){
	var x = e.target.id[3];
	var y = e.target.id[2];
	console.log(x,y);
	gameBoard2[y][x] = 1;
	document.getElementById(`sQ${y}${x}`).style.backgroundColor = 'darkgrey';
	console.log(gameBoard2);
	ships++
	if(ships > 17 ){
		messages.textContent = "Only 17 clicks available to place ships"
	}

}

































