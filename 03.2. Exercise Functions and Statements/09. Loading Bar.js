function drawLoadingBar(percentage) {
    const filledSymbols = percentage / 10;
    const emptySymbols = 10 - filledSymbols;

    const loadingBar = `[${'%'.repeat(filledSymbols)}${'.'.repeat(emptySymbols)}]`;

    console.log(`${percentage}% ${loadingBar}`);

    if (percentage === 100) {
        console.log("Complete!");
    } else {
        console.log("Still loading...");
    }
}

drawLoadingBar(30);
drawLoadingBar(50);
drawLoadingBar(100);

