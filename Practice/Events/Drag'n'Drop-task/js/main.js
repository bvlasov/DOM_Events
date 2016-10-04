//@todo fix it

var ball = document.getElementById('ball');

ball.onmousedown = function(e) {
  var self = this;

  var coords = getCoords(this);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  this.style.position = 'absolute';
  moveAt(e);

  //document.body.appendChild(this);

  this.style.zIndex = 1000;

  function moveAt(e) {
    self.style.left = e.pageX - shiftX + 'px';
    self.style.top = e.pageY - shiftY+ 'px';
  };

  document.addEventListener('mousemove', moveAt);


  this.onmouseup = function() {
    document.removeEventListener('mousemove', moveAt);
    self.onmouseup = null;
  };
};

ball.ondragstart = function() {
  return false;
};

/* Helper function */

function getCoords(elem) {
    // (1)
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    // (2)
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    // (3)
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    // (4)
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    // (5)
    return { top: Math.round(top), left: Math.round(left) };
}
