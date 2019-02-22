let imgSky, imgHills, imgSun, imgPot

let potX = 0;
let seedY = -10;

//AUDIO
let music, seedSound, thunder, audRain, audMunch, audSpit;
let isThunder = false;
let isPlaying = false;

//CONSTANTS
let spitNUM_IMAGES = 9;
let NUM_IMAGES = 9;
let beanNUM_IMAGES = 8;
let berryNUM_IMAGES = 18;
let cloudsNUM_IMAGES = 7;

let txt_water, txt_feed, textW, textF;
let notRaining = true;
let rainCanSound = true;
let end;
let isOver = false;



function preload() {
  imgSky = loadImage('assets/background/Sky.png');
  imgHills = loadImage('assets/Hills.png');
  imgSun = loadImage('assets/Sun.png');
  imgPot = loadImage('assets/background/pot.png');
  txt_water = loadImage('assets/water.png');
  txt_feed = loadImage('assets/feed.png');
  
  for (let i = 0; i < NUM_IMAGES; i++) {
    img_dragon[i] = loadImage("assets/dragons/dragon" + i + ".png");
  }

  for (let i = 0; i < berryNUM_IMAGES; i++) {
    img_berry[i] = loadImage("assets/berries/berry" + i + ".png");                     
  }
       
  for (let i = 0; i < beanNUM_IMAGES; i++) {
  	img_beanstalk[i] = loadImage("assets/beanstalks/beanstalk" + i + ".png");
  }

  for (let i = 0; i < spitNUM_IMAGES; i ++) {
    img_spit[i] = loadImage("assets/spit/spit" + i + ".png");
  }

  for (let i = 0; i < cloudsNUM_IMAGES; i ++) {
    img_clouds[i] = loadImage("assets/Clouds/Cloud" + i + ".png");
  }

//Big Cloud  
  imgBcloud = loadImage('assets/gray outline of big cloud.png');
  imgBTcloud = loadImage('assets/top of big cloud.png');
  imgBBcloud = loadImage('assets/bottom of big cloud.png');
  imgOBcloud = loadImage('assets/background/cloudopening.png');
  
//Audio
  soundFormats('mp3', 'ogg');
  music = loadSound('assets/audio/Snack_Time.mp3');
  seedSound = loadSound('assets/audio/seed.mp3');
  audRain = loadSound('assets/audio/rain.mp3');
  thunder = loadSound('assets/audio/thunder.mp3');
  audMunch = loadSound('assets/audio/munch.mp3');
  audSpit = loadSound('assets/audio/spitsound.mp3');
}

function setup() {
  canvas = createCanvas(320,540);
  canvas.position ((windowWidth/2) - 160, windowHeight *0.2);
	rectMode(CENTER);
  
//RAIN
  for (var i = 0; i < 100; i++) {
    rain[i] = new Rain();
  }
   
   rainCloudX = width*0.57;
   rainCloudY = height * 0.74;

//AUDIO
  music.setVolume(0.06);
  music.play();  
  seedSound.setVolume(0.04);
  seedSound.play();
  audRain.setVolume(30);
  thunder.setVolume(1);
  audMunch.setVolume(1);
  audRain.setVolume(1);
  audSpit.setVolume(.1);

//CLASSES 
  rainCloud = new Raincloud(); 
  dragon = new Dragon(width * 0.7, height * 0.4);
  beanstalk = new Beanstalk(width * 0.5, height * 0.9);
  berry = new Berry();
  spit = new Spit(width * 0.5, height * 0.4);
  seed = new RandomWalker();
  clouds = new Clouds();
  textW = new TextW();
  textF = new TextF();
  end = new EndScreen();
}
 

function draw() {
 background(135, 206, 250);
  // fill(135, 206, 250);
  
//BACKGROUND IMAGES
  imageMode(CENTER);
  // image(imgSky, width * 0.5, height * 0.5, imgSky.width / 6, imgSky.height / 6);
  image(imgHills, width * 0.5, height * 0.93, imgHills.width / 5, imgHills.height / 4);
  image(imgSun, width * 0.34, height * 0.75, imgSun.width / 6, imgSun.height / 6);
  clouds.render();

//Seed
push();
  push();
  noStroke();
  fill(140, 42, 42);
  ellipse(width * 0.504, seedY, 4, 8);
  if (potX >= width * 0.5) {  
  if (seedY > height * 0.9) {
      seedY = seedY - 4;
    } 
    seedY = seedY + 4;
  }
  
  pop();

//Second seed 
  seed.run();

//Pot
  push();
  image(imgPot, potX, height * 0.91, imgPot.width *0.2, imgPot.height *0.2);
  if (potX >= width * 0.5) {
    potX = potX - 5;
  }
  potX = potX + 5
  pop();
 
//RAIN 
  Rain
  if (isRaining) {
    for (var i = 0; i < rain.length; i++) {
      rain[i].run();
      setTimeout(rain[i].killRain, 4000);
      notRaining = false;
    }
  }
    rainCloud.show();
    rainCloud.display();
  
//BEANSTALK
  beanstalk.grow();
  beanstalk.ungrow();
 
  image(imgBBcloud, width * 0.5, height * .35, imgBBcloud.width/6, imgBBcloud.height/6);
  image(imgOBcloud, width * 0.5, height * .32, imgOBcloud.width * 0.25, imgOBcloud.height * 0.3);

//DRAGON
if (dragonAlive){
 dragon.run();
 }

//Spit
 spit.run();

//TEXT
if (notRaining) {
  if (seedY >= height * 0.88) {
    textW.render();
  } 
}

if (textF.isShowing) {
textF.render();
}
if (isOver) {
end.run();
}
}


function mouseClicked() {
      if (beanstalk.isGrowing) {
        let d = dist(mouseX, mouseY, width * 0.52, height * 0.22);
        if (d <= 15) {
          dragon.isBerryClicked = !dragon.isBerryClicked;
        }
      text.feed = false;
      setTimeout(berry.playMunch, 2500);
    } 
  
  if (berry.isDead) {
    let d = dist(mouseX, mouseY, width * 0.61, height * 0.26);
    if (d <= 20) {
      dragon.isClicked = true;
      audSpit.play();
      setTimeout(seed.playSound, 450);
    }
  }

if (isOver) {
  let d = dist(mouseX, mouseY, 160,319);
  if (d <= 50) {
   refresh();
  }
}
}

function mousePressed() {
  if (rainCanSound) {
  if(rainCloud.overRainCloud) { 
    locked = true; 
    thunder.play();
  } else {
    locked = false;
    thunder.stop();
  }
}
  xOffset = mouseX-rainCloud.pos.x; 
  yOffset = mouseY-rainCloud.pos.y; 
}

function mouseDragged() {
  if(locked) {
    rainCloud.pos.x = mouseX-xOffset; 
    rainCloud.pos.y = mouseY-yOffset; 
  }
}

function mouseReleased() {
  locked = false;
    if (rainCloud.pos.x > width * 0.4 && rainCloud.pos.x < width * 0.6 && mouseX > width * 0.4 && mouseX < width * 0.6
      && rainCloud.pos.y > height * 0.7 && rainCloud.pos.y < height * 0.9 && mouseY > height * 0.7 && mouseY < height * 0.9) {  
        isRaining = true; 
    }else{
      isRaining = false;
    }
  if (isRaining){
    if (rainCanSound) {
   audRain.play();  
  }
 }
}

function refresh() {
  location.reload();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

