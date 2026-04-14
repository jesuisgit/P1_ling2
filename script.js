const questions = [
    // --- AULA 1 & 2: PROTOCOLO HTTP & INTRODUÇÃO ---
    {
        question: "Qual método HTTP envia dados no corpo da requisição, sendo mais seguro para informações sensíveis?",
        answers: [
            { text: "GET", correct: false },
            { text: "POST", correct: true },
            { text: "PUT", correct: false },
            { text: "DELETE", correct: false }
        ]
    },
    {
        question: "O que caracteriza uma requisição HTTP do tipo GET?",
        answers: [
            { text: "Os parâmetros são enviados no corpo da mensagem.", correct: false },
            { text: "Os parâmetros são anexados diretamente na URL.", correct: true },
            { text: "É usada para enviar arquivos grandes ao servidor.", correct: false },
            { text: "Não possui limite de tamanho para os dados enviados.", correct: false }
        ]
    },
    // --- AULA 3 & 4: SERVLETS & CICLO DE VIDA ---
    {
        question: "Qual o nome do arquivo XML utilizado para configurar o mapeamento de Servlets na aplicação?",
        answers: [
            { text: "server.xml", correct: false },
            { text: "config.xml", correct: false },
            { text: "web.xml", correct: true },
            { text: "index.xml", correct: false }
        ]
    },
    {
        question: "No ciclo de vida de um Servlet, qual método é executado apenas uma vez no carregamento inicial?",
        answers: [
            { text: "service()", correct: false },
            { text: "doGet()", correct: false },
            { text: "init()", correct: true },
            { text: "destroy()", correct: false }
        ]
    },
    {
        question: "Qual método do Servlet centraliza as requisições e decide se deve chamar doGet() ou doPost()?",
        answers: [
            { text: "main()", correct: false },
            { text: "service()", correct: true },
            { text: "execute()", correct: false },
            { text: "run()", correct: false }
        ]
    },
    // --- AULA 5: JSP (JAVA SERVER PAGES) ---
    {
        question: "Qual a função do Container Web ao encontrar um arquivo JSP pela primeira vez?",
        answers: [
            { text: "Executa o Java no navegador do cliente.", correct: false },
            { text: "Transforma o JSP em um Servlet (classe Java) e o compila.", correct: true },
            { text: "Envia o código-fonte JSP direto para o banco de dados.", correct: false },
            { text: "Apaga o código Java e mantém apenas o HTML.", correct: false }
        ]
    },
    {
        question: "Qual tag é usada para definir uma 'Expressão' no JSP, que escreve algo direto no HTML?",
        answers: [
            { text: "<% ... %>", correct: false },
            { text: "<%! ... %>", correct: false },
            { text: "<%= ... %>", correct: true },
            { text: "<%-- ... --%>", correct: false }
        ]
    },
    {
        question: "Como se chama a área no JSP reservada para declaração de variáveis e métodos globais (<%! ... %>)?",
        answers: [
            { text: "Scriptlet", correct: false },
            { text: "Expressão", correct: false },
            { text: "Declaração", correct: true },
            { text: "Comentário", correct: false }
        ]
    },
    // --- AULA 6: OBJETOS IMPLÍCITOS E ESCOPOS ---
    {
        question: "Qual objeto implícito é usado para obter parâmetros vindos de um formulário?",
        answers: [
            { text: "response", correct: false },
            { text: "out", correct: false },
            { text: "request", correct: true },
            { text: "session", correct: false }
        ]
    },
    {
        question: "Para manter o usuário logado em várias páginas, qual escopo (scope) deve ser utilizado?",
        answers: [
            { text: "page", correct: false },
            { text: "request", correct: false },
            { text: "session", correct: true },
            { text: "application", correct: false }
        ]
    },
    {
        question: "Qual a diferença entre Forward e Redirect?",
        answers: [
            { text: "Forward é feito pelo cliente; Redirect é feito pelo servidor.", correct: false },
            { text: "Forward mantém a mesma requisição; Redirect cria uma nova requisição.", correct: true },
            { text: "Redirect é mais rápido e não muda a URL.", correct: false },
            { text: "Forward é usado apenas para sites externos.", correct: false }
        ]
    },
    {
        question: "Qual código HTTP indica que a requisição foi bem-sucedida (OK)?",
        answers: [
            { text: "404", correct: false },
            { text: "500", correct: false },
            { text: "200", correct: true },
            { text: "302", correct: false }
        ]
    },
    {
        question: "O objeto implícito 'application' armazena dados que ficam disponíveis para:",
        answers: [
            { text: "Apenas para a página atual.", correct: false },
            { text: "Apenas para o usuário logado.", correct: false },
            { text: "Todos os usuários e todas as páginas da aplicação.", correct: true },
            { text: "Apenas durante uma única requisição.", correct: false }
        ]
    },
    {
        question: "Qual diretiva JSP é usada para incluir o conteúdo de outro arquivo de forma estática?",
        answers: [
            { text: "<%@ include file='...' %>", correct: true },
            { text: "<%@ page import='...' %>", correct: false },
            { text: "<%@ taglib ... %>", correct: false },
            { text: "<jsp:forward />", correct: false }
        ]
    },
    {
        question: "O que o método 'response.sendRedirect()' faz no navegador?",
        answers: [
            { text: "Limpa o cache do navegador.", correct: false },
            { text: "Instrui o navegador a ir para uma nova URL.", correct: true },
            { text: "Exibe uma mensagem de erro na tela.", correct: false },
            { text: "Fecha a aba atual.", correct: false }
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
    questionEl.innerText = `${currentQuestion + 1}. ${q.question}`;

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
        // Mostra a correta para ajudar no estudo
        Array.from(answersEl.children).forEach(btn => {
            const ans = questions[currentQuestion].answers.find(a => a.text === btn.innerText);
            if (ans.correct) btn.classList.add("correct");
        });
    }

    Array.from(answersEl.children).forEach(btn => btn.disabled = true);
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

showQuestion();

showQuestion();
