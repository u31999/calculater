// set the main variables
let numOne = [];
let numTwo = []; 
let finalResult = [];
let result = [];
// trigger for number two
let opr = false;

//set the document selector
const screen = document.querySelector('#calc-screen');
const value = document.querySelectorAll('button[class=btn]');
const operator = document.querySelectorAll('button[class=operator]');
const equal = document.querySelector('.equal-sign');
const clear = document.querySelector('.Ac');

//set the event listner
value.forEach(val => document.addEventListener("value", val.onclick = setNum));
operator.forEach(sign => document.addEventListener('operation', sign.onclick = setSign));
equal.addEventListener('equal', equal.onclick = calcFunc);
clear.addEventListener('clear', clear.onclick = clearFunc);

// set number value function
function setNum(e){
    //set numOne value
    if (opr == false && numOne.length < 5){
    numOne.push(e.path[0].attributes.value.nodeValue);
    screen.value = numOne.join("");

    //set numTwo value
      }else if(opr == true && numTwo.length < 5){
              numTwo.push(e.path[0].attributes.value.nodeValue);
              screen.value = numTwo.join("");
      }else{
              return
          }
    }


// set the operation sign function
function setSign(e){

    //change opr triger value
    opr = true;

    sign = e.path[0].attributes.value.nodeValue;
    screen.value = sign;

    // onclick second time
    value.onclick = (e) => setNum(e);
    
}

// send the number value to the main math functions
function calcFunc(){
    if(numOne.length != 0 && numTwo.length !=0){
        result[0] = numOne.join("");
        result[1] = numTwo.join("");

        if(sign == "*") multiFunc();
        if(sign == "-") subtractFunc();
        if(sign == "/") divideFunc();
        if(sign == "+") addFunc()
}else{
    return
}
}


// multiplay function
function multiFunc(){

     finalResult =  result.reduce(function(a, b) {
         return a * b;
     });

     screen.value = finalResult ;
     numOne = [finalResult];
     numTwo = [];

    //onclick second time
     equal.onclick = () => calcFunc();
}

// subtraction function
function subtractFunc(){
    
    finalResult = result.reduce(function (a, b ) {
        return a - b;
    });

    screen.value = finalResult;
    numOne = [finalResult];
    numTwo = [];

    //onclick second time
    equal.onclick = () => calcFunc();
}

// divition function
function divideFunc(){

    finalResult = result.reduce(function (a, b) {
        return a / b;
    });

    screen.value = finalResult;
    numOne = [finalResult];
    numTwo = [];

    //onclick second time
    equal.onclick = () => calcFunc();
}

// additon function
function addFunc(){
    
    finalResult = result.reduce(function (a, b) {
        return Number(a) + Number(b);
    });

    screen.value = finalResult;
    numOne = [finalResult];
    numTwo = [];

    //onclick second time
    equal.onclick = () => calcFunc();
}

//clear (AC) function
function clearFunc(){
numOne = [];
numTwo = []; 
finalResult = [];
result = [];
// trigger for number two
opr = false;
sign = "";
screen.value = 0;

}
