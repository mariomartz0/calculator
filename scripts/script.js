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
