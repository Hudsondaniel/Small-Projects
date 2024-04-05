//The whole concept of the project is to implement modules. To think of one thing requiring one 
//f you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.

const gameBoard = ( () => {
    //Array of gameboard
    let gameBoard = ["", "", "", "", "", "", "", "",""];

    const render = () => {
        let boardHtml = "";
        gameBoard.forEach((square, index) => {
            boardHtml += `<div class="square-container"><div class="square" id="${index}">${square}</div></div>`;
        })
        document.querySelector('.gameBoard').innerHTML = boardHtml;
        const square = document.querySelectorAll(".square");
        square.forEach((square) => {
            square.addEventListener('click', game.handleClick);
        })
    }

    const update = (index, value) => {
        gameBoard[index] = value;
        render();
    }

    const getGameBoard = () => gameBoard;
    
    return {
        render,
        update,
        getGameBoard,
    }

})();


const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}


const game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [ createPlayer(document.querySelector('.player1').value, 'X'), 
        createPlayer(document.querySelector('.player2').value,'O')];
        currentPlayerIndex = 0;
        gameOver = false;
        gameBoard.render();  
    }

    const handleClick = (event) => {
        let index = parseInt(event.target.id);
        
        if(gameBoard.getGameBoard()[index] !== "")
            return;
        gameBoard.update(index, players[currentPlayerIndex].mark);

        if(checkForWin(gameBoard.getGameBoard(), players[currentPlayerIndex].mark))
        {
            gameOver = true;
            alert(`${players[currentPlayerIndex].name} won!`)
        } else if(checkForTie(gameBoard.getGameBoard())){
            gameOver = true;
            alert("It's a tie!")
        }
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    const restart = () => {
        for (let i = 0; i < 9; i++)
           {gameBoard.update(i, "");}
        gameBoard.render();
    }

    return{
        start,
        handleClick,
        restart,
    }
})();

function checkForWin(board){
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < winningCombinations.length; i++) {
        const [a,b,c] = winningCombinations[i];
        if(board[a] === board[b] && board[a] === board[c] && board[a]!== ""){
            return true;
        }
    }
    return false;
}

function checkForTie(board){

    return board.every(cell => cell !== "")
}


const startButton = document.querySelector('.start-button');
startButton.addEventListener("click", function(){
game.start();
});

const restartButton = document.querySelector('.reset-button');
restartButton.addEventListener("click", () => {game.restart()});
