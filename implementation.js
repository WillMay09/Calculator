


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

       
        if(button.textContent === "clear"){
        
            clearButton();
            console.table(equation);
            screen.textContent = '';
        
        
        }else if(checkNumber(button.textContent) && equation.operation ==''){
         equation.number1 += button.textContent; 
         screen.textContent += button.textContent;

        }else if(checkNumber(button.textContent) === false){
            //screen.textContent = '';
            equation.operation += button.textContent;
            screen.textContent += button.textContent;
            //screen.textContent = '';
            

        }else if(button.textContent === '=' && equation.operation != '' && equation.number1 != '' && equation.number2 != ''){

            let answer = calculateEquation();
            screen.textContent = '';
            screen.textContent += answer;

           
        }else{
            equation.number2 += button.textContent;
            screen.textContent += button.textContent;

        }

        //console.table(equation);
        
    })
   
})


}

function calculateEquation(){

    if(equation.operation === '+'){
        return (Number(equation.number1) + Number(equation.number2)); 

    }else if(equation.operation === '-'){
        return (Number(equation.number1) - Number(equation.number2));

    }else if(equation.operation === '/'){

        return (Number(equation.number1)/Number(equation.number2));

    }else if(equation.operation === '*'){

        return (Number(equation.number1)*Number(equation.number2));

    }

}

function clearButton(){

equation.number1 = '';
equation.number2 = '';
equation.operation = '';



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


default:

    return true;



}


}



document.addEventListener("DOMContentLoaded", function(){

enableButtons();


});