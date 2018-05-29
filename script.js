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
    //console.log(num1);
    //console.log(num2);
    //console.log(operator);

    if(operator == "add") {
        //console.log("addCase");
        //document.getElementById("display").innerHTML = add(num1, num2);
        return add(num1, num2);
    }
    
    else if(operator == "subtract"){
        //console.log("subtractCase");
        //document.getElementById("display").innerHTML = subtract(num1, num2);
        return subtract(num1, num2);
    }

    else if(operator == "divide"){
        //console.log("divideCase");
        //document.getElementById("display").innerHTML = divide(num1, num2);
        return divide(num1, num2);
    }

    else if(operator == "multiply"){
        //console.log("multiplyCase");
        //document.getElementById("display").innerHTML = multiply(num1, num2);
        return multiply(num1, num2);
    }
}

var numberList = document.querySelectorAll(".number");
var operatorList = document.querySelectorAll(".operatorFunctions");
var displayValue;
var currentOperatorValue;
var stillOperating = false;
var value1 = 0;
var value2 = 0;
var operator;


Array.from(numberList).forEach(numberButton => {
    numberButton.addEventListener("click", function(e){
        displayValue = e.target.value;
        document.getElementById("display").innerHTML = displayValue;
        if (stillOperating){
            value2 = e.target.value;
        }
    });
});



Array.from(operatorList).forEach(operatorButton => {
    operatorButton.addEventListener("click", function(e){
        currentOperatorValue = e.target.value;
        //console.log(e.target.value);
        if (currentOperatorValue == "clear") {
             clear();
        }

        else if (currentOperatorValue == "evaluate"){
            value2 = document.getElementById("display").innerHTML;
            console.log("Result: " + operate(value1, value2, operator));
            stillOperating = false;

        }

        else if (currentOperatorValue != "evaluate" && stillOperating == true){
            //value2 = document.getElementById("display").innerHTML;
            console.log("Value1: " + value1);
            console.log("Value2: " + value2);
            value1 = operate(value1, value2, operator);
            console.log("Value1: " + value1);
            
            operator = currentOperatorValue;
        }

        else {
            operator = currentOperatorValue;
            stillOperating = true;
            value1 = document.getElementById("display").innerHTML;
        }

    });
});


