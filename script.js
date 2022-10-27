const operate = (num1, num2, operator) => {
  const num1F = parseFloat(num1)
  const num2F = parseFloat(num2)

  switch(operator) {
    case "add":
      return  num1F + num2F
    case "subtract":
      return  num1F - num2F
    case "multiply":
      return  num1F * num2F
    case "divide":
      return  num1F / num2F
  }
}

const calculon = document.querySelector(".calculon");
const btns = calculon.querySelector(".calculon_btns");
const display = calculon.querySelector(".calculon_display")

var storedOne = "";
var equalTwo;
let isOperator = false;

btns.addEventListener("click", e => {
  if(e.target.matches("button")) {
    const btn = e.target;
    const btnValue = btn.textContent
    const operatorBtn = e.target.classList.contains("operator");
    const currentNum = display.textContent;
    const opr = btn.dataset.opr
    const prevBtn = calculon.dataset.prevBtn

    

    if(!operatorBtn) {
      if(currentNum == "0" || isOperator == true) {
      display.textContent = btnValue;
      } else display.textContent = currentNum + btnValue

      isOperator = false;
      calculon.dataset.prevBtn = "number"
      console.log("number", storedOne)
    }

    if(operatorBtn) {
      const firstNum = storedOne;
      const secondNum = currentNum;
      const operator = calculon.dataset.opr
      // prevOperator = e.target.textContent

      if(firstNum && operator && prevBtn !== "operator" && prevBtn !== "equal") {
        const tempValue = operate(firstNum, secondNum, operator)
        display.textContent = tempValue
        storedOne = tempValue
      } else {
        storedOne = currentNum;

      }

      calculon.dataset.opr = opr
      calculon.dataset.prevBtn = "operator"
      isOperator = true;
      console.log(isOperator, storedOne)
    }

    if(e.target.classList.contains("decimal")) {
      if(!currentNum.includes(".")) {
      display.textContent = currentNum + "."
      }
    }

    if(e.target.classList.contains("clear")) {
      console.log("AC")
    }

    if(e.target.classList.contains("equal")) {
      let firstNum = storedOne;
      let secondNum = currentNum;
      const operator = calculon.dataset.opr

      if(firstNum) {
        if(prevBtn == "equal") {
          firstNum = currentNum
          secondNum = equalTwo
        }
        display.textContent = operate(firstNum, secondNum, operator)
      }

      

      calculon.dataset.prevBtn = "equal"
      isOperator = true;
      equalTwo = secondNum
      storedOne = currentNum;
      console.log("operate", storedOne, equalTwo)
    }
  }
})




