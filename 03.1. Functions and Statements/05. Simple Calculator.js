function simpleCalculator(numOne, numTwo, operator) {
    const calculations = {
        'multiply': numOne * numTwo,
        'divide': numOne / numTwo,
        'add': numOne + numTwo,
        'subtract': numOne - numTwo
    };

    return calculations[operator];
}

console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(50, 13, 'subtract'));

