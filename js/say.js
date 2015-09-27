/* globals SpeechSynthesisUtterance: true */
function say() {
  'use strict';
  if (window.speechSynthesis !== undefined) {
    var instruction = arguments[0];
    var pitch = 0.8;
    var rate = 1.0;
    var volume = 15.0;

    var speechObject = new SpeechSynthesisUtterance(instruction);
    speechObject.volume = volume;
    speechObject.rate = rate;
    speechObject.pitch = pitch;
    window.speechSynthesis.speak(speechObject);
  }
}
