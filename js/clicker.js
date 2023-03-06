let countClk = 0;
function increase() {
  countClk +=2;
  let btn = document.getElementById('click-btn');
  btn.innerHTML = countClk;
}