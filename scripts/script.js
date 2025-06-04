const calculatorDisplay = document.querySelector(".calculator-display");
calculatorDisplay.textContent = "0";
let num1 = null;
let num2 = null;
let operatorSymbol = null;

const calculatorBtns = document.querySelector(".calculator-btns");
calculatorBtns.addEventListener("click", (event) => {
  let target = event.target;
  // operand-btn click events
  if (
    target.classList.contains("operand-btn") &&
    calculatorDisplay.textContent.length < 8
  ) {
    if (calculatorDisplay.textContent === "0") {
      calculatorDisplay.textContent = "";
    }
    calculatorDisplay.textContent += target.textContent;
  } else if (target.classList.contains("ac")) {
    // AC btn click event
    calculatorDisplay.textContent = "0";
  } else if (target.classList.contains("percent")) {
    // percent btn click event
    num1 = calculatorDisplay.textContent;
    operatorSymbol = "percentage";
    calculatorDisplay.textContent = operate(num1, operatorSymbol);
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
    case "percentage":
      result = percent(+operand1);
      break;
  }
  return result;
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

function toggleSign(operand) {
  if (Math.sign(operand) === 1 || Math.sign(operand) === -1) {
    return (operand *= -1);
  }

  return operand;
}

function percent(operand1, operand2 = 0.01) {
  return operand1 * operand2;
}
