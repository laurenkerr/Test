let clouds;
let img_clouds = [];

//Big Cloud
let imgBcloud, imgTBcloud, imgBBcloud, imgOBcloud;

class Clouds {
    constructor() {
    this.pos = createVector();
    this.float = 18;
		this.maxHeight = 42;
		this.minHeight = 33;
		this.floatSpeed = .04;
    }
    
    update() {
      this.float = map(sin((millis() * 0.05) * this.floatSpeed), -1.0, 1.0, this.maxHeight, this.minHeight)	
      return this;
    }
    
    display() {
       image(img_clouds[0], map(mouseX, 0, width, width*0.21, width*0.26), height * 0.7 + this.float, img_clouds[0].width /6, img_clouds[0].height /6);
       image(img_clouds[1], map(mouseX, 0, width, width*0.72, width*0.67), height * 0.67 + this.float, img_clouds[1].width /6, img_clouds[1].height /6);
       image(img_clouds[4], map(mouseX, 0, width, width*0.7, width*0.65), height * 0.012 + this.float, img_clouds[4].width /6, img_clouds[4].height/6);
       image(img_clouds[5], map(mouseX, 0, width, width*0.07, width*0.12), height * 0.08 + this.float, img_clouds[5].width /6, img_clouds[5].height /6);
       image(img_clouds[2], map(mouseX, 0, width, width*0.45, width*0.4), height * 0.47 + this.float, img_clouds[2].width /6, img_clouds[2].height /6);
       image(img_clouds[3], map(mouseX, 0, width, width*0.75, width*0.8), height * 0.047 + this.float, img_clouds[3].width /6, img_clouds[3].height /6);

      //Big Cloud 
       image(imgBcloud, width * 0.5, height * 0.31, imgBcloud.width /5.6, imgBcloud.height /6);
       image(imgBTcloud, width * 0.5, height * 0.28, imgBTcloud.width /5.6, imgBTcloud.height /6);
       return this;
    }

    render() {
		return this.update().display();
	  }
}

