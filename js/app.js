// getting all the numbers
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelectorAll('.show-result');
const resultId = document.getElementById('result_id')
const dot = document.getElementById('dot')
const signs = document.querySelectorAll('.sign')
const clear = document.querySelector('.btn-clear')
const equals = document.querySelector('.equals')


// declaring initial state
let firstValue = '';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = '';
let resultValue = 0;
let lastResultValue = '';
let valueHasDot = false;

// adding click event listeners to all the number button
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (element) => {
        let num = element.target.getAttribute('value')
        if (isFirstValue === false || (lastResultValue != "" && isFirstValue == true)) {

            if (lastResultValue != "" && isFirstValue === false) {
                lastResultValue = "";
                // clearing last value when first value is taken again
            }

            firstValue = getInput(num, firstValue);
            result.value = firstValue;
            resultId.value = firstValue;
        } else if (isSecondValue === false) {
            secondValue = getInput(num, secondValue);
            result.value = secondValue;
            resultId.value = secondValue;
        }
    })
}

function getInput(input, value) {
    // now allowing multiple.
    if (input === '.' && !valueHasDot) {
        valueHasDot = true;
    } else if (input === '.' && valueHasDot) {
        return value;
    }

    // validation multiple zero.
    if (input === '0' && value == "0") {
        return value;
    }
    if (input !== '0' && value == "0") {
        value = "";
    }

    value += input;

    //new code for adding 0 when . is clicked
    if (value.startsWith('.')) {
        value = "0.";
    }

    console.log({ type: typeof (value), input, value });

    return value;
}


function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (element) => {
            sign = element.target.getAttribute('value');
            console.log(sign);
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', () => {
    valueHasDot = false; // for dot validation

    // converting 
    firstValue = +firstValue;
    secondValue = +secondValue;

    if (lastResultValue != "" && secondValue == "") {
        secondValue = firstValue;
        firstValue = lastResultValue;
        // will go inside this condition when multiple math operation is done at a time.
    }

    result.value = '';
    if (sign === '+') {
        resultValue = firstValue + secondValue;
    }
    else if (sign === '-') {
        resultValue = firstValue - secondValue;
    }
    else if (sign === '*') {
        resultValue = firstValue * secondValue;
    }
    else if (sign === '/') {
        resultValue = firstValue / secondValue;
    }

    resultId.value = resultValue;
    lastResultValue = resultValue;
    console.log('last value', lastResultValue);
    resultValue = 0
    firstValue = "";
    isFirstValue = false;
    secondValue = '';
    isSecondValue = false;
    sign = '';
    valueHasDot = false;
})

// AC Button.
clear.addEventListener('click', () => {
    console.log('clear button clicked')
    resultId.value = '';
    lastResultValue = "";
    firstValue = '';
    isFirstValue = false;
    secondValue = '';
    isSecondValue = false;
    sign = '';
    resultValue = 0;
    valueHasDot = false;
})


