console.log('Hello world!');

var numberOfPellets = 0;
var score = 0;
var game = createGame(10);

// ----------------- Functions -----------------

function generateRandomPosition(n) {
    let positions = new Set();

    while (positions.size < 3) {
        positions.add(Math.floor(Math.random() * n));
    }

    return Array.from(positions);
}

function createGame(n) {
    let board = new Array(n).fill('.');
    numberOfPellets = n - 3;

    let [pacmanStartPosition, ghostStartPosition, fruitPosition] = generateRandomPosition(n);
    
    board[pacmanStartPosition] = 'C';
    board[ghostStartPosition] = '^';
    board[fruitPosition] = '@';

    console.log(board);
    // Convert the board array to a string, with each element separated by a space
    let boardString = board.join(' ');
    // Create a new paragraph element
    let p = document.createElement('p');
    // Set the text of the paragraph to the board string
    p.textContent = boardString;
    // Append the paragraph to the body of the document
    document.body.appendChild(p);

    return board;
}

function moveLeft() {
    let pacmanIndex = game.indexOf('C');

    if (pacmanIndex === 0) {

        if (game[game.length - 1] === '.') {
            score += 1;
            numberOfPellets -= 1;
            console.log(score);
            let scoreElement = document.getElementById('score');
            scoreElement.textContent = 'Score: ' + score;
        }

        game[pacmanIndex] = '.';
        game[game.length - 1] = 'C';
    } else {

        if (game[pacmanIndex - 1] === '.') {
            score += 1;
            numberOfPellets -= 1;
            console.log(score);
            let scoreElement = document.getElementById('score');
            scoreElement.textContent = 'Score: ' + score;
        }

        game[pacmanIndex] = '.';
        game[pacmanIndex - 1] = 'C';
    }

    console.log(game);
    // Convert the board array to a string, with each element separated by a space
    let boardString = game.join(' ');
    // Create a new paragraph element
    let p = document.createElement('p');
    // Set the text of the paragraph to the board string
    p.textContent = boardString;
    // Append the paragraph to the body of the document
    document.body.appendChild(p);

    if (numberOfPellets === 0) {
        console.log('New game');
        // Create a new game
        game = createGame(10);
    }
}

function moveRight() {
    let pacmanIndex = game.indexOf('C');

    if (pacmanIndex === game.length - 1) {

        if (game[0] === '.') {
            score += 1;
            numberOfPellets -= 1;
            console.log(score);
            let scoreElement = document.getElementById('score');
            scoreElement.textContent = 'Score: ' + score;
        }

        game[pacmanIndex] = '.';
        game[0] = 'C';
    } else {

        if (game[pacmanIndex + 1] === '.') {
            score += 1;
            numberOfPellets -= 1;
            console.log(score);
            let scoreElement = document.getElementById('score');
            scoreElement.textContent = 'Score: ' + score;
        }

        game[pacmanIndex] = '.';
        game[pacmanIndex + 1] = 'C';
    }

    console.log(game);
    // Convert the board array to a string, with each element separated by a space
    let boardString = game.join(' ');
    // Create a new paragraph element
    let p = document.createElement('p');
    // Set the text of the paragraph to the board string
    p.textContent = boardString;
    // Append the paragraph to the body of the document
    document.body.appendChild(p);

    if (numberOfPellets === 0) {
        // Create a new game
        console.log('New game');
        game = createGame(10);
    }
}

window.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
});
