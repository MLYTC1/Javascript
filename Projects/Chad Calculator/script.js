const Numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operator-btn");
const display = document.getElementById("display");
const equal = document.getElementById("equal");
const time = document.getElementById("clock");



function updateClock(){
    const t = new Date();
    const Hours = t.getHours();
    let minutes = t.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    
    // time.innerHTML = '${Hours}:${minutes}';
    document.getElementById("clock").value = `${Hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);


function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result;
    try {
        result = evaluateExpression(expression);
    } catch (error) {
        result = 'Error: ' + error.message;
    }

    document.getElementById('display').value = result;
}

function evaluateExpression(expression) {
    let numbers = [];
    let operators = [];
    let number = '';

   
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (!isNaN(char) || char === '.') {
            number += char;
        } else {
            if (number !== '') {
                numbers.push(parseFloat(number));
                number = '';
            }
            operators.push(char);
        }
    }
    if (number !== '') {
        numbers.push(parseFloat(number));
    }

  
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        let nextNumber = numbers[i + 1];
        let currentOperator = operators[i];
        if (currentOperator === '+') {
            result += nextNumber;
        } else if (currentOperator === '-') {
            result -= nextNumber;
        } else if (currentOperator === '*') {
            result *= nextNumber;
        } else if (currentOperator === '/') {
            if (nextNumber !== 0) {
                result /= nextNumber;
            } else {
                alert('Division by zero');
            }
        }
    }

    return result;
}














// // Parse the expression into numbers and operators
// for (let i = 0; i < expression.length; i++) {
//     let char = expression[i];
//     if (!isNaN(char) || char === '.') {
//         number += char;
//     } else {
//         if (number !== '') {
//             numbers.push(parseFloat(number));
//             number = '';
//         }
//         operators.push(char);
//     }
// }
// if (number !== '') {
//     numbers.push(parseFloat(number));
// }

// // Evaluate the expression
// let result = numbers[0];
// for (let i = 0; i < operators.length; i++) {
//     let nextNumber = numbers[i + 1];
//     let currentOperator = operators[i];
//     if (currentOperator === '+') {
//         result += nextNumber;
//     } else if (currentOperator === '-') {
//         result -= nextNumber;
//     } else if (currentOperator === '*') {
//         result *= nextNumber;
//     } else if (currentOperator === '/') {
//         if (nextNumber !== 0) {
//             result /= nextNumber;
//         } else {
//             throw new Error('Division by zero');
//         }
//     }
// }

// return result;
// }























// let numArr = []
// let numStr = []


// for (let i=0; i < operators.length;i++){
//     operators[i].addEventListener('click', function(){
//         if(operators[i].innerHTML == "+" || operators[i].innerHTML == "*" || operators[i].innerHTML == "-" || operators[i].innerHTML == "/"  ){
//             numArr.push(numStr)
//             numArr.push(operators[i].innerHTML)
//             display.innerHTML = numArr
//         }
//         numStr += operators[i].innerHTML
//         console.log(numStr)
//         display.innerHTML = numStr
//     })
// }
// equal.addEventListener('click',function(){
//     numArr.push(numStr)
//     console.log(numStr)
//     display.innerHTML = numArr
// })