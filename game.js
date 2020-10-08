//Game Loop
import { update as updateSnake, draw as drawSnake, snake_speed } from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snake_speed) return

    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}