// Define constants
const a = 1;
const b = 0.5;
const c = 0;

// Set canvas size
const width = 600;
const height = 600;

function setup() {
  // Create canvas
  createCanvas(width, height);

  // Set the background color to white
  background(255);

  // Move the origin to the center of the canvas
  translate(width/2, height/2);

  // Draw a grid
  stroke(200);
  for (let i = -width/2; i < width/2; i += 20) {
    line(i, -height/2, i, height/2);
    line(-width/2, i, width/2, i);
  }

  // Draw the graph
  stroke(0);
  beginShape();
  for (let i = 0; i <= TWO_PI; i += 0.01) {
    const r = a * cos(b * i) + c;
    const x = r * cos(i);
    const y = r * sin(i);
    vertex(x, y);
  }
  endShape();
}
