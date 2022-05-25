function getComputerChoice() {
    const comp  = Math.random(); 
    if( comp < 0.34 ) return 'rock';
    if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
    return 'paper';
}

function getResult(comp,player) {
    if( player == comp ) return 'DRAW!';
    if( player == 'rock') return ( comp == 'scissors') ? 'WIN!' : 'LOSE!';
    if( player == 'scissors') return ( comp == 'rock') ? 'LOSE!' : 'WIN!';
    if( player == 'paper') return ( comp == 'scissors') ? 'LOSE!' : 'WIN!';
}

function randomize() {
    const computerImage = document.querySelector('.computer-image');
    const image = ['rock', 'scissors', 'paper'];
    let i = 0;
    const startTime = new Date().getTime();
    setInterval(function() {
        if( new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }
        computerImage.setAttribute('src', 'img/' + image[i++] + '.png');
        if( i == image.length) i = 0;
    }, 100)
}

const choice = document.querySelectorAll('li img');
choice.forEach(function(c) {
    c.addEventListener('click', function() {
    const compChoice = getComputerChoice();
    const playerChoice = c.className;
    const result = getResult(compChoice, playerChoice);

    randomize();

    setTimeout(function() {
        const compImage = document.querySelector('.computer-image');
        compImage.setAttribute('src', 'img/' + compChoice + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = result;
        }, 1000);
    });

});



// const pRock = document.querySelector('.rock');
// pRock.addEventListener('click', function() {
//     const compChoice = getComputerChoice();
//     const playerChoice = pRock.className;
//     const result = getResult(compChoice, playerChoice);

//     const compImage = document.querySelector('.computer-image');
//     compImage.setAttribute('src', 'img/' + compChoice + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = result;
// });


