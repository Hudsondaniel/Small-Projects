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
    }

    const update = (index, value) => {
        gameBoard[index] = value;
    }
    
    return {
        render,
        update
    }
 

})();


const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}


const game = (() => {

    const start = () => {
        let players = [ createPlayer(document.querySelector('.player1').value, 'X'), 
        createPlayer(document.querySelector('.player2').value,'O')];
        let currentPlayerIndex = 0;
        let gameOver = false;
        gameBoard.render();  
        const square = document.querySelectorAll(".square");
        square.forEach((square) => {
            square.addEventListener('click', game.handleClick);
        })
    }

    const handleClick = (event) => {
        let index = parseInt(event.target.id);
        gameBoard.update(index, players[currentPlayerIndex].mark);
    }

    return{
        start,
        handleClick,
    }
  
})();


const startButton = document.querySelector('.start-button');
startButton.addEventListener("click", function(){
     game.start();
});