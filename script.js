// Get the canvas element
var canvas = document.getElementById("canvas");

// Set the canvas width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the game context
var ctx = canvas.getContext("2d");

// Define the car size and position
var carWidth = 50;
var carHeight = 100;
var carX = (canvas.width - carWidth) / 2;
var carY = canvas.height - carHeight - 50;

// Define the enemy car size and position
var enemyWidth = 50;
var enemyHeight = 100;
var enemyX = Math.floor(Math.random() * (canvas.width - enemyWidth));
var enemyY = -enemyHeight;

// Define the car speed and enemy speed
var carSpeed = 5;
var enemySpeed = isMobile() ? 6 : 3;

// Load the car image
var carImage = new Image();
carImage.src = "car.png";

// Load the enemy car image
var enemyImage = new Image();
enemyImage.src = "enemy.png";

// Listen for touch events
document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchmove", handleTouchMove);

// Touch event handlers
var xDown = null;
var yDown = null;

function handleTouchStart(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = event.touches[0].clientX;
  var yUp = event.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0 && carX > 0) {
      carX -= carSpeed;
    } else if (xDiff < 0 && carX < canvas.width - carWidth) {
      carX += carSpeed;
    }
  }

  xDown = null;
  yDown = null;

  event.preventDefault();
}

// Main game loop
function loop() {

  // Move the enemy car
  enemyY += enemySpeed;

  // Check for collision
  if (carX + carWidth > enemyX && carX < enemyX + enemyWidth && carY + carHeight > enemyY && carY < enemyY + enemyHeight) {
    console.log("Collision!");
    clearInterval(intervalId);
  }
