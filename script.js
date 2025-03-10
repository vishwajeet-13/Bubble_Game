let timer = 60;
let score = 0;
let newHit = 0;


function generateBubbles() {
    document.querySelector('.pbtm').innerHTML = '';
    for (let i = 0; i <= 107; i++) {
        let random = Math.floor(Math.random() * 10);
        let html = `<div class="bubble">${random}</div>`;
        document.querySelector('.pbtm').innerHTML += html;
    }
}
function runTimer() {
    let interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('.timer').textContent = timer;
        }
        else {
            clearInterval(interval);
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over:</h1><br>
            <h3>Your Score is ${score}</h3>`;
        }
    },1000);
    
}

function getNewHit() {
    newHit = Math.floor(Math.random() * 10);
    document.querySelector('#newHit').textContent = newHit;
}

function increaseScore() {
            score+=10;
            document.querySelector('#score').textContent = score;
} 

document.querySelector('.pbtm').addEventListener('click', function(dets){
    let clickedNum= (Number(dets.target.textContent) == newHit) 
    if (clickedNum) {
        increaseScore();
        generateBubbles();
        getNewHit();
    }
} );

generateBubbles();
runTimer();
getNewHit();
