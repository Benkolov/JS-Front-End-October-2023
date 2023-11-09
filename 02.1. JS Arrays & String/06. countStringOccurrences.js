function countWordOccurrences(text, word) {
    const words = text.split(/\s+/);

    let count = 0;

    for (const w of words) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);
}


countWordOccurrences('This is a word and it also is a sentence', 'is');
countWordOccurrences('softuni is great place for learning new programming languages', 'softuni');

