const questions = [
    // --- Questões da Parte 1 ---
    {
        question: "Para inserir código Java em uma página JSP que será executado no servidor, quais caracteres devem ser utilizados para abrir e fechar a marcação?",
        answers: [
            { text: "<%  %>", correct: true, explanation: "Estes são os delimitadores de Scriptlets." },
            { text: "<?  ?>", correct: false, explanation: "Essa marcação é utilizada em PHP." },
            { text: "<script> </script>", correct: false, explanation: "Tags <script> são para JavaScript (Client-side)." }
        ]
    },
    {
        question: "Qual a principal diferença entre o método GET e o POST no protocolo HTTP?",
        answers: [
            { text: "GET envia dados na URL; POST envia no corpo da requisição.", correct: true, explanation: "GET anexa parâmetros à URL; POST os oculta no corpo." },
            { text: "GET é mais seguro que o POST.", correct: false, explanation: "O POST é mais seguro pois não expõe dados na URL." }
        ]
    },
    // --- Questões da Parte 2 (Unificadas) ---
    {
        question: "Qual método do Servlet centraliza as requisições e decide se deve chamar doGet() ou doPost()?",
        answers: [
            { text: "service()", correct: true, explanation: "O service() despacha as requisições para os métodos do/get/post correspondentes." },
            { text: "main()", correct: false, explanation: "Servlets não usam o método main tradicional." }
        ]
    },
    {
        question: "Como se chama a área no JSP reservada para declaração de variáveis e métodos globais (<%! ... %>)?",
        answers: [
            { text: "Declaração", correct: true, explanation: "Tags com '!' são declarações que viram membros da classe." },
            { text: "Scriptlet", correct: false, explanation: "Scriptlets são apenas blocos de código executável." }
        ]
    }
    // Adicione as outras questões seguindo o mesmo padrão...
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
    questionEl.innerText = `${currentQuestion + 1}. ${q.question}`;

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.onclick = () => selectAnswer(btn, answer);
        answersEl.appendChild(btn);
    });
}

function resetState() {
    nextBtn.classList.add("hidden");
    answersEl.innerHTML = "";
}

function selectAnswer(button, answer) {
    // Criar elemento de feedback
    const feedback = document.createElement("p");
    feedback.className = "feedback-text"; // Use uma classe CSS para estilo
    
    if (answer.correct) {
        button.classList.add("correct");
        score++;
        feedback.innerHTML = `<strong>Correto!</strong> ${answer.explanation || ""}`;
        feedback.style.color = "#22c55e";
    } else {
        button.classList.add("wrong");
        feedback.innerHTML = `<strong>Incorreto.</strong> ${answer.explanation || ""}`;
        feedback.style.color = "#ef4444";
        
        // Destacar a correta
        Array.from(answersEl.children).forEach(btn => {
            const correctOpt = questions[currentQuestion].answers.find(a => a.text === btn.innerText && a.correct);
            if (correctOpt) btn.classList.add("correct");
        });
    }

    answersEl.appendChild(feedback);
    Array.from(answersEl.children).forEach(btn => { if(btn.tagName === "BUTTON") btn.disabled = true; });
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
    const percent = Math.round((score / questions.length) * 100);
    scoreEl.innerText = `Simulado Concluído!\nAcertos: ${score} de ${questions.length} (${percent}%)`;
}

// Inicia o quiz
showQuestion();
