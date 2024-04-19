function decodeSpell(input) {
    let spell = input[0];
    let commands = input.slice(1);
    for (let command of commands) {
        let parts = command.split('!');
        switch (parts[0]) {
            case "RemoveEven":
                spell = spell.split('').filter((_, i) => i % 2 === 0).join('');
                console.log(spell);
                break;
            case "TakePart":
                let fromIndex = Number(parts[1]);
                let toIndex = Number(parts[2]);
                spell = spell.substring(fromIndex, toIndex);
                console.log(spell);
                break;
            case "Reverse":
                let substring = parts[1];
                let index = spell.indexOf(substring);
                if (index !== -1) {
                    spell = spell.substring(0, index) + spell.substring(index + substring.length) + substring.split('').reverse().join('');
                    console.log(spell);
                } else {
                    console.log("Error");
                }
                break;
            case "End":
                console.log(`The concealed spell is: ${spell}`);
                break;
        }
    }
}

decodeSpell(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", "TakePart!31!42", "RemoveEven", "Reverse!anim", "Reverse!sad", "End"]);

