/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];
/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;
/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('#result-display');
/*-------------------------------- Functions --------------------------------*/
//const play = () => console.log('play')

const getPlayerChoice = (event) => {
    playerChoice = event.target.id;
    console.log('playerChoice: ' , playerChoice);
    getComputerChoice()
};
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    console.log('computer Choice: ' , computerChoice);
};

/*const play = (event) => {
    getPlayerChoice(event);
    console.log('playerChoice: ' , playerChoice);
    // OR(SEE LINE 14) console.log(playerChoice)
    getComputerChoice()
};*/

const compare = () => {
    // if player and comp pick the same thing: tie
    // else if player: rock, comp: scissors: we win!!
    // else if player: paper, comp: rock: we win!!
    // else if player: scissors, comp: paper: we win!!
    // else you lose!!!
    if (playerChoice === computerChoice) {
      msg = 'You tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
      // "rock" vs. "scissors"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
      // "paper" vs. "rock"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
      // "scissors" vs. "paper"
      msg = 'Congrats! You win!';
    } else {
      msg = 'You lose! Try again?';
    }
    console.log(msg)
  };

  const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`;
    console.log(msg);
  }
  
  const play = (event) => {
    getPlayerChoice(event);
    console.log('playerChoice: ' , playerChoice);
    // OR(SEE LINE 14) console.log(playerChoice)
    getComputerChoice()
    compare()
    render()
};


/*const play = (event) => {
    console.log(event.target);
}*/
/*----------------------------- Event Listeners -----------------------------*/
/*document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);*/
document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click' , play);
  });
  /* This is a arrow function
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', play);
  });*/
  