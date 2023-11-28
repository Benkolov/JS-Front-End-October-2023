function charactersInRange(char1, char2) {
    const code1 = char1.charCodeAt(0);
    const code2 = char2.charCodeAt(0);

    const start = Math.min(code1, code2);
    const end = Math.max(code1, code2);

    const characters = [];

    for (let i = start + 1; i < end; i++) {
        characters.push(String.fromCharCode(i));
    }

    console.log(characters.join(' '));
}


charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
