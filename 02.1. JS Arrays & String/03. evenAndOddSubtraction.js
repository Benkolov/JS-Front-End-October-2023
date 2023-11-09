function calculateEvenOddDifference(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    const difference = sumEven - sumOdd;

    console.log(difference);
}

calculateEvenOddDifference([1,2,3,4,5,6]);
calculateEvenOddDifference([3,5,7,9]);
calculateEvenOddDifference([2,4,6,8,10]);

