const questions = [
    {
        question: "Hewan apa yang secara biologis tidak benar-benar mati karena usia tua?" ,
        answers: [ 
            { text: "Gurita", correct: false},
            { text: "Hiu paus", correct: false},
            { text: "Ubur-ubur Turritopsis dohrnii", correct: true},
            { text: "Lumba-lumba", correct: false}
        ]
    },
    {
        question: "Berapa banyak tulang yang dimiliki bayi saat lahir?" ,
        answers: [ 
            { text: "206", correct: false},
            { text: "180", correct: false},
            { text: "Sekitar 270", correct: true},
            { text: "320", correct: false}
        ]
    },
    {
        question: "Planet mana yang punya hari lebih lama daripada tahunnya?" ,
        answers: [ 
            { text: "Mars", correct: false},
            { text: "Venus", correct: true},
            { text: "Jupiter", correct: false},
            { text: "Saturnus", correct: false}
        ]
    },
    {
        question: "Cahaya Matahari sampai ke Bumi sekitar...",
        answers: [ 
            { text: "8 menit", correct: true},
            { text: "8 detik", correct: false},
            { text: "1 jam", correct: false},
            { text: "24 menit", correct: false}
        ]
    },
    {
        question: "Apa unsur kimia yang paling banyak di alam semesta?" ,
        answers: [ 
            { text: "Oksigen", correct: false},
            { text: "Karbon", correct: false},
            { text: "Hidrogen", correct: true},
            { text: "Helium", correct: false}
        ]
    },
    {
        question: "Apa organ terbesar pada tubuh manusia?" ,
        answers: [ 
            { text: "Hati", correct: false},
            { text: "Otak", correct: false},
            { text: "Kulit", correct: true},
            { text: "Paru-paru", correct: false}
        ]
    },
    {
        question: "Gurun terbesar di dunia adalah..." ,
        answers: [ 
            { text: "Sahara", correct: false},
            { text: "Gobi", correct: false},
            { text: "Antartika", correct: true},
            { text: "Arab", correct: false}
        ]
    },
    {
        question: "Negara dengan zona waktu terbanyak adalah..." ,
        answers: [ 
            { text: "Amerika Serikat", correct: false},
            { text: "Prancis", correct: true},
            { text: "Indonesia", correct: false},
            { text: "Rusia", correct: false}
        ]
    },
    {
        question: "Berapa hati gurita?" ,
        answers: [ 
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false}
        ]
    },
    {
        question: "Hewan apa yang sidik jarinya mirip manusia?" ,
        answers: [ 
            { text: "Koala", correct: true},
            { text: "Panda", correct: false},
            { text: "Kanguru", correct: false},
            { text: "Kera", correct: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.
        length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();




