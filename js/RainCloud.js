let rainCloudWidth; 
let rainCloudHeight;
let overRainCloud = false;
let locked = false;
let xOffset = 0.0; 
let yOffset = 0.0; 
let imgCloud6;

class Raincloud {
    constructor() {
      this.pos = createVector (width * 0.8, height * 0.76);
      this.overRainCloud = false;
      this.isThunder = false;
    }
  
    show() {
      image(img_clouds[6], this.pos.x, this.pos.y, img_clouds[6].width /6, img_clouds[6].height /6);
    }
  
    display() {
      if (mouseX > this.pos.x - 50 && mouseX < this.pos.x + 50 && mouseY > this.pos.y - 15 && mouseY < this.pos.y +15) { 
        this.overRainCloud = true;
        this.isThunder = true;
      } else {
        this.overRainCloud = false;
        this.isThunder = false;
      }
    }
  
    playThunder() {
      if (thunder.isPlaying()) { 
        thunder.play()
      } else {
        thunder.stop();
      }
    }
}



