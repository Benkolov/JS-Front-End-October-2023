function extractEveryNthElement(arr, step) {
    
    let result = [];
    
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    // result = result.join("\n");
    return result;
}

console.log(extractEveryNthElement(['5', '20', '31', '4', '20'], 2));