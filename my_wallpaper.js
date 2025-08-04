let paramSets = [
  { size: 50, lineWidth: 2, spacing: 150, angle: 0,             colorMode: 0 },
  { size: 50, lineWidth: 2, spacing: 150, angle: Math.PI/4,     colorMode: 1 },
  { size: 80, lineWidth: 3, spacing: 180, angle: Math.PI/8,     colorMode: 0 },
  { size: 60, lineWidth: 4, spacing: 200, angle: Math.PI/6,     colorMode: 1 },
  { size:100, lineWidth: 5, spacing: 250, angle: Math.PI/2,     colorMode: 0 },
  { size: 40, lineWidth: 1, spacing: 120, angle: Math.PI/3,     colorMode: 1 },
  { size: 70, lineWidth: 3, spacing: 160, angle: Math.PI/5,     colorMode: 0 },
  { size: 90, lineWidth: 4, spacing: 220, angle: Math.PI/7,     colorMode: 1 },
  { size:120, lineWidth: 6, spacing: 300, angle: Math.PI * 0.75, colorMode: 0 }
];

function setup() {
  createCanvas(2000, 1000);
  noLoop();
}

function draw() {
  for (let i = 0; i < paramSets.length; i++) {
    let p = paramSets[i];
    background(255);
    drawMotifGrid(p);
    saveCanvas(`Wallpaper${i+1}`, 'png');
  }
}

function drawMotifGrid(p) {
  let cols = floor(width / p.spacing);
  let rows = floor(height / p.spacing);
  for (let ix = 0; ix < cols; ix++) {
    for (let iy = 0; iy < rows; iy++) {
      let x = ix * p.spacing + p.spacing/2;
      let y = iy * p.spacing + p.spacing/2;
      drawMotif(x, y, p);
    }
  }
}

function drawMotif(x, y, p) {
  push();
    translate(x, y);
    rotate(p.angle);
    stroke(0);
    strokeWeight(p.lineWidth);
    if (p.colorMode === 0) {
      fill(200, 50, 50, 150);
    } else {
      noFill();
    }
    ellipse(0, 0, p.size);
    for (let k = 0; k < 4; k++) {
      rotate(HALF_PI);
      line(0, p.size/2, 0, p.size/2 + p.lineWidth*5);
    }
  pop();
}
