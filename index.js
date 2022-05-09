var numOfButtons = document.querySelectorAll(".drum").length;
// console.log(numOfButtons);  // 7

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var btnInnerHTML = this.innerHTML;

    switch (btnInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      default:
        console.log(btnInnerHTML);
        break;
    }
  });
}

// document.querySelectorAll(".drum")[i] --> This will select the particular button.
// .addEventListener("click", function () {alert("I got clicked");});  --> This "addEventListener" will listen to the event that we have given to that button like we have given a click, so whenever we click to that particular button it will run the function that we have given to it.

// var drumAudio = new Audio("sounds/tom-1.mp3");
// drumAudio.play();
