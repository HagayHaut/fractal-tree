let slider;

function setup() {
  createCanvas(640, 570);
  let angle = 0;
  slider = createSlider(0, TWO_PI, 0, 0.01);
}

function draw() {
  background(45);
  angle = slider.value();
  stroke(255);
  translate(320, height - 20);
  branch(175);
}

function branch(len) {
  weight = Math.log(len) / 2
  strokeWeight(weight);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67)
    pop();
  }
}