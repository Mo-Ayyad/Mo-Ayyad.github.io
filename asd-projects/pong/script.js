var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Ball object
var ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  speed: 5,
  dx: 5,
  dy: -5,
};

// Paddle objects
var player1 = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  width: 180,
  height: 10,
  speed: 10,
  dx: 0,
  score: 0,
};

var player2 = {
  x: canvas.width / 2 - 40,
  y: 10,
  width: 180,
  height: 10,
  speed: 10,
  dx: 0,
  score: 0,
};

// Draw ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

// Draw paddles
function drawPaddles() {
  ctx.beginPath();
  ctx.rect(player1.x, player1.y, player1.width, player1.height);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(player2.x, player2.y, player2.width, player2.height);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

// Move paddles
function movePaddles() {
  player1.x += player1.dx;
  player2.x += player2.dx;

  // Wall detection
  if (player1.x < 0) {
    player1.x = 0;
  }

  if (player1.x + player1.width > canvas.width) {
    player1.x = canvas.width - player1.width;
  }

  if (player2.x < 0) {
    player2.x = 0;
  }

  if (player2.x + player2.width > canvas.width) {
    player2.x = canvas.width - player2.width;
  }
}

// Move ball
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Wall collision (right/left)
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }

  // Wall collision (top/bottom)
  if (ball.y + ball.radius > canvas.height) {
    player2.score++;
    reset();
  } else if (ball.y - ball.radius < 0) {
    player1.score++;
    reset();
  }

  // Player 1 collision
  if (
    ball.x > player1.x &&
    ball.x < player1.x + player1.width &&
    ball.y + ball.radius > player1.y
  ) {
    ball.dy = -ball.speed;
  }

  // Player 2 collision
  if (
    ball.x > player2.x &&
    ball.x < player2.x + player2.width &&
    ball.y - ball.radius < player2.y + player2.height
  ) {
    ball.dy = ball.speed;
  }
}

// Update screen
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddles();
  movePaddles();
  moveBall();
  drawScores();

  if (player1.score === 5) {
    alert("Player 1 wins!");
    player1.score = 0;
    player2.score = 0;
  }
  
  if (player2.score === 5) {
    alert("Player 2 wins!");
    player1.score = 0;
    player2.score = 0;
  }
  
  // Update screen
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    drawBall();
    drawPaddles();
    movePaddles();
    moveBall();
    drawScores();
  
    requestAnimationFrame(update);
  }
  
  // Draw scores
  function drawScores() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Player 1: " + player1.score, 20, canvas.height - 40);
    ctx.fillText("Player 2: " + player2.score, 20, 40);
  }
  
  // Keyboard controls
  document.addEventListener("keydown", function (event) {
    if (event.key == "a") {
      player1.dx = -player1.speed;
    } else if (event.key == "d") {
      player1.dx = player1.speed;
    }
  
    if (event.key == "ArrowLeft") {
      player2.dx = -player2.speed;
    } else if (event.key == "ArrowRight") {
      player2.dx = player2.speed;
    }
  });
  
  document.addEventListener("keyup", function (event) {
    if (event.key == "a" || event.key == "d") {
      player1.dx = 0;
    }
  
    if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
      player2.dx = 0;
    }
  });
  
  // Start the game
  update();
}
