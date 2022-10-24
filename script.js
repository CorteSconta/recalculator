const wholeCalc = document.querySelector('.calculon'); //all calc selected
const btns = wholeCalc.querySelector(".calculon_btns"); //
const display = document.querySelector("#calculon_display");

btns.addEventListener('click', e => {
  if (e.target.matches("button")) {
    const btn = e.target; //btn target of the event
    const action = btn.dataset.action //e.target.classList.contains("opr")
    const btnsText = btn.textContent // value of the text inside the buttons
    const currentNum = display.textContent //number on display
    const previousBtnType = wholeCalc.dataset.previousBtnType

    //check if 0 is the only number and if it's not, concat.
    if(!action) {
      if(currentNum === "0" || previousBtnType === "operator") {
        display.textContent = btnsText;
      } else {
        display.textContent = currentNum + btnsText
      }
      console.log("number")
    }

    if (
      action === ("add") ||
      action === ("subtract") ||
      action === ("divide") ||
      action === ("multiply")
    ) {
      btn.classList.add("is-depressed")
      wholeCalc.dataset.previousBtnType = "operator"
      wholeCalc.dataset.firstNum = currentNum
      wholeCalc.dataset.operator = action
      console.log("operator")
    }

    //Add the "." 
    if (action === ("decimal")) {
      display.textContent = currentNum + "."
      console.log("decimal")
    }

    if (action === ("equal")) {
      const secondNum = currentNum
      console.log("equal")
    }

    if (action === ("clear")) {
      console.log("clear")
    }

    //Remove class pressed from children of BTNS (parent node)
    Array.from(btn.parentNode.children)
      .forEach(b => b.classList.remove("is-depressed"))

    const operate = (n1, n2, operator) => {
      let tot = ""

      switch(operator) {
        case "add":
          tot = n1 + n2
          break
        case "subtract": 
          tot = n1 - n2
          break
        case "multiply": 
          tot = n1 * n2 
          break
        case "divide":
          tot = n1 / n2
          break
      }


    }



  }
})






