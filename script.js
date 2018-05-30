function add(num1, num2){
    return Number(num1)+Number(num2);
}

function subtract(num1, num2){
    return Number(num1)-Number(num2);
}

function divide(num1, num2){
    if (Number(num2) == 0){
        return "Inf";
    }
    else {
        return Number(num1)/Number(num2);
    }
}

function multiply(num1, num2){
    return Number(num1)*Number(num2);
}

function clear(){
    document.getElementById("display").innerHTML = "";
    displayValue = [];
    currentOperatorValue = 0;
    stillOperating = false;
    decimalFlag = false;
    value1 = 0;
    value2 = 0;
    operator = 0;
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
console.log(operatorList);
console.log(numberList);
var displayValue = [];
var currentOperatorValue = 0;
var stillOperating = false;
var decimalFlag = false; //Used to check if the decimal point has been used once already
var value1;
var value2;
var operator;


Array.from(numberList).forEach(numberButton => {
    numberButton.addEventListener("click", function(e){
        if (e.target.value == "." && decimalFlag != true) {
            decimalFlag = true;
            displayValue.push(e.target.value);
            document.getElementById("display").innerHTML = displayValue.join("");
        }
        
        if (!stillOperating){
            if (e.target.value == "." && decimalFlag == true){
                return;
            }

            else {
                displayValue.push(e.target.value);
                document.getElementById("display").innerHTML = displayValue.join("");
            }    
        }
        if (stillOperating){
            if (e.target.value == "." && decimalFlag == true){
                return;
            }
            else {
                displayValue.push(e.target.value);
                document.getElementById("display").innerHTML = "" + displayValue.join("");
            }
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
            stillOperating = false;
        }

        else if (currentOperatorValue == "delete"){
            displayValue.pop();
            document.getElementById("display").innerHTML = "" + displayValue.join("");
        }

        else if (currentOperatorValue != "evaluate" && stillOperating == true){
            decimalFlag = false;
            value2 = displayValue.join("");
            value1 = operate(value1, value2, operator);
            operator = currentOperatorValue;
            displayValue = [];
            displayValue.push(value1);
            document.getElementById("display").innerHTML = "" + displayValue;
            displayValue = [];
        }

        else {
            value1 = displayValue.join("");
            operator = currentOperatorValue;
            stillOperating = true;
            decimalFlag = false;
            document.getElementById("display").innerHTML = "";
            displayValue = [];
        }

    });
});


