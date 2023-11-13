function findSpecialWords(inputString) {
    const words = inputString.split(' ');

    for (const word of words) {
        if (word.startsWith('#')) {
            const specialWord = word.slice(1);

            if (/^[a-zA-Z]+$/.test(specialWord)) {
                console.log(specialWord);
            }
        }
    }
}

findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
findSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');
