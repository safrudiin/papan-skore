let score1 = 0;
let score2 = 0;
let timerInterval;
let totalTime = 0;

function increaseScore(player) {
    if (player === 1) {
        score1++;
    } else {
        score2++;
    }
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = `${score1} - ${score2}`;
    document.getElementById('player1-name').innerText = document.getElementById('player1').value || 'Nama Pemain 1';
    document.getElementById('player2-name').innerText = document.getElementById('player2').value || 'Nama Pemain 2';
}

function startTimer() {
    clearInterval(timerInterval);
    totalTime = 0;
    timerInterval = setInterval(() => {
        totalTime++;
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        document.getElementById('timer').innerText = `Timer: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    totalTime = 0;
    document.getElementById('timer').innerText = `Timer: 00:00`;
}
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function updateScoreDisplay() {
    document.getElementById("score").textContent = `${scorePlayer1} - ${scorePlayer2}`;
}

function increaseScore(player) {
    if (player === 1) {
        scorePlayer1++;
    } else if (player === 2) {
        scorePlayer2++;
    }
    updateScoreDisplay();
}

function resetScore() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    updateScoreDisplay();
}
