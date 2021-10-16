var noOfDrums = document.querySelectorAll(".drum").length;

//button click
for( var i =0; i< noOfDrums; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click" ,function (){
    // alert("i got clicked");
    // this.style.color = 'white';
    var buttonValue = this.innerHTML;
    makeSound(buttonValue);
    buttonAnimation(buttonValue);
});

}

//keybord press

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break; 
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;    
        
        default:
            console.log(buttonValue);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// var audioPath = 'sounds/tom-'+1+'.mp3';
//     var audio = new Audio(audioPath);
//     audio.play();


//Higer order function -> function takes another function as argument

// function add(num1, num2){
//     return num1+num2;
// }
// function subtract(num1, num2){
//     return num1-num2;
// }
// function multiply(num1, num2){
//     return num1*num2;
// }
// function divide(num1, num2){
//     return num1/num2;
// }
// function calculator(num1, num2, operate){
//     return operate(num1, num2);
// }
// calculator(3, 5, add);
// calculator(3, 5, subtract);
// calculator(3, 5, multiply);
// calculator(3, 5, divide);