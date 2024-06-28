var numberBtn=document.querySelectorAll(".drum").length;

for(var i=0; i< numberBtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonHTML=this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    })
}
       

function makeSound(key){
    switch(key){
        case 'w':
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        
        case 'a':
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case 's':
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case 'd':
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
         
        case 'j':
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case 'k':
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case 'l':
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        
        default:
            console.log(key);

    }
}

function buttonAnimation(curentKey){
    var activebutton= document.querySelector("."+curentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");}, 100);

}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})