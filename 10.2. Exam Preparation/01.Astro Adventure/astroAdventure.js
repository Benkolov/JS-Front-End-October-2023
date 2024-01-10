function astroAdventure(input) {
    let astronauts = {};
    let numAstronauts = parseInt(input.shift());

    // Initialize astronauts
    for (let i = 0; i < numAstronauts; i++) {
        let [name, oxygen, energy] = input.shift().split(' ');
        astronauts[name] = {
            oxygen: parseInt(oxygen),
            energy: parseInt(energy)
        };
    }

    // Process commands
    for (let command of input) {
        if (command === 'End') break;

        let [action, astronautName, amount] = command.split(' - ');
        amount = parseInt(amount);

        switch (action) {
            case 'Explore':
                if (astronauts[astronautName].energy >= amount) {
                    astronauts[astronautName].energy -= amount;
                    console.log(`${astronautName} has successfully explored a new area and now has ${astronauts[astronautName].energy} energy!`);
                } else {
                    console.log(`${astronautName} does not have enough energy to explore!`);
                }
                break;
            case 'Refuel':
                astronauts[astronautName].energy = Math.min(astronauts[astronautName].energy + amount, 200);
                console.log(`${astronautName} refueled their energy by ${amount}!`);
                break;
            case 'Breathe':
                let oxygenRecovered = Math.min(100 - astronauts[astronautName].oxygen, amount);
                astronauts[astronautName].oxygen += oxygenRecovered;
                console.log(`${astronautName} took a breath and recovered ${oxygenRecovered} oxygen!`);
                break;
        }
    }

    // Print final status of astronauts
    for (let astronaut in astronauts) {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygen}, Energy: ${astronauts[astronaut].energy}`);
    }
}

// Example usage
astroAdventure([
    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'End'
]);
