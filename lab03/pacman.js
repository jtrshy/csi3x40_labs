console.log('Hello world!');

// Variables

function generateRandomPosition(n) {
    let positions = new Set();

    while (positions.size < 3) {
        positions.add(Math.floor(Math.random() * n));
    }

    return Array.from(positions);
}

function createGame(n) {
    let board = new Array(n).fill('.');

    let [pacmanStartPosition, ghostStartPosition, fruitPosition] = generateRandomPosition(n);
    
    board[pacmanStartPosition] = 'C';
    board[ghostStartPosition] = '^';
    board[fruitPosition] = '@';

    console.log(board);
}