console.log('Hello world!');

let game = createGame(10);

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

function moveLeft(game) {
    let pacmanIndex = game.indexOf('C');

    if (pacmanIndex === 0) {
        game[pacmanIndex] = '';
        game[game.length - 1] = 'C';
    }
    else {
        game[pacmanIndex] = '';
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

    return game;
}

function moveRight(game) {
    let pacmanIndex = game.indexOf('C');

    if (pacmanIndex === game.length - 1) {
        game[pacmanIndex] = '';
        game[0] = 'C';
    }
    else {
        game[pacmanIndex] = '';
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

    return game;
}

window.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
            moveLeft(game);
            break;
        case 'ArrowRight':
            moveRight(game);
            break;
    }
});