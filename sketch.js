var col = {
  r: 255,
  g: 0,
  b: 0,
}

function setup() {
  createCanvas(360, 360);
    background(10, 100, 1000);
}

function draw() {
  
  // Color Setup
  col.r = random(0, 255)
  col.b = random(0, 255)
  col.g = random(0, 255)
  fill(col.r, col.b, col.g)
  
  // The Middle Of Rocket
  rectMode(CENTER);
  rect(150, 150, 100, 150);
 
  // The Window Of Rocket
  ellipseMode(CENTER);
  ellipse(150, 150, 60, 70);
  
  // The Top Of The Rocket
  triangle(100, 75, 148, 20, 200, 75);
 
  // The Bottom of the rocket(The Fire)
  triangle(150, 275, 158, 220, 100, 220);
    triangle(150, 275, 200, 220, 150, 220);
    
    // Wings
triangle(200, 75, 289, 200, 200, 200);
triangle(100, 75, 100, 200, 18, 200)
}