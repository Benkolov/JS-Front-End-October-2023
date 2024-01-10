function motoGPRace(inputData) {
    let n = parseInt(inputData[0]);
    let riders = {};

    // Parse riders' data
    for (let i = 1; i <= n; i++) {
        let [rider, fuel, position] = inputData[i].split('|');
        riders[rider] = { fuel: parseInt(fuel), position: parseInt(position) };
    }

    let output = [];
    for (let i = n + 1; i < inputData.length; i++) {
        if (inputData[i] === "Finish") break;

        let [action, ...args] = inputData[i].split(' - ');

        switch (action) {
            case "StopForFuel":
                let [rider, minFuel, changedPosition] = args;
                minFuel = parseInt(minFuel);
                changedPosition = parseInt(changedPosition);

                if (riders[rider].fuel < minFuel) {
                    riders[rider].position = changedPosition;
                    output.push(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    output.push(`${rider} does not need to stop for fuel!`);
                }
                break;

            case "Overtaking":
                let [rider1, rider2] = args;
                if (riders[rider1].position < riders[rider2].position) {
                    [riders[rider1].position, riders[rider2].position] = [riders[rider2].position, riders[rider1].position];
                    output.push(`${rider1} overtook ${rider2}!`);
                }
                break;

            case "EngineFail":
                let [riderFail, lapsLeft] = args;
                lapsLeft = parseInt(lapsLeft);
                delete riders[riderFail];
                output.push(`${riderFail} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }
    }

    // Sorting riders by their final position
    let sortedRiders = Object.entries(riders).sort((a, b) => a[1].position - b[1].position);
    sortedRiders.forEach(([rider, info]) => {
        output.push(`${rider}\n  Final position: ${info.position}`);
    });

    return output.join("\n");
}

// Test with the provided examples
let example1 = [
    "3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
];

let example2 = [
    "4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
];

console.log(motoGPRace(example1));
console.log(motoGPRace(example2));
