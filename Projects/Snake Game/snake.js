// Initialize canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define constants
const box = 20;
const canvasSize = 20 * box;
const snakeSpeed = 150; // Milliseconds

// Initialize snake
let snake = [];
snake[0] = { x: 10 * box, y: 10 * box };

// Initialize food
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };

// Initialize direction
let d;

// Listen for keyboard events
document.addEventListener("keydown", direction);

function direction(event) {
    if (event.keyCode === 37 && d !== "RIGHT") {
        d = "LEFT";
    } else if (event.keyCode === 38 && d !== "DOWN") {
        d = "UP";
    } else if (event.keyCode === 39 && d !== "LEFT") {
        d = "RIGHT";
    } else if (event.keyCode === 40 && d !== "UP") {
        d = "DOWN";
    }
}

// Check collision function
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Draw everything to canvas
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    // Draw snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Move snake
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d === "LEFT") snakeX -= box;
    if (d === "UP") snakeY -= box;
    if (d === "RIGHT") snakeX += box;
    if (d === "DOWN") snakeY += box;

    // Check if snake eats food
    if (snakeX === food.x && snakeY === food.y) {
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    // Create new head
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Game over conditions
    if (
        snakeX < 0 ||
        snakeX >= canvasSize ||
        snakeY < 0 ||
        snakeY >= canvasSize ||
        collision(newHead, snake)
    ) {
        clearInterval(game);
    }

    // Insert new head
    snake.unshift(newHead);
}

// Run game every snakeSpeed milliseconds
let game = setInterval(draw, snakeSpeed);
