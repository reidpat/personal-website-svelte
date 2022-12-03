let qtree;

const flock = [];

let alignmentSlider, cohesionSlider, separationSlider;

let lastMX, lastMY, lastMouseVector;

let created = false;

let widthReduction = 20;

function setup() {
}

function windowResized() {
  if (document.getElementById("boids-display")) {
    let home = document.getElementById("home");
    let homeElementHeight = home.clientHeight;
    resizeCanvas(windowWidth - widthReduction, homeElementHeight);
  }
}

let home;
let backgroundColor;
let homeElementHeight;

function draw() {
  if (!homeElementHeight || scrollY < homeElementHeight) {
    let element = document.getElementById('home')
    if (!home && element) {
      home = document.getElementById("home")
      const cssObj = window.getComputedStyle(element, null);

      backgroundColor = cssObj.getPropertyValue("background-color");
    }
    if (document.getElementById("boids-display")) {
      console.log(scrollY);
      console.log('home', homeElementHeight)
      let element = document.getElementById("boids-display");
      homeElementHeight = document.getElementById("home").clientHeight;
      if (!created && element) {
        var clientWidth = element.clientWidth;

        var canvas = createGraphics(clientWidth - 1, homeElementHeight);
        canvas.parent("boids-display");

        lastMX = mouseX;
        lastMY = mouseY;
        lastMouseVector = createVector();

        for (let i = 0; i < 200; i++) {
          flock.push(new Boid());
        }
        created = true;
      } else if (created) {
        if (flock.length < 300 && random(1) < 0.08) {
          flock.push(new Boid());
        }

        background(color(backgroundColor));

        let mouseVector = createVector();

        mouseVector = createVector(mouseX - lastMX, mouseY - lastMY);
        lastMX = mouseX;
        lastMY = mouseY;
        mouseVector.setMag(0.02);

        if (mouseVector.equals(createVector(0, 0))) {
          mouseVector = lastMouseVector;
        } else {
          lastMouseVector = mouseVector;
        }

        let boundary = new Rectangle(width / 2, height / 2, height, width);
        qtree = new QuadTree(boundary, 4);

        for (let f of flock) {
          let point = new Point(f.position.x, f.position.y, f);
          qtree.insert(point);
          f.update();
          f.show();
          f.mouseInfluence(mouseVector);
        }

        for (let f of flock) {
          let range = new Circle(f.position.x, f.position.y, 20);
          let points = qtree.query(range);

          //console.log(range);

          if (points) {
            f.flock(points);
          }
        }
      }
    }
  }
}
