function findWord(word, text) {

    let lowercasedText = text.toLowerCase().split(' ');
    let output = `${word} not found!`;

    for(let index = 0; index < lowercasedText.length; index++) {
        let currentWord = lowercasedText[index];

        if(currentWord === word) {
            output = currentWord;
        }
    }

    console.log(output);
}

findWord('javascript', 'JavaScript is the best programming language');
findWord('python', 'JavaScript is the best programming language');

