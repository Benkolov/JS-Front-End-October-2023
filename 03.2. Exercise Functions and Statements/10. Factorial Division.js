function factorialDivisionAndPrint(firstNumber, secondNumber) {
    function calculateFactorial(number) {
        if (number === 0 || number === 1) {
            return 1;
        } else {
            return number * calculateFactorial(number - 1);
        }
    }

    const factorialFirst = calculateFactorial(firstNumber);
    const factorialSecond = calculateFactorial(secondNumber);

    const result = (factorialFirst / factorialSecond).toFixed(2);

    console.log(result);
}

factorialDivisionAndPrint(5, 2);
factorialDivisionAndPrint(6, 2);

