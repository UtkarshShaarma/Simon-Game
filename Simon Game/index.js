
var buttonColors=["red","blue","green","yellow"];

var gamepattern=[];

var UserClickedPattern=[];

var len=document.querySelectorAll(".btn").length;

var level=0;
var started= false;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


    




$(".btn").click(function() {
    
  
  var userselectedcolors =$(this).attr("id");
  UserClickedPattern.push(userselectedcolors);
  playSound(userselectedcolors);
  btnanimation(userselectedcolors);

  checkAns(UserClickedPattern.length-1);

  
} 
);






function nextSequence(){

    UserClickedPattern=[];

    level ++;

    document.querySelector("#level-title").innerHTML= "level"+" " + level


    var randomNumber=Math.floor(Math.random()*4);

    var randonChosenColors=buttonColors[randomNumber];

   
   gamepattern.push(randonChosenColors);


   $("#"+ randonChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);

   var ad=new Audio("sounds/" +randonChosenColors+ ".mp3");
    ad.play();

    }


        



   

    function playSound(userselectedcolors){

        var ad=new Audio("sounds/"+ userselectedcolors +".mp3");
        ad.play();

        
    }


    
function btnanimation(userselectedcolors){

 $("#"+userselectedcolors).addClass("pressed");

 setTimeout(function ()  {
     $("#"+userselectedcolors).removeClass("pressed");

    
 }, 100);}




  
function checkAns(currlevel){


    
    if(gamepattern[currlevel] === UserClickedPattern[currlevel]){
        console.log("correct");
    

    if(UserClickedPattern.length === gamepattern.length){

        setTimeout(function () {nextSequence ();
            
        }, 1000);
    }

 }else{
      document.querySelector("body").classList.add("game-over");
      setTimeout(function(){
               document.querySelector("body").classList.remove("game-over");


      },200)

      var wd= new Audio("sounds/wrong.mp3");
      wd.play();


      startover();

    
    }

}


function startover(){

       document.querySelector("#level-title").innerHTML= "GAME OVER";

       setTimeout(function(){


           document.querySelector("#level-title").innerHTML= "Press A Key to Start";
    
       },1000)

    level=0;
    started=false;
    gamepattern=[];




}































