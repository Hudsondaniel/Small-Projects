//The whole concept of the project is to implement modules. To think of one thing requiring one 
//f you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.

const gameBoard = ( () => {
    //Array of gameboard
    let gameBoard = ["", "", "", "", "", "", "", ""," "];
    
    const render = () => {
        let boardHtml = "";
        gameBoard.forEach((square, index) => {
            boardHtml += `<div class="square" id="${index}">${square}</div>`;
        })
        document.querySelector('.gameBoard').innerHTML = boardHtml;
    }
    
    return {
        render,
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

    return{
        start,
    }

})();


const startButton = document.querySelector('.start-button');
startButton.addEventListener("click", function(){
     game.start();
});