const description = document.querySelector('.description');
const numRange = document.querySelector('.range');
const gameForm = document.querySelector('.getNum');
const rangeInput = gameForm.querySelector('.rangeInput');
const textbox = gameForm.querySelector('.textbox');
const gameResult = document.querySelector('.gameResult');

const maxNum = 200;

function error(value) {
    const errorMsg = document.querySelector('.errormsg');
    const rangeMax = parseInt(numRange.value);
    if (value <= rangeMax && value >= 0) {
        errorMsg.innerText = '';
    } else {
        errorMsg.innerText = `Choose a number in a range of 0 - ${rangeMax}`;
    }
}

function changeRange() {
    const inputValue = textbox.value;
    rangeInput.value = inputValue
    error(inputValue);
}

function showInputNum(){
    const inputValue = rangeInput.value;
    textbox.value = inputValue;
    error(inputValue);
}

function textInputEvent() {
    textbox.addEventListener('input', changeRange);
}

function rangeInputEvent(){
    rangeInput.addEventListener('input', showInputNum);
}

function printRangeTitle(value) {
    description.innerText = `Generate a number between 0 - ${value}`
}

function changeMaxOfRange(value) {
    numRange.setAttribute('max', maxNum);
    rangeInput.setAttribute('max', value);
}

function getRange() {
    const newMaxNum = numRange.value;
    printRangeTitle(newMaxNum);
    changeMaxOfRange(newMaxNum);
    showInputNum();
}

function setRangeEvent() {
    numRange.addEventListener('input', getRange);
}

function inputEvent() {
    rangeInputEvent();
    textInputEvent();
}

function getRanNum(num) {
    const ranNum = Math.floor(Math.random() * num);
    return ranNum;
}

function getGameResult(userNum) {
    // get a random number
    const computerNum = getRanNum(numRange.value);
    // compare two numbers and declare a winner
    if (userNum < computerNum) {
        gameResult.innerHTML = `
        <p>You chose ${userNum}, the computer chose ${computerNum}</p>
        <p><b>You Won!</b></p>`
    } else {
        gameResult.innerHTML = `
        <p>You chose ${userNum}, the computer chose ${computerNum}</p>
        <p><b>You lose!</b></p>`
    }
}





function handleSubmission(event) {
    event.preventDefault();
    const submittedNum = gameForm.elements[1].value;
    
    
    getGameResult(submittedNum);
}

function submit() {
    gameForm.addEventListener('submit', handleSubmission);
}





function init(){
    const rangeMax = numRange.value;
    
    changeMaxOfRange(rangeMax);
    printRangeTitle(rangeMax);
    setRangeEvent();
    inputEvent();
    submit();
}

init();