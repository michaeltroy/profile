// import React from 'react'
// import ReactDOM from 'react-dom'

var controller = new ScrollMagic.Controller();






// Profile pic
var scene1 = new ScrollMagic.Scene({
    triggerElement: ".intro_picture",
    offset: 400,
    duration: '100%'
  })
  .setTween(
  ".intro_picturex img", 1, {
    //bottom: -400,
    transform: 'translate3d(0, 400px, 0)',
    //transform: 'translateY(200px)',
    ease: Power0.easeNone
  });
  //.addIndicators();






// .intro_greeting
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".intro_picture",
    offset: 400,
    duration: '100%'
  })
  .setTween(
  ".intro_greetingx", 1, {
    //transform: 'translateY(-400px)',
    transform: 'translate3d(0, -400px, 0)',
    ease: Power0.easeNone
  });
  //.addIndicators();


// Document
var scene3 = new ScrollMagic.Scene({
    triggerElement: ".intro_picture",
    offset: 400,
    duration: '100%'
  })
  .setTween(
  ".documentx", 1, {
    transform: 'translate3d(0, 400px, 0)',
    ease: Power0.easeNone
  });


controller.addScene([
  scene1,
  scene2,
  scene3
]);
