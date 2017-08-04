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
  var p = tracker.getCurrentPostition();
  ellipse(p[62][0], p[62][1], 20, 20);
}
