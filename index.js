//Randomized autoplay
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detecting random beat button press

document.querySelector(".random-beat").addEventListener("click", function () {
  this.classList.add("pressed-beat-generator");

  var numberOfRandomBeat = 30;

  var randomPlayer = setInterval(() => {
    var randomNoteArrayIndex = Math.floor(
      Math.random() * (numberOfDrumButtons + 1)
    );

    var selectedNote = document.querySelectorAll("button")[
      randomNoteArrayIndex
    ];

    makeSound(selectedNote.innerHTML);
    buttonAnimation(selectedNote.innerHTML);

    numberOfRandomBeat--;

    if (numberOfRandomBeat === 0) {
      clearInterval(randomPlayer);
      this.classList.remove("pressed-beat-generator");
    }

  }, 120);

});

//Detecting button press

var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i<numOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation (buttonInnerHTML);

  });
}

//Detecting keyboard press

document.addEventListener("keydown", function(event){
  makeSound(event.key.toLowerCase());
  buttonAnimation (event.key.toLowerCase());
}
)

//Creating makeSound function
function makeSound(key){
  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.log("buttonInnerHTML");

  }
}

//Creating buttonAnimation

function buttonAnimation (currentKey){

  var activeButton= document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
  activeButton.classList.remove("pressed")},
  100 )

}
