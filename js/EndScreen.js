let overText = false;

class EndScreen {
    play() {
        fill(135, 206, 250,150);
        noStroke; 
        rect (160, 270,350,570);
       
        textAlign(CENTER);
        fill(255);
        
        textSize(35);
        text('The End', 160, 250);
        // pop();

        textSize(15);
        text('Play Again', 160, 325);
       }

    hover() {
        if (mouseX > 125 && mouseX < 195 && mouseY > 310 && mouseY < 328) { 
            fill(0,0,139);
                    textSize(15);
                    text('Play Again', 160, 325);
    } 
}

run() {
    this.play();
    this.hover();
}
}