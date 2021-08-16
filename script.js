var timer = 60;
var score = 0;

var timerelem = document.querySelector('#timerelem')
var hitelem = document.querySelector('#hitelem')
var bottompnl = document.querySelector('#bottompnl')
var scoreelem = document.querySelector('#scoreelem')

var guessNumber;

setInterval(function(){
    if(timer > 0){
    --timer;
    timerelem.textContent = timer;
    }
    else{
        bottompnl.innerHTML = '<h1 id="center" >Game Over</h1>'
    }
},1000);

function makebubble(){
    for(var i=0; i<144; i++){
        var randomNumber = Math.floor(Math.random()*10)
        var template = `<div id="bubble">${randomNumber}</div>`;
        bottompnl.innerHTML += template;
    }
}

function getNewGuess(){
    //get a random number
    guessNumber = Math.floor(Math.random()*10)
    //and then place the random number inside the game guess element
    hitelem.textContent = guessNumber;

}


bottompnl.addEventListener('click',function(details){
    var clickedbubvalue = details.target.textContent;
    if(clickedbubvalue == guessNumber){
        score = score + 10;
         scoreelem.textContent = score;
         getNewGuess();
         bottompnl.innerHTML = '';
         makebubble();
    }
    else{
        console.log('hit wrong');
    }
})




getNewGuess();
makebubble()