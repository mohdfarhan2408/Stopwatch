
//variable:  
var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var Interval;
  
//start
buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    }
)
 
//stop
buttonStop.addEventListener('click', () => {
     clearInterval(Interval);
    }
)
    
 //reset 
buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    }
)
    
     
 //startTimer fx   
var startTimer = () => {
    tens++; 
    
    if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
    appendTens.innerHTML = tens;
    
    } 
    
    if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
    }
    
    if (seconds > 9){
    appendSeconds.innerHTML = seconds;
    }

}
    
  
