let userScore = 0;//scores start from zero
let computerScore = 0;

const userScore_span  = document.getElementById("user-score"); //dom variables
const computerScore_span  = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getCompChoice(){

    const choices = ["r", "p", "s"];

    const randChoice = Math.floor(Math.random() * choices.length);

    const computerSelection = choices[randChoice];

    return computerSelection;
}



function convertToWord(letter){
    if (letter === "r"){
        return "Rock";
    } else if (letter === "p"){
        return "Paper";
    } else if (letter === "s"){
        return "Scissors";
    }
}


function playRound(){
    game();
    if (userScore === 5 || computerScore === 5){
        result_p.innerHTML = `${userScore}You win this round`;

    }
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore; 

    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)} . You win!!`;

    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('green-glow')}, 300);
}



function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)} . You lose!!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('red-glow')}, 300);
}

function draw(user){

    result_p.innerHTML = ` DRAW!!!!!!!!`;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('grey-glow')}, 300);
}


function game(userChoice){
    const computerChoice = getCompChoice();
    // console.log("user choice ==>" + userChoice);
    // console.log("Computer choice ==> " + computerChoice);

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    });
    
    paper_div.addEventListener('click', function(){
        game('p');
    });
    
    scissors_div.addEventListener('click', function(){
        game('s');
    });
}

main();
playRound();