
(function (window) {
    // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
  // See Lecture 52, part 2
  
  
  var helloSpeaker = {};
  
 
    var speakWord = "Hello";
  
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    window.helloSpeaker = helloSpeaker;
  
  })(window);
  