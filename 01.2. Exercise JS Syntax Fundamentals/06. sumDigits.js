function sumOfDigits(number) {
    const numberStr = number.toString();
    let sum = 0;
  
    for (let i = 0; i < numberStr.length; i++) {
      const digit = parseInt(numberStr[i]);
      sum += digit;
    }
  
    console.log(sum);
  }
  
sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);
   