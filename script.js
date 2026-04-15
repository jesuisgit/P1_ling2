const questions = [
    // --- MARCAÇÕES E SINTAXE JSP (Aula 3 e 4) ---
    {
        question: "Para inserir código Java que deve ser processado no servidor antes de enviar o HTML, qual combinação de caracteres é utilizada?",
        answers: [
            { text: "<%  %>", correct: true, explanation: "Estes são os Scriptlets. O símbolo '%' entre as tags indica ao servidor que o conteúdo interno é código Java executável." },
            { text: "<%=  %>", correct: false, explanation: "Esta é a tag de Expressão, usada apenas para exibir/imprimir um valor diretamente." },
            { text: "<%!  %>", correct: false, explanation: "Esta é a tag de Declaração, usada para criar métodos ou variáveis globais na classe." }
        ]
    },
    {
        question: "Qual tag JSP é usada para imprimir um valor diretamente na resposta HTML enviada ao navegador?",
        answers: [
            { text: "<%= ... %>", correct: true, explanation: "Conhecida como tag de Expressão. Exemplo: <%= nome %> exibe o conteúdo da variável nome no navegador." },
            { text: "<%-- ... --%>", correct: false, explanation: "Esta tag serve para comentários Java no JSP que não aparecem no código-fonte do navegador." },
            { text: "<% ... %>", correct: false, explanation: "O Scriptlet executa código, mas não imprime nada automaticamente sem o uso do objeto 'out'." }
        ]
    },

    // --- PROTOCOLO HTTP (Aula 2) ---
    {
        question: "No protocolo HTTP, qual método anexa os parâmetros diretamente na URL, tornando-os visíveis ao usuário?",
        answers: [
            { text: "POST", correct: false, explanation: "O POST envia dados escondidos no corpo da mensagem." },
            { text: "GET", correct: true, explanation: "O método GET coloca os dados na String de consulta da URL (Ex: pagina.jsp?id=10)." },
            { text: "PUT", correct: false, explanation: "Método usado geralmente para atualização completa de recursos." }
        ]
    },
    {
        question: "Qual código de status HTTP o servidor envia quando uma página não é encontrada?",
        answers: [
            { text: "200", correct: false, explanation: "200 significa 'OK' (sucesso)." },
            { text: "500", correct: false, explanation: "500 indica um erro interno no código do servidor." },
            { text: "404", correct: true, explanation: "404 é o erro padrão para 'Not Found' (Recurso não encontrado)." }
        ]
    },

    // --- FUNCIONAMENTO JSP/SERVLET (Aula 3 e 6) ---
    {
        question: "O que acontece tecnicamente na primeira vez que um usuário acessa um arquivo .jsp?",
        answers: [
            { text: "O navegador baixa o arquivo Java.", correct: false, explanation: "O navegador nunca recebe código Java, apenas o HTML gerado." },
            { text: "O servidor converte o JSP em um Servlet Java e o compila.", correct: true, explanation: "O fluxo é: JSP -> .java (Servlet) -> .class (Compilado) -> Execução." },
            { text: "O servidor envia o código-fonte JSP para o banco de dados.", correct: false, explanation: "O JSP é processado pelo Container Web (como o Tomcat), não pelo banco." }
        ]
    },
    {
        question: "Qual o papel do Apache Tomcat na arquitetura Java Web?",
        answers: [
            { text: "É o navegador usado para testar o código.", correct: false, explanation: "Navegadores são Chrome, Firefox, etc." },
            { text: "É o Banco de Dados da aplicação.", correct: false, explanation: "Exemplos de bancos seriam MySQL ou PostgreSQL." },
            { text: "É o Container Web (Servidor) que executa Servlets e JSPs.", correct: true, explanation: "Ele fornece o ambiente (JVM + bibliotecas) para as aplicações web Java rodarem." }
        ]
    },

    // --- OBJETOS IMPLÍCITOS E ESCOPOS (Aula 5 e 6) ---
    {
        question: "Qual objeto implícito é utilizado para recuperar os dados enviados por um formulário (<input name='txtNome'>)?",
        answers: [
            { text: "response", correct: false, explanation: "Response trata da saída (servidor para o cliente)." },
            { text: "request", correct: true, explanation: "O objeto request captura tudo o que vem do cliente (parâmetros, cabeçalhos, etc)." },
            { text: "session", correct: false, explanation: "Session armazena dados entre várias páginas do mesmo usuário." }
        ]
    },
    {
        question: "Para redirecionar o usuário para uma nova página mudando a URL no navegador, qual comando usamos?",
        answers: [
            { text: "request.forward()", correct: false, explanation: "O forward é interno no servidor e NÃO muda a URL no navegador." },
            { text: "response.sendRedirect()", correct: true, explanation: "O sendRedirect avisa ao navegador para pedir uma nova página, alterando o endereço na barra." },
            { text: "out.print()", correct: false, explanation: "O out apenas escreve texto na página atual." }
        ]
    },
    {
        question: "Qual escopo (scope) permite que um dado seja visto por TODOS os usuários do sistema simultaneamente?",
        answers: [
            { text: "Application", correct: true, explanation: "O escopo Application é global para a aplicação web inteira enquanto o servidor estiver rodando." },
            { text: "Session", correct: false, explanation: "Session é individual por usuário/navegador aberto." },
            { text: "Request", correct: false, explanation: "Request dura apenas o tempo de carregar uma página." }
        ]
    },

    // --- CICLO DE VIDA (Aula 4) ---
    {
        question: "Qual método do Servlet é responsável por processar a lógica de negócio a cada nova requisição?",
        answers: [
            { text: "init()", correct: false, explanation: "O init roda apenas uma vez no início (configuração)." },
            { text: "service()", correct: true, explanation: "O service é chamado em cada requisição e decide se chama doGet ou doPost." },
            { text: "destroy()", correct: false, explanation: "O destroy roda apenas quando o servidor está desligando." }
        ]
    },
    {
        question: "Onde ficam armazenadas as classes Java e bibliotecas (.jar) dentro de um projeto Web padrão?",
        answers: [
            { text: "Na pasta WEB-INF/lib", correct: true, explanation: "Seguindo o padrão Java EE, bibliotecas ficam em lib e classes compiladas em classes dentro de WEB-INF." },
            { text: "Diretamente na pasta 'src'", correct: false, explanation: "A pasta 'src' contém o código fonte, não o projeto pronto para rodar." },
            { text: "Na pasta 'css'", correct: false, explanation: "A pasta css é apenas para estilos visuais." }
        ]
    },
    {
        question: "O que significa dizer que o protocolo HTTP é 'Stateless'?",
        answers: [
            { text: "Que ele não consegue enviar imagens.", correct: false, explanation: "HTTP envia qualquer tipo de mídia." },
            { text: "Que o servidor não guarda estado entre uma requisição e outra automaticamente.", correct: true, explanation: "Por isso usamos o objeto 'session' para lembrar quem é o usuário logado." },
            { text: "Que a conexão fica aberta para sempre.", correct: false, explanation: "O HTTP abre, envia a resposta e fecha a conexão." }
        ]
    },
    {
        question: "Em um arquivo web.xml, para que serve a tag <servlet-mapping>?",
        answers: [
            { text: "Para definir a cor de fundo do site.", correct: false, explanation: "Estilos são definidos no CSS." },
            { text: "Para vincular uma URL específica a uma classe Servlet Java.", correct: true, explanation: "Ele diz ao Tomcat: 'quando alguém acessar /login, execute a classe LoginServlet'." },
            { text: "Para criar as tabelas no banco de dados.", correct: false, explanation: "O banco de dados é independente do web.xml." }
        ]
    },
    {
        question: "Qual a função da diretiva <%@ page import='package.Classe' %>?",
        answers: [
            { text: "Importar estilos CSS.", correct: false, explanation: "CSS é importado via tag <link> no HTML." },
            { text: "Tornar classes externas acessíveis para uso dentro do JSP.", correct: true, explanation: "Sem o import, o JSP não reconhece classes como ArrayList ou classes do seu próprio projeto." },
            { text: "Fazer o download de arquivos do servidor.", correct: false, explanation: "Ela serve apenas para referência de código no desenvolvimento." }
        ]
    },
    {
        question: "Qual a diferença entre usar o comentário e <%-- --%> no JSP?",
        answers: [
            { text: "Nenhuma, os dois são iguais.", correct: false, explanation: "Eles se comportam de forma muito diferente no servidor." },
            { text: "<%-- --%> não é enviado para o navegador (oculto), enquanto aparece no 'Exibir código fonte'.", correct: true, explanation: "Comentários JSP são removidos durante a fase de tradução no servidor." },
            { text: "trava o servidor Java.", correct: false, explanation: "Ele é apenas um comentário HTML comum." }
        ]
    },
    {
        question: "No contexto de Orientação a Objetos em LP2, para que serve o 'Casting'?",
        answers: [
            { text: "Para apagar um objeto da memória.", correct: false, explanation: "Isso é feito pelo Garbage Collector." },
            { text: "Para forçar um objeto de um tipo genérico ser tratado como um tipo específico.", correct: true, explanation: "Ex: (Tenis) request.getAttribute('prod') converte o objeto genérico de volta para a classe Tenis." },
            { text: "Para mudar o nome de uma variável.", correct: false, explanation: "Casting muda o tipo de referência, não o nome." }
        ]
    },
    {
        question: "Qual objeto implícito permite escrever diretamente no log do servidor para depuração?",
        answers: [
            { text: "application", correct: false, explanation: "Usado para dados globais." },
            { text: "config", correct: true, explanation: "O objeto ServletConfig (config) pode ser usado para acessar o contexto e logs de erro iniciais." },
            { text: "page", correct: false, explanation: "Referência à instância do Servlet atual." }
        ]
    },
    {
        question: "O que o comando 'request.getAttribute()' faz?",
        answers: [
            { text: "Lê dados digitados pelo usuário no formulário.", correct: false, explanation: "Para isso usamos o getParameter()." },
            { text: "Recupera um objeto que foi guardado no servidor durante o fluxo da requisição.", correct: true, explanation: "Usado para passar objetos do Servlet para o JSP após um 'forward'." },
            { text: "Envia um e-mail automaticamente.", correct: false, explanation: "Não tem relação com envio de e-mails." }
        ]
    },
    {
        question: "Na arquitetura MVC apresentada em aula, o JSP geralmente assume qual papel?",
        answers: [
            { text: "Controller (Controle)", correct: false, explanation: "O Controller geralmente é feito por Servlets." },
            { text: "View (Visão/Interface)", correct: true, explanation: "O JSP é responsável pela camada de apresentação visual ao usuário." },
            { text: "Model (Modelo/Dados)", correct: false, explanation: "Model são as classes Java puras (POJOs) e o Banco de Dados." }
        ]
    },
    {
        question: "O que significa a sigla JSP?",
        answers: [
            { text: "Java Standard Pages", correct: false, explanation: "Termo incorreto." },
            { text: "Java Server Pages", correct: true, explanation: "Páginas de Servidor Java, indicando que o processamento ocorre no lado do servidor." },
            { text: "JavaScript Pages", correct: false, explanation: "JavaScript e JSP são tecnologias diferentes." }
        ]
    }
];

// --- Lógica do Quiz (Não alterada, apenas mantida) ---
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
    const feedback = document.createElement("div");
    feedback.style.marginTop = "15px";
    feedback.style.padding = "15px";
    feedback.style.borderRadius = "8px";
    feedback.style.fontSize = "0.9rem";
    feedback.style.lineHeight = "1.4";

    if (answer.correct) {
        button.classList.add("correct");
        score++;
        feedback.style.backgroundColor = "rgba(34, 197, 94, 0.2)";
        feedback.style.border = "1px solid #22c55e";
        feedback.innerHTML = `<strong>Correto!</strong><br>${answer.explanation}`;
    } else {
        button.classList.add("wrong");
        feedback.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
        feedback.style.border = "1px solid #ef4444";
        feedback.innerHTML = `<strong>Incorreto.</strong><br>${answer.explanation}`;
        
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
    const total = questions.length;
    const aproveitamento = Math.round((score / total) * 100);
    scoreEl.innerText = `Simulado Finalizado!\n\nVocê acertou ${score} de ${total}.\nDesempenho: ${aproveitamento}%`;
}

showQuestion();
