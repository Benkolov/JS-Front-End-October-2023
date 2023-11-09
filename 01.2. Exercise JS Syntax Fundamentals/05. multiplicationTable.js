function printTenTimesTable(number) {
    for (let times = 1; times <= 10; times++) {
      let product = number * times;
      console.log(`${number} X ${times} = ${product}`);
    }
  }
  

printTenTimesTable(5);
printTenTimesTable(2);
