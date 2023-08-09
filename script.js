'use strict';

let score0El = document.getElementById("score--0")
let score1El = document.getElementById("score--1")

let diceEl = document.querySelector(".dice")
let btnNew = document.querySelector(".btn--new")
let btnRoll = document.querySelector(".btn--roll")
let btnHold = document.querySelector(".btn--hold")

let player0El = document.querySelector(".player--0")
let player1El = document.querySelector(".player--1")

const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")

let scores, currentScore, activePlayer, playing

const init = () => {

    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    diceEl.classList.add("hidden")
    current0El.textContent = 0
    current0El.textContent = 0

    score0El.textContent = 0
    score1El.textContent = 0

    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")

    player0El.classList.add("player--active")
    player1El.classList.remove("player--active")
}

init()

const swithPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0

    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1

        diceEl.classList.remove("hidden")
        diceEl.src = `dice-${dice}.png`

        if (dice !== 1) {
            // add to the main score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            // switch player
            swithPlayer()
        }
    }
})

btnHold.addEventListener('click', function () {

    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    if (scores[activePlayer] >= 10) {
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        document.querySelector(`.player--${activePlayer}`).classList.add("player--active")
        diceEl.classList.remove("hidden")

    } else {
        swithPlayer();
    }
})

btnNew.addEventListener('click', init)

