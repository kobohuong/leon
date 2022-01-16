import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood } from'./food.js'
let lastRendeerTime = 0
const gameBoard = document.getElementById / ('gameBoard')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderRime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRendeerTime = currentTime

    updater()
    draw()

}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML =''
    drawSnake()
}