// set the main variables
let numOne = [];
let numTwo = []; 
let finalResult = [];
let result = [];
let sign = "";
let s = [];

// trigger for number two
let opr = false;

//set the document selector
const screen = document.querySelector('#calc-screen');
const value = document.querySelectorAll('button[class=btn]');
const operator = document.querySelectorAll('button[class=operator]');
const equal = document.querySelector('.equal-sign');
const clear = document.querySelector('.Ac');
const undo = document.querySelector('.undo');

//set the event listner
value.forEach(val => document.addEventListener("value", val.onclick = setNum));
operator.forEach(sign => document.addEventListener('operation', sign.onclick = setSign));
clear.addEventListener('clear', clear.onclick = clearFunc);
undo.addEventListener('undo', undo.onclick = undoFunc);

equal.onclick = () => equality();


// equal function for final result
function equality(){
    calcFunc();
    screen.value = numOne;
    s = [];
}

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
              return;
          }
    }


// set the operation sign function
function setSign(e){

    //change opr triger value
    opr = true;

    s.push(e.path[0].attributes.value.nodeValue);

    // onclick second time
    value.onclick = (e) => setNum(e);
    
    // set sign of the first opretion
    if(s.length == 1 ){
        sign = s.slice(s.length -1 , s.length);
        screen.value = sign;

    // set the sign if there is second operation without equal
    /* Note: if there is 4 operation the addition and subtraction
       will not come before multiplation and divition the calculation
       will be done one by one */

    }else if(s.length > 1){
        s.forEach(si =>{
        calcFunc();
        sign = si;
        screen.value = sign;        
        });
    }else{
        return;
    }
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
    numOne = [finalResult];

     numTwo = [];
}


// multiplay function
function multiFunc(){
        finalResult =  result.reduce(function(a, b) {
            return a * b;
        });
}

// subtraction function
function subtractFunc(){
    finalResult = result.reduce(function (a, b ) {
        return a - b;
    });

}

// divition function
function divideFunc(){

    finalResult = result.reduce(function (a, b) {
        return a / b;
    });

}

// additon function
function addFunc(){
    
    finalResult = result.reduce(function (a, b) {
        return Number(a) + Number(b);
    });

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

//undo function
function undoFunc(){
    if(screen.value == numOne.join("")){
        numOne.pop();
        screen.value = numOne.join("");
    }else if(screen.value == numTwo.join("")){
        numTwo.pop();
        screen.value = numTwo.join("");
    }else if(screen.value == sign){
        sign = "";
        screen.value = sign;
    }else if(screen.value == "0"){
        screen.value = "";
    }
}
