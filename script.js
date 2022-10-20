function operate(x, y) {
  return add(x, y)
}

add = (x, y) => x+y;

const displayValue = document.getElementById("display");
const numBtnClick = document.querySelectorAll(".num");

numBtnClick.forEach(numBtn => numBtn.addEventListener("click", () => {
  displayValue.textContent += numBtn.textContent;
}));

let displayInt = parseInt(displayValue.textContent)


