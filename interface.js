document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            let p = document.getElementById("player_indicator");
            p.style.fontWeight = 'bold';

            if (playerTime == 0) {
                p.innerHTML = "The player one wins!"
            } else {
                p.innerHTML = "The player two wins!"
            }
        }, 10)
    };

    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = '<div class="' + symbol + '"></div>';
}

function clearSquares() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.innerHTML = '';
    })
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    gameOver = false;

    let p = document.getElementById("player_indicator");
    p.style.fontWeight = 'normal';
    p.innerHTML = "It's player one's turn (O).";

    clearSquares();
}