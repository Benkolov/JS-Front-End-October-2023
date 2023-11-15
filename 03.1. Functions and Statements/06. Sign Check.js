function signCheck(numOne, numTwo, numThree) {
    const negativesCount = [numOne, numTwo, numThree].filter(num => num < 0).length;
    const result = negativesCount % 2 === 0 ? 'Positive' : 'Negative';

    console.log(result);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
