function rollDice() {
  const max = 6;
  const roll = Math.ceil(Math.random() * max);
  console.log("You rolled", roll)

}


var imgObj = null;

var goodMovesText = [
  "Emily got a lawyer and fought her ticket and won",
  "Emily made a successful poetry account",
  "Emily got into psychology major",
  "Emily made a song with Chris",
  "Emily picked me up from work",
  "Emily reorganized her room",
  "Emily started her own babysitting business",
  "Emily rode the bull at CNE successfully" ,
  "Emily killed a spider jk prob didn’t happen maybe she did",
  "Emily knocked out her cousin"
];

var badMovesText = [
  "Emily got alcohol poisoning",
  "Emily realized what awko taco means" ,
  "Emily greened out",
  "Emily dances on stripper pole",
  "Emily tumbles down ski hill" ,
  "Emily got pulled over by a cop and yelled at" ,
  "Emily dropped out of a course" ,
  "Emily didn’t know how to make kraft dinner" ,
  "Coronavirus" ,
  "Emily ran from a spider"
];

//TODO MAKE FUNCTION THAT RANDOMLY GENERATES ARRAY INDEX FOR GOOD AND BAD MOVES (TWO FUNCTIONS). THAT NUMBER CALLED AT EVERY MOVE TO GENERATE SPOT

//DONE



// function genGood() {
//   var numGood = goodMovesText.length - 1
//   const goodMessageIndex = Math.ceil(Math.random() * numGood);
//   console.log("Good message: ", goodMovesText[goodMessageIndex]);
//
// }
//
// function genBad() {
//   var numBad = badMovesText.length - 1
//   const badMessageIndex = Math.ceil(Math.random() * numBad);
//   console.log("Bad message:", badMovesText[badMessageIndex]);
//
// }

//avatar initial spot
function init() {
  imgObj = document.getElementById('avatar');
  imgObj.style.position= 'relative';
  imgObj.style.top = '-20px';
  imgObj.style.left = '-1150px';
  swal("Welcome!", "Emily has fallen into wonderland just before her birthday trip to the cottage! Navigate your way through the board to help her make it out on time! \n\n To play, roll the dice until she successfully reaches the end. BEWARE, some spots will advance you forward more while others will make you go back!", "info");
}
//will move up diagonally


function moveForward() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
  imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';

  //generate random good text
  var numGood = goodMovesText.length - 1
  const goodMessageIndex = Math.ceil(Math.random() * numGood);
  console.log("Good message: ", goodMovesText[goodMessageIndex]);
  swal("Successful move!", goodMovesText[goodMessageIndex] , "success");

  //swal("Failed move", RANDOM TEXT HERE, "error"); --> for bad moves
}

function moveBackward() {
  imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
  imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';

  //generate random bad text
  var numBad = badMovesText.length - 1
  const badMessageIndex = Math.ceil(Math.random() * numBad);``
  console.log("Bad message:", badMovesText[badMessageIndex]);
  swal("Oh no!", badMovesText[badMessageIndex], "error");

  //swal("Failed move", RANDOM TEXT HERE, "error"); --> for bad moves
}

window.onload = init;
