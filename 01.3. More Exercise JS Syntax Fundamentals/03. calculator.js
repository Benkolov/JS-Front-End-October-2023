function calculate(num1, operator, num2) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          console.log("Error: Division by zero");
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log("Error: Invalid operator");
        return;
    }
  
    console.log(result.toFixed(2));
  }
  
  
  calculate(5, '+', 3); 
  calculate(10, '*', 2);
  calculate(15, '/', 4);
  calculate(8, '-', 12);
  calculate(10, '/', 0);
  calculate(7, '%', 3);
  