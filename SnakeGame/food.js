let food= { x: 10, y: 1}
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(Food)) {
        food = { x: 20, y: 10 }
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        snakeElement.classList.add('food')
        gameBoard.appendChild(snakeElement)

}