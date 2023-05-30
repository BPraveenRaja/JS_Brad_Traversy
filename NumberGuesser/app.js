let min = 1,
    max = 10,
    winningNumber = getWinningNum(1, 10),
    guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    console.log(e.target.className);
    if(e.target.className.indexOf('play-again') != -1){
        location.reload();
    }
})
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max){
        guessInput.style.borderColor = 'red';
        setMessage(`Please enter a valid number between ${min} and ${max}`, 'red');
    }
    else{
        guessesLeft -= 1;
        if(guess === winningNumber){
            gameover("Yes, You won!", true);
        }
        else {
            if(guessesLeft === 0){
                //game over

                gameover(`Game over! The correct answer was ${winningNumber}`, false);
            }
            else {
                guessInput.style.borderColor = 'red';

                guessInput.value = '';
                setMessage(`Wrong value! Please try again, ${guessesLeft} left`, 'red');
            }
        }
    
    }
})
function gameover(msg, won){
    won === true ? color = 'green': color = 'red'               
    guessInput.disabled = true;

    guessInput.style.borderColor = color;
    setMessage(msg, color);

    //play again?
    guessBtn.value = 'Play again?';
    guessBtn.className += 'play-again';

}
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function getWinningNum(min, max){
    return (Math.floor(Math.random()*(max-min + 1)+min));
}