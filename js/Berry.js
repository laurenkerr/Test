let img_berry = [];
let berry;

class Berry {
  constructor(_x, _y) {
    this.pos = createVector(width * 0.52, height * 0.22);
    this.isDead = false;
    this.index = 0;
    img_berry.resize
  }

  run() {
    if (dragon.eatingBerry) {
      if (this.index >= 17) {
        this.index = 17;
        this.isDead = true;
        textF.feed = false;
        dragon.eatingBerry = false;
        beanstalk.isUngrowing = true;
      } else {
        this.index = (this.index + 1);
      }  
    }
    image(img_berry[this.index], this.pos.x, this.pos.y, img_berry[this.index].width /6,  img_berry[this.index].height /6); 
  }

  playMunch() {
    audMunch.play();
  }
}