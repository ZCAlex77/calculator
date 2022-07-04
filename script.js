window.onload = () =>{
  const displayP = document.querySelector('#display'),
        resultP = document.querySelector('#result');

  let num1 = '0', num2 = '0', operator = '';

  const operate = (num1, num2, operator) =>{
    let n1 = Number(num1), n2 = Number(num2);
    switch(operator){
      case '+': return n1 + n2;
      case '-': return n1 - n2;
      case '*': return n1 * n2;
      case '/': return n1 / n2;
    }
  }

  const updateDisplay = (targetDisplay, value) =>{
    switch(targetDisplay){
      case 'result': resultP.textContent = value; break;
      case 'display': displayP.textContent = value; break;
    }
  }

  const displayResult = (result) =>{
    num2 = String(result);
    num2 = num2.includes('.')?(num2.length - 1 - num2.indexOf('.') > 2?num2.slice(0, num2.indexOf('.')+3):num2):num2;
    num1 = '0';
    updateDisplay('result', num2);
  }

  document.querySelectorAll('.num').forEach(el => el.addEventListener('click', function(){
    if(num2 === '0') num2 = this.dataset.value;
    else num2 = num2 + this.dataset.value;
    updateDisplay('result', num2);
  }));

  document.querySelectorAll('.operator').forEach(el => el.addEventListener('click', function(){
    if(num1 !== '0' && num2 !== '0'){
      displayResult(operate(num1, num2, operator));
    }
    operator = this.dataset.value;
    if(num2 !== '0') num1 = num2;
    num2 = '0';
    updateDisplay('display', `${num1} ${operator}`);
  }))

  document.querySelector('#equal').addEventListener('click', function(){
    if(num2 !== '0' && operator && displayP.textContent[displayP.textContent.length-1] !== '='){
      updateDisplay('display', `${num1} ${operator} ${num2} =`);
      displayResult(operate(num1, num2, operator));
    }
  })

  document.querySelector('#clear').addEventListener('click', function(){
    [num1, num2, operator] = ['0', '0', ''];
    updateDisplay('result', '0');
    updateDisplay('display', '');
  })

  document.querySelector('#delete').addEventListener('click', function(){
    if(num2.length === 1) num2 = '0';
    else num2 = num2.slice(0, num2.length-1);
    updateDisplay('result', num2);
  })

  document.querySelector('#sign').addEventListener('click', function(){
    num2 = -num2;
    updateDisplay('result', num2);
  })

  document.querySelector('#float').addEventListener('click', function(){
    if(!num2.includes('.')){
      num2 += '.';
      updateDisplay('result', num2);
    }
    })
}