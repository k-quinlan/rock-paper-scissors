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
    let cleanInput = input.toString().toLowerCase();
    return cleanInput;
}

//check player input
function checkPlayerInput(cleanInput) {
    if (cleanInput === "rock" || cleanInput === "scissors" || cleanInput === "paper") {
        //do nothing - check passed
    } else {
        throw "Incorrect Input";
    }
    return;
}

//get player input
function getPlayerinput() {
    try {
        let input = prompt("Rock, paper, scissors?");
        let cleanInput = cleanPlayerInput(input);
        checkPlayerInput(cleanInput);
        return cleanInput;
    } catch (e) {
        alert(e);
    }
}

//function play a round: playerselection(string - any capitalisation), computerselection
function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return `You draw: ${playerSelection} matches ${computerSelection}`;
    } else {
        let testValue = playerSelection.charAt(0)+computerSelection.charAt(0);
        switch (testValue) {
            case 'rp':
            case 'ps':
            case 'sr':
                return `You lose: ${playerSelection} is beaten by ${computerSelection}`;
                break;
            case 'rs':
            case 'pr':
            case 'sp':
                return `You win: ${playerSelection} beats ${computerSelection}`;
                break;
        }
    }

// R,P - L
// R,S - W
// P,R - W
// P,S - L
// S,R - L
// S,P - W

}



//return: "You XXXXX: XXXX beats XXXX"



//script
//alert(getPlayerinput());
//alert(playRound(getPlayerinput(),getCompChoice()));
