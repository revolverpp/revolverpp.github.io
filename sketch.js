var alpha;
var x;
var y;
var points = [];
var dalpha;
var canvas;

function setup() {
  canvas = createCanvas(500, 300);
  canvas.position((windowWidth - width), (windowHeight - height) / 2);
  frameRate(60);

  alpha = 0;
  dalpha = TWO_PI / 60;
  x = 350;
  y = 350;
}

function drawMainLine() {
  strokeWeight(2);
  stroke(150);
  line(0, height / 2, width - 150, height / 2);
}

function draw() {
  background(51);
  drawMainLine();

  noStroke();
  fill(255);
  y = height / 2 + sin(alpha) * 100;
  ellipse(350, y, 20);

  noFill();
  strokeWeight(3);
  stroke(255);
  beginShape();
  var i;
  for (i = points.length; i >= 0; i--) {
    var x = 350 - abs(points.length - i);
    if (x < 0) {
      points = points.slice(i, points.length);
      break;
    }
    vertex(x, points[i]);
  }
  endShape();
  points.push(y);

  alpha += dalpha;
  if (alpha >= TWO_PI - dalpha)
    alpha = 0;
}
