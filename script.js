window.onload = () =>{
  const displayP = document.querySelector('#display'),
        resultP = document.querySelector('#result');

  let num1 = 0, num2 = 0, operator = '';

  const operate = (num1, num2, operator) =>{
    switch(operator){
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
      case '=': return num1;
    }
  }

  const updateDisplay = (targetDisplay, value) =>{
    switch(targetDisplay){
      case 'result': resultP.textContent = value; break;
      case 'display': displayP.textContent = value; break;
    }
  }

  document.querySelectorAll('.num').forEach(el => el.addEventListener('click', function(){
    num2 = num2 * 10 + Number(this.dataset.value);
    updateDisplay('result', num2);
  }));

  document.querySelectorAll('.operator').forEach(el => el.addEventListener('click', function(){
    if(num1 !== 0 && num2 !== 0){
      let result = operate(num1, num2, operator);
      updateDisplay('result', result);
      num2 = result;
    }
    operator = this.dataset.value;
    num1 = num2;
    num2 = 0;
    updateDisplay('display', `${num1} ${operator}`);
  }))
}