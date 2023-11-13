function findWord(word, text) {

    const lowercasedWord = word.toLowerCase();
    const lowercasedText = text.toLowerCase();

    if (lowercasedText.includes(lowercasedWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

findWord('javascript', 'JavaScript is the best programming language');
findWord('python', 'JavaScript is the best programming language');

