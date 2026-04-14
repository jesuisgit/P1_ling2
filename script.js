const questions = [
    {
        question: "Para inserir código Java em uma página JSP que será executado no servidor, quais caracteres devem ser utilizados para abrir e fechar a marcação?",
        answers: [
            { text: "<%  %>", correct: true, explanation: "Estes são os delimitadores de Scriptlets. O código entre eles é executado no servidor antes de enviar o HTML ao cliente." },
            { text: "<?  ?>", correct: false, explanation: "Essa marcação é utilizada em PHP, não em JSP/Java." },
            { text: "<script> </script>", correct: false, explanation: "Tags <script> são para JavaScript, que executa no navegador (lado do cliente)." },
            { text: "<%+  +%>", correct: false, explanation: "O caractere correto é apenas a porcentagem (%)." }
        ]
    },
    {
        question: "Qual a principal diferença entre o método GET e o POST no protocolo HTTP?",
        answers: [
            { text: "GET envia dados na URL; POST envia no corpo da requisição.", correct: true, explanation: "O GET anexa parâmetros à URL (visível), enquanto o POST os oculta no corpo da mensagem." },
            { text: "POST é usado apenas para buscar dados.", correct: false, explanation: "GET é para busca (idempotente), POST é para envio/alteração." },
            { text: "GET é mais seguro que o POST.", correct: false, explanation: "O POST é mais seguro pois não expõe os dados na barra de endereço." }
        ]
    },
    {
        question: "Sobre o ciclo de vida de um Servlet, qual a função do método init()?",
        answers: [
            { text: "Executar toda vez que a página sofre um refresh.", correct: false, explanation: "O método que executa a cada requisição é o service()." },
            { text: "Carregar configurações iniciais apenas uma vez.", correct: true, explanation: "O init() é chamado pelo container apenas no início do ciclo de vida para inicialização." },
            { text: "Destruir os objetos da memória.", correct: false, explanation: "Essa é a função do método destroy()." }
        ]
    },
    {
        question: "Ao utilizar 'response.sendRedirect()', o que acontece com a URL no navegador?",
        answers: [
            { text: "A URL permanece a mesma.", correct: false, explanation: "Isso acontece no 'forward', não no 'sendRedirect'." },
            { text: "A URL muda para o novo endereço solicitado.", correct: true, explanation: "O sendRedirect instrui o navegador a fazer uma nova requisição, atualizando o endereço." },
            { text: "A página é fechada automaticamente.", correct: false, explanation: "O método apenas redireciona o fluxo para outra página." }
        ]
    },
    {
        question: "Qual objeto implícito do JSP é utilizado para capturar informações enviadas por um formulário HTML?",
        answers: [
            { text: "out", correct: false, explanation: "O 'out' serve para escrever dados na página (saída)." },
            { text: "response", correct: false, explanation: "O 'response' é para enviar dados de volta ao cliente." },
            { text: "request", correct: true, explanation: "O objeto 'request' encapsula todos os dados vindos da requisição do cliente." }
        ]
    },
    {
        question: "O que é o Apache Tomcat no contexto de Java Web?",
        answers: [
            { text: "Um banco de dados relacional.", correct: false, explanation: "O Tomcat não armazena dados persistentes como um banco." },
            { text: "Um Container Web ou Servidor de Aplicações.", correct: true, explanation: "Ele fornece o ambiente necessário para executar Servlets e JSPs." },
            { text: "Um editor de texto para programadores.", correct: false, explanation: "O Tomcat é um software de servidor, não uma ferramenta de edição." }
        ]
    },
    {
        question: "Para declarar uma variável global no JSP que pode ser usada em toda a classe do Servlet gerado, qual tag usamos?",
        answers: [
            { text: "<%! ... %>", correct: true, explanation: "A exclamação indica uma Declaração, criando atributos ou métodos na classe do Servlet." },
            { text: "<%= ... %>", correct: false, explanation: "Essa tag é uma Expressão, usada apenas para exibir valores no HTML." },
            { text: "<%-- ... --%>", correct: false, explanation: "Essa tag é usada para comentários que não aparecem no HTML final." }
        ]
    },
    {
        question: "O escopo 'Session' (Sessão) mantém os dados salvos por quanto tempo?",
        answers: [
            { text: "Apenas durante uma única requisição.", correct: false, explanation: "Este seria o escopo Request." },
            { text: "Enquanto o navegador do usuário estiver aberto.", correct: true, explanation: "A sessão persiste enquanto durar a interação do usuário com o servidor naquela janela/aba." },
            { text: "Até que o servidor seja reiniciado para todos os usuários.", correct: false, explanation: "Este seria o escopo Application." }
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
        btn.onclick = () => selectAnswer(btn, answer);
        answersEl.appendChild(btn);
    });
}

function resetState() {
    nextBtn.classList.add("hidden");
    answersEl.innerHTML = "";
}

function selectAnswer(button, answer) {
    const feedback = document.createElement("p");
    feedback.style.marginTop = "10px";
    feedback.style.fontSize = "0.9rem";
    feedback.style.padding = "10px";
    feedback.style.borderRadius = "5px";
    feedback.style.backgroundColor = "#1e293b";

    if (answer.correct) {
        button.classList.add("correct");
        score++;
        feedback.innerHTML = `<strong>Correto!</strong> ${answer.explanation}`;
        feedback.style.color = "#22c55e";
    } else {
        button.classList.add("wrong");
        feedback.innerHTML = `<strong>Incorreto.</strong> ${answer.explanation}`;
        feedback.style.color = "#ef4444";
        
        // Mostrar a correta
        Array.from(answersEl.children).forEach(btn => {
            const correctOption = questions[currentQuestion].answers.find(a => a.text === btn.innerText && a.correct);
            if (correctOption) btn.classList.add("correct");
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
    scoreEl.innerText = `Você acertou ${score} de ${questions.length}!`;
}

showQuestion();
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
