//set the click EventListener to all the buttons
// and cast handleClick if event is caught
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
// play the accouring sound for each drumset part
function handleClick() {
  var buttonInnerHtml = this.innerHTML;
  playSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/ghost_horror_whispers.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/ghostly_breath.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/ghostly_presence.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/ghostly_whisper_short.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/horror_tension_short.mp3');
      crash.play();
      break;
    case "k":
      var bass = new Audio('sounds/red_dragon_void.mp3');
      bass.play();
      break;
    case "l":
      var snare = new Audio('sounds/spooky_ambient_170sec.mp3');
      snare.play();
      break;
    case "i":
      var hihat1 = new Audio('sounds/treeman_haul_roar_deep.mp3');
      hihat1.play();
      break;
    case "o":
      var hihat2 = new Audio('sounds/treeman_roar_2.mp3');
      hihat2.play();
      break;
    default: console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 75);
}
