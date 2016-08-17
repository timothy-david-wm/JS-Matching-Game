var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var numberOfFaces = 5;
var won = false;
var level = 1;

function generateFaces(){

  //Generate Faces
  for(var i = 0;i < numberOfFaces; i++){
    var x = Math.random() * 90;
    var y = Math.round(x);
    var z = Math.random() * 90;
    var f = Math.round(z);
    //Generate the left side faces
    var img = document.createElement('img');
        img.src="https://cdn1.iconfinder.com/data/icons/smiley-faces/100/Smiley_cool_face-512.png";
        img.style.top = y + '%';
        img.style.left = f + '%';
        img.id = 'newImg';
        img.height = '50';
        img.width = '50';
      theLeftSide.appendChild(img);
    //Generate the right side faces
    if(i < (numberOfFaces - 1)){
      var img2 = document.createElement('img');
          img2.src="https://cdn1.iconfinder.com/data/icons/smiley-faces/100/Smiley_cool_face-512.png";
          img2.style.top = y + '%';
          img2.style.left = f + '%';
          img2.id = 'newImg';
          img2.height = '50';
          img2.width = '50';
        theRightSide.appendChild(img2);
      }
  }

  var tellLevel = document.getElementById("level");
  tellLevel.innerHTML = "Level "+level+": "
  //Win/lose Conditions
  theLeftSide.addEventListener("click", lose);
  theLeftSide.lastChild.addEventListener("click", nextLevel);
}
function nextLevel(){
  alert('Correct');
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }

  numberOfFaces = Math.round(numberOfFaces*1.25);
  level = level+1;
  generateFaces();
  won = true;
}
function lose(){
  if(won == true){
    won = false;
  }else{
  alert("You Lose");
  level = 1;
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  numberOfFaces = 5
  level == 1;
  generateFaces();
  }
}
