var imgObj = null;

var goodMovesText = [
  "Emily got a lawyer to fight her ticket and won!",
  "Emily made a successful poetry account!",
  "Emily got into her psychology major!",
  "Emily made a song with Chris!",
  "Emily picked Nicole up from work!",
  "Emily reorganized her room!",
  "Emily started her own successful babysitting business!",
  "Emily rode the bull at CNE successfully!" ,
  "Emily killed a spider! (jk probably didn’t happen but let's say she did)",
  "Emily knocked out her cousin!",
  "Emily makes Ryan smile. GOAT girlfriend alert."
];

var badMovesText = [
  "Emily got alcohol poisoning :(",
  "Emily realized what awko taco means :(" ,
  "Emily greened out:(",
  "Emily dances on a stripper pole :(",
  "Emily tumbles down ski hill:(" ,
  "Emily got pulled over by a cop and yelled at :(" ,
  "Emily dropped out of a course:(" ,
  "Emily didn’t know how to make kraft dinner:(" ,
  "Coronavirus oof :(" ,
  "Emily ran from a spider:("
];

var everySpot = [
[-36,-1161],[-120,-1128], [-171,-1115], [-221,-1096], [-264,-1081], [-317,-1067], [-369,-1057], [-423,-1046], [-480,-1033], [-543,-1025], [-616,-1004], [-629,-946], [-598,-903],
[-561,-880], [-519,-853], [-472,-818], [-424,-784], [-343,-745], [-253,-692], [-187,-669], [-108,-641],[-33,-607], [-6,-513], [-65,-489], [-126,-465], [-187,-447],
[-247,-437], [-312,-437], [-372,-437], [-434,-437], [-493,-437], [-555,-437], [-618,-428], [-672,-423], [-726,-357], [-669,-306], [-615,-295], [-544,-288], [-485,-284],
[-423,-284], [-368,-284], [-303,-284], [-243,-284], [-168,-279], [-101,-268], [-46,-247],  [-21,-182], [-34,-120], [-94,-72], [-164,-72], [-224,-72], [-281,-72], [-347,-76],
[-405,-76], [-461,-81], [-527,-84], [-603,-89], [-709,-92]

]

var goodSpots = [['-317px','-1067px'], ['-543px','-1025px'], ['-519px','-853px'], ['-343px','-745px'], ['-33px','-607px'], ['-65px','-489px'], ['-312px','-437px'], ['-555px','-437px'], ['-726px','-357px'], ['-485px','-284px'], ['-94px','-72px'], ['-164px','-72px'], ['-603px','-89px']];
var badSpots = [['-616px','-1004px'], ['-424px','-784px'], ['-187px','-669px'], ['-187px','-447px'], ['-434px','-437px'], ['-615px','-295px'], ['-368px','-284px'], ['-243px','-284px'], ['-168px','-279px'], ['-21px','-182px'], ['-347px','-76px'], ['-461px','-81px'], ['-527px','-84px']];

var goodTop = [-317, -543,-519, -343, -33, -65, -312, -555, -726, -485, -94, -164, -603];
var goodLeft = [-1067, -1025, -853, -745, -607, -489, -437, -437, -357, -284, -72, -72, -89];
var badTop = [-616, -424, -187, -187, -434, -615, -368, -368, -243, -168, -21, -347, -461, -527];
var badLeft = [-1004, -784, -669, -447, -437, -295, -284, -284, -279, -182, -76, -81, -84];

var x = 0;
var y = 0;
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
//function rollDice() {
  // const max = 6;
  // const roll = Math.ceil(Math.random() * max);
  // console.log("You rolled", roll);
  // var rollText = "You rolled a " + roll;
  // swal(rollText, "", "warning");
  // for (var i = 0; i < roll; i++) {
  //   moveForward();
  // }

//}
//avatar initial spot
function init() {
  imgObj = document.getElementById('avatar');
  imgObj.style.position= 'relative';
  //imgObj.style.top = '-36px';
  //imgObj.style.left = '-1161px';
  imgObj.style.top = everySpot[x][0] + 'px';
  imgObj.style.left =  everySpot[y][1] + 'px';
  swal("Welcome!", "Emily has fallen into wonderland just before her birthday trip to the cottage. Help her navigate her way through the board so she can make it out on time! \n\n To play, roll the dice until she successfully reaches the end. BEWARE, some spots will advance you forward, while others will make you go back! \n\n\n\n CONTROLS: \n Press the roll dice button and follow the board!.", "info");
}
//will move up diagonally

//MOVE LOGIC FUNCTION
//CALLED AND MOVED FORWARD X AMOUNT OF TIMES AS PER ROLL. DETERMINE NEW SPOT QUADRANT, AND SEE IF IT IS A GOOD SPOT, BAD SPOT, OR NEUTRAL SPOT.
//GOOD = GOOD MESSAGE + MOVE UP ONE MORE SPOT
//BAD = BAD MESSAGE + MOVE DOWN ONE SPOT

function moveForward() {
  //imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
  //imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
  x = x + 1;
  y = y + 1;
  imgObj.style.top = everySpot[x][0] + 'px';
  imgObj.style.left =  everySpot[y][1] + 'px';

  if (parseInt(imgObj.style.top) == -709 && parseInt(imgObj.style.left ) == -92 ) {
    swal("Congratulations!", "With your help, Emily was able to make it to the cottage on time!" , "success");
    setTimeout(function(){
      var url = 'https://www.youtube.com/watch?v=3GwjfUFyY6M';
      var windowReference = window.open();
      windowReference.location.assign(url);

      // window.open(url,'_blank');
      // window.open(url);

    }, 2000);

  }

  //swal("Failed move", RANDOM TEXT HERE, "error"); --> for bad moves
}

function moveBackward() {
  x = x - 1;
  y = y - 1;
  imgObj.style.top = everySpot[x][0] + 'px';
  imgObj.style.left =  everySpot[y][1] + 'px';

  //swal("Failed move", RANDOM TEXT HERE, "error"); --> for bad moves
}

function moveLogic() {

  //roll functionality
  const max = 6;
  const roll = Math.ceil(Math.random() * max);
  console.log("You rolled", roll);
  var audio = new Audio('dice.mp3');
  audio.play();
  var rollText = "You rolled a " + roll;
  swal(rollText, "", "warning");

  //message functionality
  var numGood = goodMovesText.length - 1
  var numBad = badMovesText.length - 1

   for (var i = 0; i < roll; i++) {
     moveForward();
   }

   // var landedTop = imgObj.style.top;
   // var landedLeft = imgObj.style.left;
   //
   // console.log("HERE");
   // console.log(parseInt(landedTop));
   // console.log(landedLeft.toString());
   //
   // var goodLanded = goodSpots.includes([landedTop.toString(),landedLeft.toString()]);
   // var badLanded = badSpots.includes([landedTop,landedLeft]);
   // var isGoodTop = goodTop.includes(parseInt(landedTop));
   // var isGoodLeft = goodLeft.includes(parseInt(landedLeft));
   // var isBadTop = badTop.includes(parseInt(landedTop));
   // var isBadLeft = badLeft.includes(parseInt(landedLeft));
   // console.log(isGoodTop);
   // console.log(isGoodLeft);
   // console.log(isBadTop);
   // console.log(isBadLeft);

   setTimeout(function(){
     var landedTop = imgObj.style.top;
     var landedLeft = imgObj.style.left;

     console.log("HERE");
     console.log(parseInt(landedTop));
     console.log(landedLeft.toString());

     var goodLanded = goodSpots.includes([landedTop.toString(),landedLeft.toString()]);
     var badLanded = badSpots.includes([landedTop,landedLeft]);
     var isGoodTop = goodTop.includes(parseInt(landedTop));
     var isGoodLeft = goodLeft.includes(parseInt(landedLeft));
     var isBadTop = badTop.includes(parseInt(landedTop));
     var isBadLeft = badLeft.includes(parseInt(landedLeft));
     console.log(isGoodTop);
     console.log(isGoodLeft);
     console.log(isBadTop);
     console.log(isBadLeft);

     if (isGoodTop == true && isGoodLeft == true) {
       //generate random good text
       var numGood = goodMovesText.length - 1
       console.log("HELLOOOO");
       const goodMessageIndex = Math.ceil(Math.random() * numGood);
       console.log("Good message: ", goodMovesText[goodMessageIndex]);
       var audio = new Audio('littytitty.mp3');
       audio.play();
       swal("Success! One spot gained!", goodMovesText[goodMessageIndex] , "success");
       moveForward();
     }

    if (isBadTop == true && isBadLeft == true) {
       //generate random bad text
       console.log("BYEEEEEE");
       var numBad = badMovesText.length - 1
       const badMessageIndex = Math.ceil(Math.random() * numBad);
       console.log("Bad message:", badMovesText[badMessageIndex]);
       var audio = new Audio('yikes.mp3');
       audio.play();
       swal("Oh no! One spot lost!", badMovesText[badMessageIndex], "error");
       moveBackward();
     }



   }, 1500);

  //  if (isGoodTop == true && isGoodLeft == true) {
  //    //generate random good text
  //    var numGood = goodMovesText.length - 1
  //    console.log("HELLOOOO");
  //    const goodMessageIndex = Math.ceil(Math.random() * numGood);
  //    console.log("Good message: ", goodMovesText[goodMessageIndex]);
  //    swal("Successful move!", goodMovesText[goodMessageIndex] , "success");
  //    moveForward();
  //  }
  //
  // if (isBadTop == true && isBadLeft == true) {
  //    //generate random bad text
  //    console.log("BYEEEEEE");
  //    var numBad = badMovesText.length - 1
  //    const badMessageIndex = Math.ceil(Math.random() * numBad);
  //    console.log("Bad message:", badMovesText[badMessageIndex]);
  //    swal("Oh no!", badMovesText[badMessageIndex], "error");
  //    moveBackward();
  //  }

}


window.onload = init;
