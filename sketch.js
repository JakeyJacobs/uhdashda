var paddle1;
var paddle2;
var ball;
var speedX = 7;
var speedY = 7;

paddle1 = {
  x: 775,
  y: 250,
  w: 25,
  h: 150,
};

paddle2 = {
  x: 0,
  y: 250,
  w: 25,
  h:150
}

ball = {
  x: 400,
  y: 300,
  w: 25,
  h: 25,
};

function setup() {
  createCanvas(800, 600);
  //alert("This is a simple multiplayer pong game. Player 1 uses the up and down keys and player 2 uses W and D keys (no caps).");
}

function draw() {
  background(0);

  createBall();
  createPaddle1();
  createpaddle2();
  bounceSides();
  hitPad1();
  hitPad2();

  paddle1.y = mouseY;
  paddle2.y = mouseY;
}

function createBall() {
  fill(255);
  ellipse(ball.x, ball.y, ball.w, ball.h);

    ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;
}

function createPaddle1() {
  fill(255);
  rect(paddle1.x, paddle1.y, paddle1.w, paddle1.h);
}

function createpaddle2() {
  fill(255);
  rect(paddle2.x, paddle2.y, paddle2.w, paddle2.h);
}

function bounceSides() {
  if(ball.y > height) {
    speedY = -7;
  } else if(ball.y < 0) {
    speedY = 7;
  }

  if(ball.x > width) {
    ball.x = 400;
    ball.y = 500;
    ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;
  } else if(ball.x < 0) {
    ball.x = 400;
    ball.y = 500;
    ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;
  }
}

function hitPad1() {
  if (ball.x + 12.5 > paddle1.x && ball.y + 12.5 > paddle1.y && ball.y + 12.5 < paddle1.y + paddle1.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX -7;
      ball.x = ball.x + speedX;
} else if (ball.y + 12.5 > paddle1.y && ball.y < paddle1.y + paddle1.y + paddle1.h && ball.x + 12.5 > paddle1.x && ball.x < paddle1.x + paddle1.x && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY -7;
      ball.y = ball.y + speedY;
} else if (ball.y + 12.5 < paddle1.y + paddle1.h && ball.y > paddle1.y && ball.x > paddle1.x && ball.x < paddle1.x + paddle1.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedY = speedY -7;
      ball.y = ball.y + speedY;
    }
}

function hitPad2() {
  if (ball.x - 12.5 < paddle2.x + paddle2.w && ball.y + 12.5 > paddle2.y && ball.y + 12.5 < paddle2.y + paddle2.h && ball.x > 0 && ball.x < width && ball.y > 0 && ball.y < height) {
      speedX = speedX +7;
      ball.x = ball.x + speedX;
  } else if(ball.y - 12.5 < paddle2.y && ball.y > paddle1.y - paddle1.y - paddle1.h && ball.x - 12.5 < paddle1.x && ball.x > paddle1.x - paddle1.x && ball.x < 0 && ball.x > width && ball.y < 0 && ball.y > height) {
    speedX = speedX +7;
    ball.x = ball.x + speedX;
  } else if(ball.y - 12.5 > paddle1.y - paddle1.h && ball.y < paddle1.y && ball.x < paddle1.x && ball.x > paddle1.x - paddle1.h && ball.x < 0 && ball.x > width && ball.y < 0 && ball.y > height) {
    speedX = speedX +7;
    ball.x = ball.x + speedX;
  }
}
