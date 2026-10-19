//Joshua Dalton
//IT 505

let yards: number[] = [5, 12, -3, 8, 15];
let total: number = 0;

const DEBUG = true; //Debug switch on/off

function addYards(yards: number): void {
    if (DEBUG == true) {
        console.log("Yards gained: " + yards);
        console.trace();
        console.count("Plays");
    }

    total = total + yards;
}

for (let i = 0; i < yards.length; i++) {
    addYards(yards[i]);
}

console.log("Total yards: " + total);