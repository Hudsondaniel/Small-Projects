const X_class = 'x'
const circle_class = 'circle'
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
})

function handleClick(e) {
    // You will have to place mark
    // You need to check for win and draw
    //Also, switch turns
    const cell = e.target
    const currentClass = circleTurn? circle_class : X_class
    placeMark(cell, currentClass)
    swapTurns()
    setBoardHoverClass()

}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_class)
    board.classList.remove(circle_class)
    if(circleTurn)
      board.classList.add(circle_class)
    else
      board.classList.add(X_class)
}