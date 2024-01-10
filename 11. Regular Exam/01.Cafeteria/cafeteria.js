function manageCafeteria(input) {
    // Parse the initial state of the baristas
    let numberOfBaristas = parseInt(input[0]);
    let baristas = {};
    for (let i = 1; i <= numberOfBaristas; i++) {
        let [name, shift, drinks] = input[i].split(' ');
        baristas[name] = { shift, drinks: drinks.split(',') };
    }

    // Process the commands
    for (let i = numberOfBaristas + 1; i < input.length && input[i] !== 'Closed'; i++) {
        let [command, baristaName, arg1, arg2] = input[i].split(' / ');

        switch (command) {
            case 'Prepare':
                if (baristas[baristaName].shift === arg1 && baristas[baristaName].drinks.includes(arg2)) {
                    console.log(`${baristaName} has prepared a ${arg2} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${arg2}.`);
                }
                break;

            case 'Change Shift':
                baristas[baristaName].shift = arg1;
                console.log(`${baristaName} has updated his shift to: ${arg1}`);
                break;

            case 'Learn':
                if (!baristas[baristaName].drinks.includes(arg1)) {
                    baristas[baristaName].drinks.push(arg1);
                    console.log(`${baristaName} has learned a new coffee type: ${arg1}.`);
                } else {
                    console.log(`${baristaName} knows how to make ${arg1}.`);
                }
                break;
        }
    }

    // Output the final state of the baristas
    Object.keys(baristas).forEach(name => {
        let barista = baristas[name];
        console.log(`Barista: ${name}, Shift: ${barista.shift}, Drinks: ${barista.drinks.join(', ')}`);
    });
}

// Example usage:
manageCafeteria([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'
]);
