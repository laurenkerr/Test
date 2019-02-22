let rain = [];
let isRaining = false;

class Rain {
  constructor() {
    this.pos = createVector(random(width * 0.38, width * 0.62), random(height * 0.76, height * 0.9));
    this.gravity = 0;
    this.isRaining = false;
  }

  show() {
    noStroke();
    fill(0, 0, 139);
    ellipse(this.pos.x, this.pos.y, 2, 7);
  }

  update() {
    this.speed = random(5, 15);
    this.gravity = 0.2;
    this.pos.y = this.pos.y + this.speed * this.gravity;

    if (this.pos.y > height * 0.95) {
      this.pos.y = random(height * 0.76, height * 0.9);
      this.gravity = 0;
    }
  }

  run() {
      this.show();
      this.update();
  }

  killRain() { 
  rain.splice(0,1);
  this.isRaining = false;
  beanstalk.isGrowing = true;
  }   
}