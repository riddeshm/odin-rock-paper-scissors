let humanScore = 0;
let computerScore  = 0;

function getComputerChoice()
{
    let randomNum = Math.random();
    if(randomNum < 0.33)
    {
        return "rock";
    }
    else if(randomNum > 0.33 && randomNum < 0.66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    return prompt("Enter your choice");
}

function playRound(humanChoice, computerChoice)
{
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if((human === "rock" && computer =="scissors") 
        || (human === "scissors" && computer =="paper")
        || (human === "paper" && computer =="rock"))
    {
        humanScore++;
        console.log(`You Win! ${human} beats ${computer}.`);
    }
    else if(human === computer)
    {
        console.log(`It's a tie! both selected ${human}.`);
    }
    else
    {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}.`);
    }
}

playRound(getHumanChoice(), getComputerChoice());