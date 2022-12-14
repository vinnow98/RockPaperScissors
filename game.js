let draw = 0;
let btns = document.querySelectorAll('.btn')
let myChoice = document.querySelector(".myChoice")
let computerChoice = document.querySelector(".comChoice")
let round = document.querySelector("#round");
let myScore = document.querySelector("#myScore");
let comScore = document.querySelector("#comScore");
let roundResult = document.querySelector("#roundResult");
let finalResult = document.querySelector("#finalResult")
let rounds = 1
let myScores = 0
let comScores = 0
let draws = 0

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let userInput = btn.id
        let comInput = comChoice()
        myChoice.textContent = `My Choice is ${userInput}`
        computerChoice.textContent = `Com choice is ${comInput}`
        let com = convertChoice(comInput)
        let me = convertChoice(userInput)
        // alert(`com = ${comInput}, me = ${userInput}`)
        fight(com, me)
        if (myScores == 5 || comScores == 5) {
            finalScoreboard()
        }
    })
})

function fight(com, me) {
    round.textContent = `round ${rounds}, fight!`
    //0 = rock, 1= paper , 2 = scissors
    if (com == 0 && me == 2 || com == 1 && me == 0 || com == 2 && me == 1) {
        roundResult.textContent = `Com wins this round!`
        comScores++
        comScore.textContent = `Computer Score is ${comScores}`
    } else if (com == me) {
        roundResult.textContent = `Its a draw!`
        draws++
    } else {
        roundResult.textContent = `You win this round!`
        myScores++
        myScore.textContent = `My score is ${myScores}`
    }
    rounds++
}

function convertChoice(choice) {
    if (choice == "rock") {
        return 0
    } else if (choice == "paper") {
        return 1
    } else if (choice == "scissors") {
        //scissors
        return 2
    } else {
        return undefined
    }
}



function comChoice() {
    let randChoice = Math.floor(Math.random() * 3)
    if (randChoice == 0) {
        return "rock"
    } else if (randChoice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


function finalScoreboard() {
    if (comScores == 5) {
        finalResult.textContent = `Com win! Final stats :\nTotal rounds = ${rounds - 1} \nCom Score = ${comScores}\nMy Score = ${myScores}\nDraws = ${draws}`
    } else if (myScores == 5) {
        finalResult.textContent = `You win! Final stats :\nTotal rounds = ${rounds - 1} \nCom Score = ${comScores}\nMy Score = ${myScores}\nDraws = ${draws}`
    }

}