const calculatorDisplay = document.querySelector(".calculator-display");
calculatorDisplay.textContent = "0";

const calculatorBtns = document.querySelector(".calculator-btns");
calculatorBtns.addEventListener("click", (event) => {
  if (calculatorDisplay.textContent === "0") {
    calculatorDisplay.textContent = "";
  }

  if (
    event.target.classList.contains("operand-btn") &&
    calculatorDisplay.textContent.length < 8
  ) {
    calculatorDisplay.textContent += event.target.textContent;
  } else if (event.target.classList.contains("ac")) {
    calculatorDisplay.textContent = "0";
  }
  return console.log(event.target);
});

function operate(operand1, operand2, operator) {
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
  console.log(result);
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

function percent(operand) {
  return operand * 0.01;
}
