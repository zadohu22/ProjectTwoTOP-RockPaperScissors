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

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const resultsDiv = document.getElementById("results");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const playerScoreCounter = document.getElementById("playerCounter");
const computerScoreCounter = document.getElementById("computerCounter");
const titleText = document.getElementById("titleText");
const playAgain = document.getElementById("playAgain");


 


btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);
playAgain.addEventListener("click", resetGame);


function resetGame(){
    window.location.reload();
}

function playRound(playerSelection, computerSelection){
    
  

    function isGameOver(){
        if(computerScoreCounter.innerHTML == 5 || playerScoreCounter.innerHTML == 5){
            return true;
        }else{
            return false;
        }
    }

    function youWin(){
        titleText.innerHTML = "You Win :D";
        playAgain.className = "playAgain";
        btnRock.className = "btnHide";
        btnPaper.className = "btnHide";
        btnScissors.className = "btnHide";
        resultsDiv.innerText = "";
    }

    function youLose(){
        titleText.innerHTML = "You Lose :(";
        playAgain.className = "playAgain";
        btnRock.className = "btnHide";
        btnPaper.className = "btnHide";
        btnScissors.className = "btnHide";
        resultsDiv.innerText = "";
    }


    function logComputerScore(){
        let number = computerScoreCounter.innerHTML;
        number++;
        computerScoreCounter.innerHTML = number;
    }

    function logPlayerScore(){
        let number = playerScoreCounter.innerHTML;
        number++;
        playerScoreCounter.innerHTML = number;
    }

    console.log(computerScoreCounter.innerHTML);
    console.log(titleText.innerHTML);
    // titleText.innerHTML = "sdf"

   

    playerSelection = this.innerText.toLowerCase();
    computerSelection = computerPlay();

    if(playerSelection === computerSelection){
        resultsDiv.innerText = "It's a tie! You and the Computer both picked " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }

    if(playerSelection === "paper" && computerSelection === "rock"){
        resultsDiv.innerText = "You win! You selected Paper, Computer selected Rock. Paper covers Rock";
        logPlayerScore();
        if(isGameOver() === true){
            youWin();
        }
    }
    else if(playerSelection === "paper" && computerSelection ==="scissors"){
        resultsDiv.innerText = "You lose :( You selected Paper, Computer selected Scissors. Scissors cuts Paper.";
        logComputerScore();
        if(isGameOver() === true){
            youLose();
        }
    }

// *****************************************************************************
    if(playerSelection === "rock" && computerSelection === "scissors"){
        resultsDiv.innerText = "You win! You selected Rock, Computer selected Scissors. Rock smashes Scissors";
        logPlayerScore();
        if(isGameOver() === true){
            youWin();
        }
    }
    else if(playerSelection === "rock" && computerSelection ==="paper"){
        resultsDiv.innerText = "You lose :( You selected Rock, Computer selected Paper. Paper covers Rock.";
        logComputerScore();
        if(isGameOver() === true){
            youLose();
        }
    }

// *****************************************************************************

    if(playerSelection === "scissors" && computerSelection === "paper"){
        resultsDiv.innerText = "You win! You selected Scissors, Computer selected Paper. Scissors cuts Paper";
        logPlayerScore();
        if(isGameOver() === true){
            youWin();
        }
    }
    else if(playerSelection === "scissors" && computerSelection ==="rock"){
        resultsDiv.innerText = "You lose :( You selected Scissors, Computer selected Rock. Rock smashes Scissors";
        logComputerScore();
        if(isGameOver() === true){
            youLose();
        }
    }
}

let gameNumber = 0;





// function game(){;
    
//     for (let i = 0; i < 5; i++){;
//         const playerSelection = prompt("Type Rock, Paper or Scissors to play").toLowerCase();
//         const computerSelection = computerPlay();
//         gameNumber++;
//         console.log("Game number " + gameNumber + ":" + " " + playRound(playerSelection, computerSelection));
//     };
// };

// game(); 