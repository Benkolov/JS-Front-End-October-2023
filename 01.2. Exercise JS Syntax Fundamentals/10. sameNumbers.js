function checkSameNumbers(number) {
    const numberStr = number.toString();
    let isSame = true;
    let sum = 0;
  
    for (let i = 0; i < numberStr.length; i++) {
      const digit = parseInt(numberStr[i]);
      sum += digit;
  
      if (digit !== parseInt(numberStr[0])) {
        isSame = false;
      }
    }
  
    console.log(isSame);
    console.log(sum);
  }
  

checkSameNumbers(2222222);
checkSameNumbers(1234);

  