var body = document.querySelector("body");

var themeToggleFirst = document.querySelector("#first");
var themeToggleSecond = document.querySelector("#second");
var themeToggleThird = document.querySelector("#third");

themeToggleFirst.addEventListener("click", () => {
  // console.log("reset fired");
  // calculator.reset();
  // calculator.updateDisplay();
  if (
    body.classList.contains("theme-2") ||
    body.classList.contains("theme-3")
  ) {
    // console.log('theme 1 fired')
    body.classList.remove("theme-2");
    body.classList.remove("theme-3");
    body.classList.add("theme-1");
  }
});

themeToggleSecond.addEventListener("click", () => {
  // console.log("reset fired");
  // calculator.reset();
  // calculator.updateDisplay();
  if (
    body.classList.contains("theme-1") ||
    body.classList.contains("theme-3")
  ) {
    body.classList.remove("theme-3");
    body.classList.add("theme-2");
  }
});

themeToggleThird.addEventListener("click", () => {
  // calculator.reset();
  // calculator.updateDisplay();
  // console.log("reset fired");
  if (
    body.classList.contains("theme-1") ||
    body.classList.contains("theme-2")
  ) {
    body.classList.remove("theme-2");
    body.classList.add("theme-3");
  }
});

// build calculator
class Calculator {
  constructor(previousOperandTextElemenet, currentOperandTextElemenet) {
    this.previousOperandTextElemenet = previousOperandTextElemenet;
    this.currentOperandTextElemenet = currentOperandTextElemenet;
    this.reset();
  }

  reset() {
    console.log("reset function");
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    if (this.currentOperandTextElemenet.innerText === "Infinity") {
      calculator.reset();
    //   console.log("**");
    } else {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElemenet.innerText = this.currentOperand;
    this.previousOperandTextElemenet.innerText = this.previousOperand;
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

const calculator = new Calculator(
  previousOperandTextElemenet,
  currentOperandTextElemenet
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
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

themes = {
  cyan: {
    "main-color": "cyan",
    "accent-color": "red",
  },
  light: {},
};

// DRY
