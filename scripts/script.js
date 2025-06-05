const calculatorDisplay = document.querySelector(".calculator-display");
calculatorDisplay.textContent = "0";
const operatorChars = [
  "0",
  "&#177;",
  "%",
  "&#247;",
  "&#215;",
  "&#8722;",
  "&#43;",
  "&#61;",
];

let num1 = null;
let num2 = null;
let operator = null;
let newText = "";

const calculatorBtns = document.querySelector(".calculator-btns");
calculatorBtns.addEventListener("click", (event) => {
  let target = event.target;
  if (target.classList.contains("operand-btn")) {
    // Never allow the first digit to be a 0
    if (newText[0] === "0") {
      newText = "";
    }
    switch (target.id) {
      case "decimal":
        // Never allow more than one decimal in a digit
        if (!newText.includes(".")) {
          appendText(target.textContent);
        }
        break;
      case "zero":
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
        appendText(target.textContent);
        break;
    }

    updateDisplay(newText);
  } else if (target.classList.contains("operator-btn")) {
    switch (target.id) {
      case "equals":
        if (num1 !== null && operator !== null) {
          updateNum2(newText);
          newText = operate(num1, operator, num2);
          reset();
          updateNum1(newText);
        }
        break;
      case "addition":
      case "subtraction":
      case "multiplication":
      case "division":
        if (operator === null) {
          updateNum1(newText);
          operator = target.id;
          document.querySelector(`#${target.id}`).classList.add("active");
        } else {
          newText = calculatorDisplay.textContent;
        }
        break;
    }

    updateDisplay(newText);
    if (operator !== null) {
      newText = "";
    }
  } else if (target.classList.contains("special-operator-btn")) {
    switch (target.id) {
      case "ac":
        newText = "0";
        reset();
        break;
      case "toggleSign":
        newText = calculatorDisplay.textContent * -1;
        break;
      case "percentage":
        newText = calculatorDisplay.textContent * 0.01;
        break;
    }

    updateDisplay(newText);
  }
});

function operate(operand1, operator, operand2) {
  let result;
  switch (operator) {
    case "addition":
      result = add(+operand1, +operand2);
      break;
    case "subtraction":
      result = subtract(+operand1, +operand2);
      break;
    case "multiplication":
      result = multiply(+operand1, +operand2);
      break;
    case "division":
      result = divide(+operand1, +operand2);
      break;
  }
  return String(result);
}

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  if (operand2 === 0) {
    return "Error";
  }

  return operand1 / operand2;
}

function appendText(text) {
  newText += text;
}

function updateDisplay(newTextContent) {
  if (newTextContent.length > 8) {
    if (+newTextContent % 1 !== 0) {
      newTextContent = String(Number.parseFloat(newTextContent).toFixed(2));
    }
    calculatorDisplay.style.fontSize = "2rem";
  } else {
    calculatorDisplay.style.fontSize = "5rem";
  }
  calculatorDisplay.textContent = newTextContent;
}

function updateNum1(num) {
  num1 = num;
}

function updateNum2(num) {
  num2 = num;
}

function reset() {
  num1 = null;
  num2 = null;
  if (operator !== null) {
    document.querySelector(`#${operator}`).classList.remove("active");
    operator = null;
  }
}
