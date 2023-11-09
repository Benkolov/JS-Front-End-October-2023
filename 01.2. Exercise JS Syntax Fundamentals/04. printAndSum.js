function printNumbersAndSum(start, end) {
    let sum = 0;
    let numbers = [];
  
    for (let i = start; i <= end; i++) {
      numbers.push(i);
      sum += i;
    }
  
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
  }
  

printNumbersAndSum(5, 10);
printNumbersAndSum(0, 26);
printNumbersAndSum(50, 60);

  