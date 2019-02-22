let seed;

class RandomWalker {
	constructor() {
		this.pos = createVector(width * 0.585, height * 0.215);
		this.vel = createVector(0.5, 0);
		this.acc = createVector();
    }
    
	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.vel.x = map(this.pos.x, 0, width * 0.47, 5, 0);
			if (this.vel.x <= 0.5) {
				this.vel.y += 0.05;
			}
		  return this;
  }
    
	display() {
        noStroke();
        fill(140, 42, 42);
        ellipse(this.pos.x, this.pos.y, 4, 8);
		return this;
  }

  edges() {
		if (this.pos.y >= (height * 0.9) ){
			this.vel.y *= 0;
			this.vel.x *= 0;
			isOver = true;
		}
		return this;
  }

  playSound() {
	seedSound.play();
	}
	
	run() {
		if (spit.isSpitting) {
		  return this.update().display().edges();
		}
	}
}