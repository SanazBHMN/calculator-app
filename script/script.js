var body = document.querySelector("body");

var themeToggleFirst = document.querySelector("#first");
var themeToggleSecond = document.querySelector("#second");
var themeToggleThird = document.querySelector("#third");

function changeTheme(themeName) {
  document.getElementById("theme-css").href = `style/${themeName}`;
}

themeToggleFirst.addEventListener("click", () => {
  changeTheme("color-1.css");
});

themeToggleSecond.addEventListener("click", () => {
  changeTheme("color-2.css");
});

themeToggleThird.addEventListener("click", () => {
  changeTheme("color-3.css");
});

// build calculator
class Calculator {
  constructor(previousOperandTextElemenet, currentOperandTextElemenet) {
    this.previousOperandTextElemenet = previousOperandTextElemenet;
    this.currentOperandTextElemenet = currentOperandTextElemenet;
    this.reset();
  }

  reset() {
    // console.log("reset function");
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    operationDisplay.innerText = "";
  }

  delete() {
    if (this.currentOperandTextElemenet.innerText === "Infinity") {
      calculator.reset();
    } else {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation() {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    // this.operation = operation;
    // debugger;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    // debugger;
    switch (operationDisplay.innerText) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.previousOperand = "";
    this.operation = undefined;
    this.buttonDisplay = "";
  }

  updateDisplay() {
    this.currentOperandTextElemenet.innerText = this.currentOperand;
    this.previousOperandTextElemenet.innerText = this.previousOperand;
  }
  controlMemory(memoryType) {
    // debugger;
    let prevValue;
    let currValue;
    let result;
    switch (memoryType) {
      case "MC":
        console.log("MC");
        sessionStorage.clear();
        break;

      case "MR":
        console.log("MR");
        this.currentOperandTextElemenet.innerText =
          sessionStorage.getItem("sessionValue");
        break;

      case "M+":
        if (sessionStorage.getItem("sessionValue") === null) {
          sessionStorage.setItem("sessionValue", this.currentOperand);
        } else {
          prevValue = parseFloat(sessionStorage.getItem("sessionValue"));
          currValue = parseFloat(this.currentOperand);
          result = prevValue + currValue;
          // debugger;
          sessionStorage.setItem("sessionValue", result);
        }
        break;

      case "M-":
        if (sessionStorage.getItem("sessionValue") === null) {
          sessionStorage.setItem('sessionValue', this.currentOperand);
        } else {
          prevValue = parseFloat(sessionStorage.getItem("sessionValue"));
          currValue = parseFloat(this.currentOperand);
          result = prevValue - currValue;
          sessionStorage.setItem("sessionValue", result);
        }
        break;
      default:
        return;
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const resetButton = document.querySelector("[data-reset]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElemenet = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElemenet = document.querySelector(
  "[data-current-operand]"
);
const memoryButtons = document.querySelectorAll("[data-memory]");
const operationDisplay = document.getElementById("operation");

const calculator = new Calculator(
  previousOperandTextElemenet,
  currentOperandTextElemenet
);

memoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.controlMemory(button.innerText);
  });
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation();
    operationDisplay.innerText = button.innerText;
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  operationDisplay.innerText = "";
  calculator.updateDisplay();
});

resetButton.addEventListener("click", (button) => {
  calculator.reset();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
