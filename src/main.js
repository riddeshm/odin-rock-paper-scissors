console.log(getHumanChoice());

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
