var capture;
var tracker;

function setup() {
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.position(0, 0);

  var c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);

  tracker = new clm.trackr();
  tracker.init(pModel);
  tracker.start(capture.elt);
}

function draw() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
