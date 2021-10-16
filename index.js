var noOfDrums = document.querySelectorAll(".drum").length;

for( var i =0; i< noOfDrums; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click" ,function (){
    // alert("i got clicked");
    var audioPath = 'sounds/tom-'+1+'.mp3';
    var audio = new Audio(audioPath);
    audio.play();
});

}

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