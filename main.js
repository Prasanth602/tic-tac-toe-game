'use strict';

let turnOf = 1;
let buttonValues = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

function refeshBoard(){
    let playerTurn = document.getElementById('player-turn');
    playerTurn.innerHTML = `This is player ${turnOf}`;
    console.log(`buttonValues = ${JSON.stringify(buttonValues)}`);
}

function charToWinner(char){
    if(char === 'X'){
        return 1;
    }else{
        return 2;
    }
}
function dectectWinner (){
    if(buttonValues[0] === buttonValues[1] && buttonValues[1] === buttonValues[2] && buttonValues[2] !== ' '){
        return charToWinner(buttonValues[0]);
    }else if(buttonValues[3] === buttonValues[4] && buttonValues[4] === buttonValues[5] && buttonValues[3] !== ' '){
        return charToWinner(buttonValues[3]);
    }else if(buttonValues[6] === buttonValues[7] && buttonValues[7] === buttonValues[8] && buttonValues[7] !== ' '){
        return charToWinner(buttonValues[6]);
    }else if(buttonValues[0] === buttonValues[3] && buttonValues[3] === buttonValues[6] && buttonValues[6] !== ' '){
        return charToWinner(buttonValues[0]);
    }else if(buttonValues[1] === buttonValues[4] && buttonValues[4] === buttonValues[7] && buttonValues[7] !== ' '){
        return charToWinner(buttonValues[1]);
    }else if(buttonValues[2] === buttonValues[5] && buttonValues[5] === buttonValues[8] && buttonValues[8] !== ' '){
        return charToWinner(buttonValues[2]);
    }else if(buttonValues[0] === buttonValues[4] && buttonValues[4] === buttonValues[8] && buttonValues[8] !== ' '){
        return charToWinner(buttonValues[0]);
    }else if(buttonValues[2] === buttonValues[4] && buttonValues[4] === buttonValues[6] && buttonValues[6] !== ' '){
        return charToWinner(buttonValues[0]);
    }else{
        return 0;
    }
}

function playerClicked(buttonNo){
    console.log(`button no ${buttonNo} clicked`);
    let char = null;
    if(turnOf === 1){
        char = 'X';
        turnOf = 2;
    }else{
        char = 'O'
        turnOf = 1 ;
    }
    
    let buttons = document.getElementsByClassName('btn');
    buttons[buttonNo].disabled = true;
    buttons[buttonNo].value = char;
    buttonValues[buttonNo] = char;
    let winnerNo = dectectWinner();
    if(winnerNo !== 0){
      let element =  document.getElementById('verdict');
      element.innerText = `Game ended.. winner is ${winnerNo}`;
    }
    refeshBoard();
   
}