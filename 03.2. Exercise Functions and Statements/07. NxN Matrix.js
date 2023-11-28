function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(n);
        }

        console.log(row.join(' '));
    }
}

printMatrix(3);
printMatrix(7);
printMatrix(2);

