


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

       
        if(checkNumber(button.textContent) && equation.operation ==''){
         equation.number1 += button.textContent; 
         screen.textContent += button.textContent;

        }else if(checkNumber(button.textContent) === false){
            //screen.textContent = '';
            equation.operation += button.textContent;
            screen.textContent += button.textContent;
            //screen.textContent = '';
            

        }else{

            equation.number2 += button.textContent;
            screen.textContent += button.textContent;
        }

        //console.table(equation);
        
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