function revealWords(wordsList, template) {
    const words = wordsList.split(', ');

    for (const word of words) {
        const wordLength = word.length;
        const replacement = '*'.repeat(wordLength);
        template = template.replace(replacement, word);
    }

    return template;
}

console.log(revealWords('great', 'softuni is ***** place for learning new programming languages'));
console.log(revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'));
