


let equation = {

number1: '',
operation: '',
number2: ''

}



//adds functionality to buttons
function enableButtons(){

let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.headerScreen');
buttons.forEach( button=>{

    button.addEventListener('click',(event)=>{

        screen.textContent += button.textContent;
        if(checkNumber(button.textContent)){
         equation.number1 += button.textContent; 

        }
        
    })
   
})


}

function checkNumber(buttonValue){

switch(buttonValue){

case '+':
    return false;

case '-':

    return false;

case '/':

    return false;

case '*':

    return false;

case '=':

default:

    return true;



}


}



document.addEventListener("DOMContentLoaded", function(){

enableButtons();


});