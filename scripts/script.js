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

  // operand-btn click events
  if (target.classList.contains("operand-btn")) {
    // Removes default 0 from beginning of display string
    if (operatorChars.includes(calculatorDisplay.textContent[0])) {
      newText = "";
    }
    newText += target.textContent;
  } else if (target.classList.contains("operator-btn")) {
    if (operator === null && target.id !== "equals") {
      operator = target.id;
      target.classList.toggle("active");
      updateNum1(calculatorDisplay.textContent);
      newText = "";
    } else {
      document.querySelector(`#${operator}`).classList.toggle("active");
      updateNum2(calculatorDisplay.textContent);
      newText = operate(num1, operator, num2);
      reset();
    }
  } else if (target.classList.contains("special-operator-btn")) {
    if (target.id === "ac") {
      reset();
      newText = "0";
    } else {
      operator = target.id;
      updateNum1(calculatorDisplay.textContent);
      newText = operate(num1, operator);
    }
  }

  newText = String(newText);
  if (newText.includes(".")) {
    document.querySelector("#decimal").classList.add("disabled");
  } else {
    document.querySelector("#decimal").classList.remove("disabled");
  }
  updateDisplay(newText);
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
    case "toggleSign":
      result = toggleSign(+operand1);
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
  return (operand *= -1);
}

function percent(operand1, operand2 = 0.01) {
  return operand1 * operand2;
}

function updateDisplay(newTextContent) {
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
  operator = null;
}
