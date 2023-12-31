function printSortedNames(names) {
    names.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

printSortedNames(["John", "Bob", "Christina", "Ema"]);
