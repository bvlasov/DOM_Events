(document.addEventListener('DOMContentLoaded', function() {

  /**
  Animation
  */
  var createWidthAnimation = function(finalWidth, elem) {
    var expose = {};
    var width = parseInt(getComputedStyle(elem).width);
    var interval;

    var animationStep = function() {
      if (width >= finalWidth) {
        clearInterval(interval);
      } else {
        width++;
        elem.style.width = width + 'px';
      }
    }

    expose.reset = function() {
      width = 150;
      elem.style.width = width + 'px';
      clearInterval(interval);
    }

    expose.stop = function() {
      clearInterval(interval);
    }

    expose.start = function() {
      interval = setInterval(animationStep, 5);
    }

    return expose;
  }

  var animation = createWidthAnimation(1000, document.getElementsByClassName('box')[0]);
  var resetBtnTemplate = document.createElement('a');
    var linkText = document.createTextNode('reset');
    resetBtnTemplate.appendChild(linkText);
    resetBtnTemplate.setAttribute('class', 'reset btn');
    resetBtnTemplate.setAttribute('id', 'resetBtn');
    resetBtnTemplate.href = '#';
    document.getElementsByClassName('container')[0].appendChild(resetBtnTemplate);
      // Wouldn't it be better to create the link via innerHTML???

  var resetBtn = document.getElementById('resetBtn');
  var startBtn = document.getElementsByClassName('start')[0];
  var stopBtn = document.getElementsByClassName('stop')[0];

  var isPlaying = false;

  var start = function(ev) {
    ev.preventDefault();
    console.log('start');

    if (!isPlaying) {
      animation.start();
      isPlaying = true;
    }
  }

  var stop = function(ev) {
    ev.preventDefault();

    if (isPlaying) {
      animation.stop();
      isPlaying = false;
    }
  }

  var reset = function(ev) {
    ev.preventDefault();

    isPlaying = false;
    animation.reset();
  }

  startBtn.addEventListener('click', start);
  stopBtn.addEventListener('click', stop);
  resetBtn.addEventListener('click', reset);

  /**
  Accordion
  */
  var accordion = document.getElementById('accordion');
  var previousOpened = null;

  var toggleSubmenu = function(ev) {
    ev.preventDeafault();

    var targetMenuItem;
    var menuItems = Object.keys(accordion.children)

    for (var item in menuItems) {
      if (accordion.children[item].contains(ev.target))
        targetMenuItem = accordion.children[item]
    }

    if (targetMenuItem !== previousOpened) {
      targetMenuItem.lastElementChild.style.height = 'auto';
      (previousOpened && (previousOpened.lastElementChild.style.height = '0'));
      previousOpened = targetMenuItem;
    } else {
      targetMenuItem.lastElementChild.style.height = '0';
      previousOpened = null;
    }
  }

  accordion.addEventListener('click', toggleSubmenu);
}))
