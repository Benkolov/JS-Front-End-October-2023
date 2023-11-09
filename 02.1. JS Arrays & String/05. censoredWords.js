function replaceWordWithAsterisks(text, word) {
    const regex = new RegExp(word, 'g');
    const result = text.replace(regex, match => '*'.repeat(match.length));

    console.log(result);
}

replaceWordWithAsterisks('A small sentence with some words', 'small');
replaceWordWithAsterisks('Find the hidden word', 'hidden');

