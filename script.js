function computerPlay(){
    let number = Math.floor(Math.random() * 8);

    if (number <= 2) {
        return "rock";
    }
    else if (number <= 5){
        return "paper";
    }
    else{
        return "scissors";
    }  
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
   

    if(playerSelection === computerSelection){
        return "It's a tie! You and the Computer picked the same thing."
    }

    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! You selected Paper, Computer selected Rock. Paper covers Rock";
    }
    else if(playerSelection === "paper" && computerSelection ==="scissors"){
        return "You lose :( You selected Paper, Computer selected Scissors. Scissors cuts Paper.";
    }

// *****************************************************************************
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! You selected Rock, Computer selected Scissors. Rock smashes Scissors";
    }
    else if(playerSelection === "rock" && computerSelection ==="paper"){
        return "You lose :( You selected Rock, Computer selected Paper. Paper covers Rock.";
    }

// *****************************************************************************

    if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! You selected Scissors, Computer selected Paper. Scissors cuts Paper";
    }
    else if(playerSelection === "scissors" && computerSelection ==="rock"){
        return "You lose :( You selected Scissors, Computer selected Rock. Rock smashes Scissors";
    }

// *****************************************************************************

     if(playerSelection != "rock" || "paper" || "scissors"){
        return "You did not type Rock, Paper, or Scissors"
    }
}

let gameNumber = 0;

function game(){
    
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Type Rock, Paper or Scissors to play").toLowerCase();
        const computerSelection = computerPlay();
        gameNumber++;
        console.log("Game number " + gameNumber + ":" + " " + playRound(playerSelection, computerSelection));
    }
}

game(); 