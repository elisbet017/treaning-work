let inputValue = prompt("Введіть число");
inputValue = Number(inputValue);
let countClk = 0;
function increase() {
  countClk += inputValue;
  let btn = document.getElementById("click-btn");
  btn.innerHTML = countClk;
}
