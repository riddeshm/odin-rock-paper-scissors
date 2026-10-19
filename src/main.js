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

function playGame()
{
    let humanScore = 0;
    let computerScore  = 0;
    let rounds = 0;

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

    while(rounds < 5)
    {
        playRound(getHumanChoice(), getComputerChoice());
        rounds++;
    }

    if(humanScore > computerScore)
    {
        console.log(`You Win the game with score ${humanScore} - ${computerScore}`);
    }
    else if (humanScore === computerScore)
    {
        console.log(`Game is tied with score ${humanScore} - ${computerScore}`);
    }
    else 
    {
        console.log(`You Lose the game with score ${humanScore} - ${computerScore}`);
    }
}

playGame();