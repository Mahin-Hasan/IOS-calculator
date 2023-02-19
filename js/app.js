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
let firstValueHaveDot = false;
let secondValueHaveDot = false;

// let startsWithZero= false;

// adding click event listeners to all the number button
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (element) => {
        let num = element.target.getAttribute('value')
        console.log(num);
        // console.log({
        //     num,
        //     isFirstValue,
        //     isSecondValue
        // });
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
    // const valueHasDot = value.includes(".");

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

function getNumbers(value) {
    if (lastResultValue != "" && isFirstValue === false) {
        lastResultValue = "";
        // clearing last value when first value is taken again
    }
    // now allowing multiple .
    if (value === '.' && !firstValueHaveDot) {
        firstValueHaveDot = true;
    } else if (value === '.' && firstValueHaveDot) {
        return;
    }
    // validation multiple zero
    if (value === '0' && firstValue == "0") {
        return;
    }
    if (value !== '0' && firstValue == "0") {
        firstValue = "";
    }


    if (secondValue === '' && sign === '') {
        firstValue += value;
        //new code for adding 0 when . is clicked
        if (firstValue.startsWith('.')) {
            let addZero = '0';
            let numWithZero = addZero + firstValue;
            console.log(numWithZero);
            firstValue = numWithZero;
        }
        console.log({ t: typeof (firstValue), firstValue, value });
        result.value = firstValue;
        resultId.value = firstValue;
        console.log('first value', firstValue);
    }
    // for 2nd value
    if (firstValue != '' && sign != '') {
        if (secondValue != '') {
            resultId.value = '';
            // clearing if second value exist
        }
        // validation multiple zero
        if (value === '0' && secondValue == "0") {
            return;
        }
        if (value !== '0' && secondValue == "0") {
            firstValue = "";
        }
        secondValue += value;
        //new code for adding 0 when . is clicked
        if (secondValue.startsWith('.')) {
            let addZeroSecond = '0';
            let numWithZeroSecond = addZeroSecond + secondValue;
            console.log(numWithZeroSecond);
            secondValue = numWithZeroSecond;
        }
        result.value = secondValue;
        // secondValue = +secondValue;
        resultId.value = secondValue;
        console.log('second value', secondValue);
    }
}

function getFirstValue(firstV) {
    if (lastResultValue != "" && isFirstValue === false) {
        lastResultValue = "";
        // clearing last value when first value is taken again
    }
    // now allowing multiple .
    if (firstV === '.' && !firstValueHaveDot) {
        firstValueHaveDot = true;
    } else if (firstV === '.' && firstValueHaveDot) {
        return;
    }
    // validation multiple zero
    if (firstV === '0' && firstValue == "0") {
        return;
    }
    if (firstV !== '0' && firstValue == "0") {
        firstValue = "";
    }


    firstValue += firstV;

    // if (firstValue.startsWith('0')) {
    //     return;
    // }
    //new code for adding 0 when . is clicked
    if (firstValue.startsWith('.')) {
        let addZero = '0';
        let numWithZero = addZero + firstValue;
        console.log(numWithZero);
        firstValue = numWithZero;
    }

    console.log({ t: typeof (firstValue), firstValue, firstV });

    result.value = firstValue;
    resultId.value = firstValue;
    console.log('first value', firstValue)

}

function getSecondValue(secondV) {
    //validating multiple .
    if (secondV === '.' && !secondValueHaveDot) {
        secondValueHaveDot = true;
    } else if (secondV === '.' && secondValueHaveDot) {
        return;
    }

    if (firstValue != '' && sign != '') {
        if (secondValue != '') {
            resultId.value = '';
            // clearing if second value exist
        }
        // validation multiple zero
        if (secondV === '0' && secondValue == "0") {
            return;
        }

        if (secondV !== '0' && secondValue == "0") {
            firstValue = "";
        }

        secondValue += secondV;
        //new code for adding 0 when . is clicked
        if (secondValue.startsWith('.')) {
            let addZeroSecond = '0';
            let numWithZeroSecond = addZeroSecond + secondValue;
            console.log(numWithZeroSecond);
            secondValue = numWithZeroSecond;
        }
        result.value = secondValue;
        // secondValue = +secondValue;
        resultId.value = secondValue;
        console.log('second value', secondValue);
    }
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

    firstValueHaveDot = false; // for dot validation
    secondValueHaveDot = false; // for dot validation
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
    firstValueHaveDot = false;
    secondValueHaveDot = false;

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
    firstValueHaveDot = false;
    secondValueHaveDot = false;
})



/*
all comment get first value
 if(firstV==='.'){
        firstV= firstV +'.';
        firstV = +firstV;
        console.log(typeof(firstV));
    }
    console.log(typeof (firstV), firstV);
    let changeFirstv= parseFloat(firstV);
    console.log(typeof(changeFirstv));

    ..
     if (firstV === '.') {
        console.log(firstV);

    }
    ..
    // resultId.value = firstValue;

    // let noWithDecimal= parseFloat(firstValue);
    // console.log('working?', noWithDecimal)

    ..click btn
        else if (sign === '.') {
        firstValue = firstValue +'.'
        console.log(firstValue);
        // resultValue = firstValue / secondValue;
    }
//
 // new code
    // let testVariable = firstValue;
    // let oneDecimal;
    // if (testVariable.includes('.')){
    //     console.log('inside if')
    //     oneDecimal +=   
    // }

    // new code ends
    // firstValue = +firstValue; // converting from string to number

    // end rec

    // starts
    // let last_input = input.slice(-1);
    // if (firstV ==='.' && last_input==='.'){
    //     return false;
    // }


    // ends



    // new code
    // let storeNumber = [];
    // storeNumber.push(firstV);
    // let stringNumber = firstV.toString();
    // console.log(storeNumber);
    // let stringNumber =firstV.toString();
    // let integerDigits = parseFloat(stringNumber.split('.'), [0]);
    // let decimalDigits = stringNumber.split('.')[1];
    // // let newDecimalNum = integerDigits + '.' + decimalDigits;
    // // console.log(newDecimalNum);
    // let integerDisplay
    // console.log(stringNumber,integerDigits,decimalDigits,integerDisplay)

    // if (isNaN(integerDigits)) {
    //     integerDisplay = ''
    // } else {
    //     integerDisplay = integerDigits.toLocaleString('en', {
    //     maximumFractionDigits: 0})
    // }
    // if (decimalDigits != null) {
    //     return `${integerDisplay}.${decimalDigits}`;
    // } else {
    //     return integerDisplay;
    // }

    // new code ends


    /*
    // if (firstV === '.') {
    //     let addZero = '0';
    //     addZero += firstV;
    //     console.log(addZero);
    //     //   firstValue += firstV;
    // } 
    */
