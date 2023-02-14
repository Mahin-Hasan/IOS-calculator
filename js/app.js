// getting all the numbers
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelectorAll('.show-result');
const resultId = document.getElementById('result_id')
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
// let setFlag = false;

// adding click event listeners to all the number button
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (element) => {
        let num = element.target.getAttribute('value')
        console.log({
            num,
            isFirstValue,
            isSecondValue
        });

        if (isFirstValue === false || (lastResultValue != "" && isFirstValue)) {
            // console.log('test')
            getFirstValue(num);
        } else if (isSecondValue === false) {
            // console.log('test')
            getSecondValue(num);
        }
    })
}

function getFirstValue(firstV) {
    // let firstValueNumber =parseFloat(firstV);
    // resultId.value = 0;

    if (lastResultValue != "" && isFirstValue === false) {
        lastResultValue = "";
    }

    result.value = '';
    firstValue += firstV;
    result.value = firstValue;
    firstValue = +firstValue; // converting from string to number
    resultId.value = firstValue;
    console.log('first value', firstValue)

    // console.log(firstValueNumber);
    // console.log(typeof(firstValueNumber));
    // console.log('test2')
    // console.log(typeof(firstV));
    // console.log('after',result.value);
    // let checkType = result.value;
    // console.log(typeof (checkType));

    // let firstValueNumber =parseFloat(checkType);
    // console.log(firstValueNumber);
    // console.log(typeof (firstValueNumber));
    // console.log(resultId);

    // resultId.value=firstValueNumber;
}
function getSecondValue(secondV) {
    if (firstValue != '' && sign != '') {
        if (secondValue != '') {
            resultId.value = '';
        }
        secondValue += secondV;
        result.value = secondValue;
        secondValue = +secondValue;
        resultId.value = secondValue;
        console.log('second value', secondValue);
    }
    // resultId.value=secondValue;
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (element) => {
            sign = element.target.getAttribute('value');
            console.log(sign)
            isFirstValue = true;
        })
    }

}

getSign();

equals.addEventListener('click', () => {
    if (lastResultValue != "" && secondValue == "") {
        secondValue = firstValue;
        firstValue = lastResultValue;
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
    sign = ''




    // setFlag = true;
    // console.log(setFlag);
    // if (setFlag === true) {
    //     firstValue = lastResultValue;
    //     secondValue = '';
    //     setFlag = false;
    // }
    // if(setFlag === false){
    //     secondValue=firstValue;

    // }
})

clear.addEventListener('click', () => {
    console.log('clear button clicked')
    // firstValue = 0;
    // secondValue = 0;
    // resultValue = 0;
    resultId.value = '';

    lastResultValue = "";
    firstValue = '';
    isFirstValue = false;
    secondValue = '';
    isSecondValue = false;
    sign = '';
    resultValue = 0;
})