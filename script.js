const questions = [
    {
        question: "O que é JSP?",
        answers: [
            { text: "Executado no navegador", correct: false },
            { text: "Transformado em Servlet no servidor", correct: true },
            { text: "É HTML puro", correct: false },
            { text: "Executado no banco de dados", correct: false }
        ]
    },
    {
        question: "Qual porta padrão do HTTP?",
        answers: [
            { text: "443", correct: false },
            { text: "8080", correct: false },
            { text: "80", correct: true },
            { text: "21", correct: false }
        ]
    },
    {
        question: "Diferença entre sendRedirect e forward:",
        answers: [
            { text: "sendRedirect mantém request", correct: false },
            { text: "forward faz nova requisição", correct: false },
            { text: "sendRedirect perde dados e muda URL", correct: true },
            { text: "forward muda URL", correct: false }
        ]
    },
    {
        question: "Qual objeto implícito representa a requisição?",
        answers: [
            { text: "response", correct: false },
            { text: "request", correct: true },
            { text: "out", correct: false },
            { text: "session", correct: false }
        ]
    },
    {
        question: "Qual objeto é usado para redirecionar?",
        answers: [
            { text: "request", correct: false },
            { text: "response", correct: true },
            { text: "session", correct: false },
            { text: "out", correct: false }
        ]
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function showQuestion() {
    resetState();
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.onclick = () => selectAnswer(btn, answer.correct);
        answersEl.appendChild(btn);
    });
}

function resetState() {
    answersEl.innerHTML = "";
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    Array.from(answersEl.children).forEach(btn => {
        btn.disabled = true;
    });
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

function showScore() {
    document.getElementById("quiz").classList.add("hidden");
    scoreEl.classList.remove("hidden");
    scoreEl.innerText = "Você acertou " + score + " de " + questions.length;
}

showQuestion();
