//Joshua Dalton
//IT505

let score: number = 0;

function runPlay(yards: number): Promise<void> {
    return new Promise((resolve) => { //makes a promise
        setTimeout(() => { //Waits one second
            console.log("Gained " + yards + " yards");

            if (yards >= 10) {
                score = score + 7; //TD points
                console.log("Touchdown!");
            }

            resolve();
        }, 1000);
    });
}

async function playGame(): Promise<void> { //asynchronously runs game
    console.log("Game started!");

    await runPlay(5);
    await runPlay(12);
    await runPlay(3);
    await runPlay(15);

    console.log("Final Score: " + score);
}

playGame();