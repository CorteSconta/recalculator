const operate = (n1, operator, n2) => { // Main logic
  let tot = ""

  if (operator === "add") {
    tot = parseFloat(n1) + parseFloat(n2)
  } else if (operator === "subtract") {
    tot = parseFloat(n1) - parseFloat(n2)
  } else if (operator === "multiply") {
    tot = parseFloat(n1) * parseFloat(n2)
  } else if (operator === "divide") {
    tot = parseFloat(n1) / parseFloat(n2)
  }    
  return tot  
}

const calculator = document.querySelector('.calculon'); 
const keys = calculator.querySelector(".calculon_btns"); 
const display = calculator.querySelector(".calculon_display");

keys.addEventListener('click', e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action 
    const keyContent = key.textContent 
    const displayedNum = display.textContent 
    const previouskeyType = calculator.dataset.previouskeyType

     Array.from(key.parentNode.children)
      .forEach(b => b.classList.remove("is-depressed"))

    if(!action) {
      if(displayedNum === "0" || previouskeyType === "operator") {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      calculator.dataset.previouskeyType = "number"
    }

    //DECIMAL
    if (action === "decimal") {
      if(!display.textContent.includes(".")) {
        display.textContent = displayedNum + "."
      } else if (previouskeyType === "operator") {
        display.textContent = "0."
      }
      
      calculator.dataset.previouskeyType = "decimal"
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "divide" ||
      action === "multiply"
    ) {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      if( // Store the value in dataset
        firstValue && 
        operator &&
        previouskeyType !== "operator"
      ) {
        const calcValue = operate(firstValue, operator, secondValue)
        display.textContent = calcValue

        calculator.dataset.firstValue = calcValue
      } else {
        calculator.dataset.firstValue = displayedNum
      }

      key.classList.add("is-depressed")
        calculator.dataset.previouskeyType = "operator"
        calculator.dataset.operator = action // store action into dataset    
    }

    if (action === "clear") { 
      calculator.dataset.previouskeyType = "clear"
    }

    if (action === "operate") {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      display.textContent = operate(firstValue, operator, secondValue)
      calculator.dataset.previouskeyType = "operate"
    }
  }
})






