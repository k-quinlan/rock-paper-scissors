//functions
//get computer choice
function getCompChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    switch (rand) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
            break;
        default:
            console.log("error: computer choice");
    }
}

console.log(getCompChoice());


//clean player input
function cleanPlayerInput(input) {
    let cleanInput = toLowerCase.toString(input);
    return cleanInput;
}

//check player input
function checkPlayerInput(cleanInput) {
    if (cleanInput === "rock" || "scissors" || "paper") {
        //do nothing - check passed
    } else {
        alert("Incorrect Input");
    }
    return;
}

//get player input
function getPlayerinput() {
    let input = prompt("Rock, paper, scissors?");
    let cleanInput = cleanPlayerInput(input);
    checkPlayerinput(cleanInput);
    return cleanInput;
}


//function play a round: playerselection(string - any capitalisation), computerselection
//return: "You XXXXX: XXXX beats XXXX"



//script
