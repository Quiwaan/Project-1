var navClicks = 0;
var update = document.getElementById('update');
document.getElementById('buttons').onclick = function() {
    navClicks++;
    if(navClicks===1) {
        update.innerHTML = 'Board One will on your left, Board Two will be on your right. be oPlace ships on Board Two, You must choose 17 squares each square equals a ship';
    } else if(navClicks===2) {
        update.innerHTML = 'Board One will be the board you will shoot your missles at. Red is hit, blue is miss.';
    } else if(navClicks===3) {
        update.innerHTML = 'Click anywhere on Board One to shoot your missles! As soon as you click and shoot the computer will take its shot at your ships!';
    } else if(navClicks===4) {
        update.innerHTML = 'Both players have 17 ships whoever hits all 17 will be the WINNER!' ;
    }
};
