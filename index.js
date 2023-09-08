var numberOfDrumsButton = document.querySelectorAll(".drum").length;


//detect button press
for (var i=0 ; i<numberOfDrumsButton ; i++) {
   
document.querySelectorAll(".drum")[i].addEventListener("click",
function () { 
   var buttonInnerHTML=this.innerHTML;//amik value display kat button
   playSound(buttonInnerHTML);//panggil function playSound and pass parameter innerhtml
   buttonAnimation(buttonInnerHTML);
});

}


//detect keyboard press
document.addEventListener("keydown",function(event){
    playSound(event.key);//key by default value keyboard
    buttonAnimation(event.key);
});



//function playSound
function playSound(key){

    switch(key){

        case "w": 
        var tom1= new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;
    
        case "a": 
        var tom2= new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;
    
    
        case "s": 
        var tom3= new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;
    
        case "d": 
        var tom4= new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;
    
        case "j": 
        var snare= new Audio('./sounds/snare.mp3');
        snare.play();
        break;
    
        case "k": 
        var crash= new Audio('./sounds/crash.mp3');
        crash.play();
        break;
    
        case "l": 
        var kick= new Audio('./sounds/kick-bass.mp3');
        kick.play();
        break;
    
    default: console.log(buttonInnerHTML);
       }

}

//function buttonAnimation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);//add "." sebab kita nak namakan current key as class. ".w" untuk panggil from html

   activeButton.classList.add("pressed");//to make only current button berubah warna, so add class press using class list. pressed ada dekat styles.css
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100); //remove pressed in 100milisecond=1 second
}