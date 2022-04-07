const btnNew = document.querySelector('.btn_new');
const btnRoll = document.querySelector('.btn_roll');
const btnHold = document.querySelector('.btn_hold');

const score0 = document.querySelector('#score_0');
const score1 = document.querySelector('#score_1');

const current0 = document.querySelector('#current_0');
const current1 = document.querySelector('#current_1');

const player0 = document.querySelector('.player_0');
const player1 = document.querySelector('.player_1');

const diceEl = document.querySelector('.dice');

let scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true

const switchPlayer = function () {
    document.getElementById(`current_${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('active')
    player1.classList.toggle('active')
}

btnRoll.addEventListener('click', function () {

    if (playing) {

        const randomNumber = Math.floor(Math.random() * 6) + 1
        diceEl.classList.remove('hidden')
        diceEl.src = `./img/dice-${randomNumber}.png`

        if (randomNumber != 1) {
            currentScore += randomNumber
            document.getElementById(`current_${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer()
        }
    }

})

btnHold.addEventListener('click', function () {

    if (playing) {

        //1. Add current score to active player`s score
        scores[activePlayer] += currentScore
        document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer]

        //2. Check if player`s score is >= 100
        if (scores[activePlayer] >= 30) {
            playing = false
            diceEl.classList.add('hidden')
            document.querySelector(`.player_${activePlayer}`).classList.add('winner_player');
            document.querySelector(`.player_${activePlayer}`).classList.remove('active');
        } else {
            switchPlayer()
        }
    }
})

btnNew.addEventListener('click', function () {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    score0.textContent = 0
    score1.textContent = 0

    current0.textContent = 0
    current1.textContent = 0

    diceEl.classList.add('hidden')

    player0.classList.remove('winner_player')
    player1.classList.remove('winner_player')

    player0.classList.add('active')
    player1.classList.remove('active')



})