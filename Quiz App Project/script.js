let startScreen = document.querySelector('.start-screen')
let startBtn = document.querySelector('#start')
let quizContainer = document.querySelector('.container')
let userScore = document.querySelector('#user-score')
let displayContainer = document.querySelector('.display-container')
let timeleft = document.querySelector('.time-left')
let restartBtn = document.querySelector('#restart')
let restartContainer = document.querySelector('.restart-container')
let scoreMsg = document.querySelector('.score-message')
let nextBtn = document.querySelector('#next-button')
let questionValue = document.querySelector('.number-of-question')
let ansMsg = document.querySelector('.guess-msg')

let count = 11;
let countdown;
let questionCount;
let score = 0;

let quizArray = [];
let options = [];

async function randomQuestion() {
    const response = await fetch(
    'https://opentdb.com/api.php?amount=10&category=18'
    );
    const data = await response.json();
    return (quizArray = data.results);
}



window.onload = function(){
    startScreen.classList.remove('hide')
    displayContainer.classList.add('hide')
}

startBtn.addEventListener('click', function(){
    startScreen.classList.add('hide')
    displayContainer.classList.remove('hide')
    play();
})

function quizCreator(){
    for(let i of quizArray){
        i.options.sort(() => Math.random() - 0.5);
        let quiz_div = document.createElement('div')
        quiz_div.classList.add('container-mid', 'hide')
        questionValue.innerHTML = `Question: 1 / ${quizArray.length}`
        let question_div = document.createElement('p')
        question_div.classList.add('question')
        question_div.innerHTML = i.question;
        quiz_div.appendChild(question_div);

        

        quiz_div.innerHTML += `
        <button class="option-div" onclick="check(this)">${i.options[0]}</button>
        <button class="option-div" onclick="check(this)">${i.options[1]}</button>
        <button class="option-div" onclick="check(this)">${i.options[2]}</button>
        <button class="option-div" onclick="check(this)">${i.options[3]}</button>`

        quizContainer.appendChild(quiz_div)
    }
}

function check(useroption){
    let userSolution = useroption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount]
    let options = question.querySelectorAll('.option-div')

    if(userSolution === quizArray[questionCount].correct_answer){
        useroption.classList.add('correct')
        ansMsg.innerHTML = `Your answer is correct`
        score++;
        userScore.innerHTML = `Score: ${score} / ${quizArray.length}`
    }else{
        useroption.classList.add('incorrect')
        ansMsg.innerHTML = `Your answer is wrong`
        options.forEach((element) => {
            if(element.innerText == quizArray[questionCount].correct_answer){
                element.classList.add('correct')
            }
        })
    }

    clearInterval(countdown);
    options.forEach(element => {
        element.disabled = true;
    })
}

const quizDisplay = function(questionCount){
    let quizCards = document.querySelectorAll('.container-mid')
    quizCards.forEach((card) => {
        card.classList.add('hide')
    })
    quizCards[questionCount].classList.remove('hide')
}

const timerDisplay = function(){
    countdown = setInterval(() =>{
        count--;
        timeleft.innerHTML = `${count}`
        if(count === 0){
            clearInterval(countdown);
            displayNext();
        }
    }, 1000)
}

nextBtn.addEventListener('click', (displayNext = function(){
    questionCount +=1;
    if(questionCount === quizArray.length){
        displayContainer.classList.add('hide')
        restartContainer.classList.remove('hide')
        scoreMsg.innerHTML = `Your score is ${score}`
    }else{
        questionValue.innerHTML = `Question: ${questionCount + 1} / ${quizArray.length}`

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
        ansMsg.innerHTML = ``
    }
}))

restartBtn.addEventListener('click', () =>{
    play();
    restartContainer.classList.add('hide')
    displayContainer.classList.remove('hide')
})

async function play(){
    await randomQuestion().then(() => {return quizArray})


    for(let i of quizArray){
        i.options = [i.incorrect_answers[0],i.incorrect_answers[1], i.incorrect_answers[2], i.correct_answer]
    }

    //alternative way to add options array
    // quizArray.map(obj => {
    //   obj.options = [obj.incorrect_answers[0],obj.incorrect_answers[1], obj.incorrect_answers[2], obj.correct_answer]
    //   return obj;
    // })
    
    quizContainer.innerHTML= ''
    questionCount = 0;
    score = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    ansMsg.innerHTML = ``
    userScore.innerHTML = `Score: ${score} / ${quizArray.length}`
}

