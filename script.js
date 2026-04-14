const questions = [
    {
        question: "Qual é o papel do Container Web (como o Tomcat) em relação ao JSP?",
        answers: [
            { text: "Renderizar o código Java diretamente no navegador.", correct: false },
            { text: "Traduzir o JSP em um Servlet, compilar e executar no servidor.", correct: true },
            { text: "Apenas armazenar arquivos estáticos de HTML.", correct: false },
            { text: "Converter o banco de dados em páginas CSS.", correct: false }
        ]
    },
    {
        question: "Sobre o 'sendRedirect', é correto afirmar que:",
        answers: [
            { text: "Ele ocorre inteiramente dentro do servidor.", correct: false },
            { text: "Mantém os atributos do objeto 'request'.", correct: false },
            { text: "Solicita ao navegador que faça uma nova requisição para outra URL.", correct: true },
            { text: "É mais rápido que o 'forward'.", correct: false }
        ]
    },
    {
        question: "Qual objeto implícito é usado para compartilhar dados entre todos os usuários da aplicação?",
        answers: [
            { text: "session", correct: false },
            { text: "pageContext", correct: false },
            { text: "application", correct: true },
            { text: "request", correct: false }
        ]
    },
    {
        question: "No ciclo de vida de um Servlet, qual método é executado para cada nova requisição do cliente?",
        answers: [
            { text: "init()", correct: false },
            { text: "service()", correct: true },
            { text: "destroy()", correct: false },
            { text: "main()", correct: false }
        ]
    },
    {
        question: "Como você recupera um valor enviado por um campo de texto chamado 'usuario' em um Servlet?",
        answers: [
            { text: "request.getAttribute('usuario')", correct: false },
            { text: "response.getParameter('usuario')", correct: false },
            { text: "request.getParameter('usuario')", correct: true },
            { text: "session.read('usuario')", correct: false }
        ]
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result-container");
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
    nextBtn.classList.add("hidden");
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
        // Destaca a resposta correta se o usuário errar
        const ans = questions[currentQuestion].answers.find(a => a.text === btn.innerText);
        if (ans.correct) btn.classList.add("correct");
    });

    nextBtn.classList.remove("hidden");
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
    quizDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
    scoreEl.innerText = `Você acertou ${score} de ${questions.length}!`;
}

showQuestion();
