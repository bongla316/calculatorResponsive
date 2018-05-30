function add(num1, num2){
    return Number(num1)+Number(num2);
}

function subtract(num1, num2){
    return Number(num1)-Number(num2);
}

function divide(num1, num2){
    return Number(num1)/Number(num2);
}

function multiply(num1, num2){
    return Number(num1)*Number(num2);
}

function clear(){
    document.getElementById("display").innerHTML = "";
}

function operate(num1, num2, operator){
    if(operator == "add") {
        return add(num1, num2);
    }
    
    else if(operator == "subtract"){
        return subtract(num1, num2);
    }

    else if(operator == "divide"){
        return divide(num1, num2);
    }

    else if(operator == "multiply"){
        return multiply(num1, num2);
    }
}

var numberList = document.querySelectorAll(".number");
var operatorList = document.querySelectorAll(".operatorFunctions");
var displayValue = [];
var currentOperatorValue = 0;
var stillOperating = false;
var value1;
var value2;
var operator;


Array.from(numberList).forEach(numberButton => {
    numberButton.addEventListener("click", function(e){
        if (!stillOperating){
            displayValue.push(e.target.value);
            document.getElementById("display").innerHTML = displayValue.join("");
        }
        if (stillOperating){
            displayValue.push(e.target.value);
            document.getElementById("display").innerHTML = "" + displayValue.join("");
        }
    });
});

Array.from(operatorList).forEach(operatorButton => {
    operatorButton.addEventListener("click", function(e){
        currentOperatorValue = e.target.value;
        if (currentOperatorValue == "clear") {
             clear();
        }

        else if (currentOperatorValue == "evaluate"){
            value2 = displayValue.join("");
            document.getElementById("display").innerHTML = operate(value1, value2, operator);
            // stillOperating = false;

        }

        else if (currentOperatorValue != "evaluate" && stillOperating == true){
            // value1 = operate(value1, value2, operator);
            // operator = currentOperatorValue;
            value2 = displayValue.join("");
            console.log("Value1 sas: " + value1);
            console.log(operator);
            value1 = operate(value1, value2, operator);
            console.log("Value2: " + value2);
            console.log("Value1: " + value1);

            operator = currentOperatorValue;
            displayValue = [];
            displayValue.push(value1);
            document.getElementById("display").innerHTML = "" + displayValue;
            displayValue = [];
        }

        else {
            // if (currentOperatorValue == 0){
            //     stillOperating = false;
            // }
            // else {
            //     stillOperating = true;
            // } 
            value1 = displayValue.join("");
            operator = currentOperatorValue;
            stillOperating = true;
            document.getElementById("display").innerHTML = "";
            displayValue = [];
            console.log(value1);
        }

    });
});


