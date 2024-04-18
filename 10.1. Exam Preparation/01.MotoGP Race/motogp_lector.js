function solve(input) {
    const riderCount = input.shift();
    const riders = {};

    for(let i = 0; i < riderCount; i++) {
        const riderLine = input.shift();
        const riderDetails = riderLine.split('|');

        const name = riderDetails[0];
        const fuel = riderDetails[1];
        const position = riderDetails[2];

        riders[name] = {fuel: Number(fuel), position: Number(position)};
    }

    let commandLine = input.shift();

    while(commandLine !== 'Finish') {
        commandLine = commandLine.split(' - ');
        const command = commandLine.shift();

        switch (command) {
            case 'StopForFuel': {
                const riderName = commandLine.shift();
                const minimumFuel = Number(commandLine.shift());
                const changePosition = Number(commandLine.shift());

                if (riders[riderName].fuel < minimumFuel) {
                    riders[riderName].fuel = changePosition;
                    console.log(`${riderName} stopped to refuel but lost his position, now he is ${changePosition}.`);
                } else {
                    console.log(`${riderName} does not need to stop for fuel!`);
                }
                break;
            }
            case 'Overtaking': {

                break;
            }
            case 'EngineFail': {
                const riderName = commandLine.shift();
                const lapsLeft = commandLine.shift();

                delete riders[riderName];

                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish."`);

                break;
            }
        }
        commandLine = input.shift();
    }


}



solve(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])


// solve(["4",
// "Valentino Rossi|100|1",
// "Marc Marquez|90|3",
// "Jorge Lorenzo|80|4",
// "Johann Zarco|80|2",
// "StopForFuel - Johann Zarco - 90 - 5",
// "Overtaking - Marc Marquez - Jorge Lorenzo",
// "EngineFail - Marc Marquez - 10",
// "Finish"])
