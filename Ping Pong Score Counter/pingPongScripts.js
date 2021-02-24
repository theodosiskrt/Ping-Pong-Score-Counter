const select = document.querySelector('#winningScoreSelect');
const p1Btn = document.querySelector('#p1Btn');
const p1Score = document.querySelector('#p1');
const p1ColorBtn = document.querySelector('#p1Setting');
const p1Color = document.querySelector('#p1Color');
const p2Btn = document.getElementById('p2Btn');
const p2Score = document.querySelector('#p2');
const p2ColorBtn = document.querySelector('#p2Setting');
const p2Color = document.querySelector('#p2Color');
const resetBtn = document.querySelector('#resetBtn');
const winningScoreBtn = document.querySelector('#winningScoreBtn')
const counter = document.querySelector('.counter');

let finished = false;
let p1 = 0;
let p2 = 0;
let winningScore = 5;

function checkForWin(winnerScore, loserScore, winner){
    if(winnerScore.innerText == winningScore){
        winnerScore.style.color = 'green';
        loserScore.style.color = 'red';
        const h3 = document.createElement('h3');
        h3.innerText = `${winner} wins!!!!`
        counter.after(h3);
        finished = true;
    }
}

for (let i = 1; i <= 20; i++){
    const newOption = document.createElement('option');
    newOption.innerText = `${i}`;
    select.append(newOption);
}

select.addEventListener('click', () => {
    const firstOption = select[0];
    firstOption.remove();
}, {once : true})

p1Btn.addEventListener('click', () => {
    if (finished == false){
        p1Score.innerText = `${++p1}`;
        checkForWin(p1Score,p2Score, 'Player 1');
    }else{
        alert('The game is finished, please click reset of refresh the page!')
    }
})

p2Btn.addEventListener('click', () => {
    if (finished == false){
        p2Score.innerText = `${++p2}`;
        checkForWin(p2Score, p1Score, 'Player 2');
    }else{
        alert('The game is finished, please click reset of refresh the page!')
    }
})

resetBtn.addEventListener('click', () => {
    
    p1 = p2 = p1Score.innerText = p2Score.innerText = 0;
    p1Score.style.color = p2Score.style.color = '';
    if (finished == true){
        document.querySelector('h3').remove();
        finished = false;
    }
    
})

winningScoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    winningScore = select.value;
})

p1ColorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    p1Score.style.color = p1Color.value;
    p1Btn.style.backgroundColor = p1Color.value;
})

p2ColorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    p2Score.style.color = p2Color.value;
    p2Btn.style.backgroundColor = p2Color.value;
})