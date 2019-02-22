let img_beanstalk = []; 
let beanstalk;


class Beanstalk {
    constructor(_x, _y) {
        this.pos = createVector(width * 0.46, height * 0.52); 
        this.index=0;
        this.isGrowing = false;
        this.isUngrowing = false;
    }

    grow() {
        if (this.isGrowing) { 
            isRaining = false;
            rainCanSound = false;
            if (this.index >= 7) {
                this.index = 7;
                berry.run();
            } else {
                this.index = (this.index + 1);
            } 
            image(img_beanstalk[this.index], this.pos.x, this.pos.y, img_beanstalk[this.index].width / 6, img_beanstalk[this.index].height *0.15);    
        }
    }

    ungrow() { 
        if (this.isUngrowing) {
            if (berry.isDead) {
                this.isGrowing = false;
                if (this.index <= 1) {
                    this.isUngrowing = false; 
                }else{ this.index = (this.index - 1);
                }  
        image(img_beanstalk[this.index], this.pos.x, this.pos.y, img_beanstalk[this.index].width /6, img_beanstalk[this.index].height /6);
            }

        }
    }
}

