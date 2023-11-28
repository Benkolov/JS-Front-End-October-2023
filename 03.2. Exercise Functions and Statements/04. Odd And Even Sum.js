function oddAndEvenSum(number) {
    const numberString = number.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let digit of numberString) {
        const digitValue = parseInt(digit);

        if (digitValue % 2 === 0) {
            evenSum += digitValue;
        } else {
            oddSum += digitValue;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
