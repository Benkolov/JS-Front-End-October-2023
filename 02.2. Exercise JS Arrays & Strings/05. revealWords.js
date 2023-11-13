function revealWords(wordsList, template) {
    const words = wordsList.split(', ');

    for (const word of words) {
        const wordLength = word.length;
        const replacement = '*'.repeat(wordLength);
        template = template.replace(replacement, word);
    }

    return template;
}


const wordsList1 = 'great';
const template1 = 'softuni is ***** place for learning new programming languages';
console.log(revealWords(wordsList1, template1));

const wordsList2 = 'great, learning';
const template2 = 'softuni is ***** place for ******** new programming languages';
console.log(revealWords(wordsList2, template2));
