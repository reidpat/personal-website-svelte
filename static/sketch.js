//////////////////////////////////////////
// A q5.js "kitchen sink" example
// (https://github.com/LingDong-/q5xjs)
// Showcasing:
// - drawing commands
// - mouse events
// - transformation matrices
// - offscreen buffers
// - image operations/filters
// - vector math
// - reading pixels
// - randomness
// - particle system
// - using p5 addons
//   * p5.dom to create a slider
//   * p5.sound to create sound effect
//////////////////////////////////////////
// by Lingdong Huang 2020, Public Domain

// initialize q5
new Q5("global");

let cap;
let loaded = false;
let points = [];

let num = 200;

let noiseScale = 0.04;
let noiseRandom
let speed = 1;

let size = 2;

function preload(){
  //cap = loadImage('The-Starry-Night.jpg')
  //cap = loadImage('GU_Portrait_Reid.png')
//cap = loadImage('sky.jpeg')
// cap = loadImage('chip.jpg')
cap = loadImage('space.webp')
//cap = loadImage('lights2.jpg')
//cap = loadImage('chip2.jpg')
  //cap = loadImage('nebula.jpg')
}

window.addEventListener('resize', windowResized)

async function windowResized() {
    if (document.getElementById("boids-display")) {
        let elem = document.getElementById('home');
        cap.resize(elem.clientWidth - 1, elem.clientHeight);
        resizeCanvas(elem.clientWidth - 1 , elem.clientHeight);
        elementHeight = elem.clientHeight;
        background(50);
        // fill(0, 0, 0)
        // rect(0,0, width, height);

    }
  }

function setup() {
    //blendMode(REMOVE)
  // cap.hide();
  noiseDetail(20, 0.5);
  noiseRandom = random(1);
  noStroke();
  // createCanvas(cap.width, cap.height);
}
let mounted = false;
let elementHeight;
function draw() {
  //blendMode(SOFT_LIGHT)
  if (!mounted && document.getElementById("boids-display")) {
    let elem = document.getElementById('home');
    cap.resize(elem.clientWidth - 1, elem.clientHeight);
    mounted = true

    createCanvas(cap.width, cap.height); 
    elementHeight = elem.clientHeight;
     loaded = true;
     console.log('mils', millis())
    num = min(100000/millis(),500)
    console.log(num);
    for(let i = 0; i <  num; i++){
      points.push(createVector(random(width), random(height)));
    }
    //image(cap, width, height)
    // fill(0,20);
    // rect(0,0,width,height)
    background(50);
  }
  else if(mounted && scrollY < elementHeight){
    
    background(0, 12)
    //tint(255, 5)
    // image(cap,0,0)
    cap.loadPixels();
      
      for(let i = 0; i < num; i++){
        loadPoint(i);
    }
    noiseRandom += 0.001;
  }}
  
  function onScreen(v) {
    return v.x > 0 && v.x < width && v.y > 0 && v.y < height;
  }
  
  function loadPoint(i){
    let p = points[i];
        let off = (round(p.y) * width + round(p.x)) * 4;
        let color =  [
          cap.pixels[off],
          cap.pixels[off + 1],
          cap.pixels[off + 2],
        ]
        fill(color[0], color[1], color[2], 255); 
        rect(p.x, p.y, size, size)
        
        let n = noise(p.x * noiseScale + noiseRandom, p.y * noiseScale + noiseRandom) + noiseRandom;
  
      let a = TAU * n; //tau is 2*PI
      let xChange = cos(a) * speed;
      let yChange = sin(a) * speed;
      if(xChange > yChange){
        p.x += xChange;
      }
      else{
        p.y += yChange;
      }
      // p.x += xChange;
      // p.y += yChange;
      if (!onScreen(p) || random() < 0.01) {
        p.x = random(width);
        p.y = random(height);
      }
  }
  
  function isLoaded(){
    createCanvas(cap.width, cap.height);
    loaded = true;
      for(let i = 0; i <  num; i++){
        points.push(createVector(random(width), random(height)));
      }
  }