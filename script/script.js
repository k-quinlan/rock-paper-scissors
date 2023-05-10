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

//function play a round: playerselection(string - any capitalisation), computerselection
//return: "You XXXXX: XXXX beats XXXX"



//script
