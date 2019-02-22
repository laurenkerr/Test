let wWidth = 0;
let wHeight = 0;
let fWidth = 0;
let fHeight = 0;
let overDragon = false;

class TextW {
    constructor(_x, _y) {
        this.pos = createVector(width * 0.5, height * 0.85);
    }

    render () {
        if (wWidth <= txt_water.width/3) { 
            wWidth = wWidth + 4;
        }
        if (wHeight <= txt_water.height/3) {
            wHeight = wHeight + 4;
        }     
        if (this.pos.y >= height) {
            this.pos.y = this.pos.y - 10;
        }
        image(txt_water, this.pos.x, this.pos.y, wWidth, wHeight); 
    }
}

class TextF {
    constructor(_x, _y) {
        this.pos = createVector( width * 0.79, height * 0.21);
        this.isShowing = true;
    }

    render () {
            if (mouseX > width * 0.77 && mouseX < width * 0.92 && mouseY > height * 0.19 && mouseY < height * 0.29 ) {  
            image(txt_feed, this.pos.x, this.pos.y, txt_feed.width *0.3, txt_feed.height *0.3); 
            }
        }
}