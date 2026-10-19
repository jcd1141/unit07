//IT 505
//Joshua Dalton

function getPlayer(): Promise<string> {
    return new Promise((resolve, reject) => {
        let player: string = "Drake Maye";

        setTimeout(() => {
            if (player != "") {
                resolve(player);
            } else {
                reject("Player not found");
            }
        }, 1000);
    });
}

console.log("Loading player...");

getPlayer()
    .then((player) => {
        console.log("Player: " + player);
        return player;
    })
    .then((player) => {
        console.log(player + " plays for the Patriots");
    })
    .catch((error) => {
        console.log("Error: " + error);
    })
    .finally(() => {
        console.log("Finished loading player");
    });