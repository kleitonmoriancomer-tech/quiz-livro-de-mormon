// ====================================================================
// 1. DADOS: O array 'questions' COMPLETO com 20 perguntas
// ====================================================================

const questions = [
    {
        question: "1. Qual é o nome do objeto que Leí recebeu para guiar sua família pelo deserto?",
        answers: [
            { text: "A Brúxula Divina", correct: false },
            { text: "A Liahona", correct: true },
            { text: "O Siblon", correct: false },
            { text: "A Pedra de Oriom", correct: false }
        ]
    },
    {
        question: "2. Em qual livro do Livro de Mórmon encontramos o Sermão do Rei Benjamin?",
        answers: [
            { text: "1 Néfi", correct: false },
            { text: "Alma", correct: false },
            { text: "Mosias", correct: true },
            { text: "Helamã", correct: false }
        ]
    },
    {
        question: "3. Quem foi o profeta que testemunhou do Salvador no topo de um muro?",
        answers: [
            { text: "Abinádi", correct: false },
            { text: "Samuel, o Lamanita", correct: true },
            { text: "Alma, o Filho", correct: false },
            { text: "Néfi, o filho de Helamã", correct: false }
        ]
    },
    {
        question: "4. Qual dos irmãos de Néfi estava disposto a ir a Jerusalém para obter as placas de latão?",
        answers: [
            { text: "Lamã", correct: false },
            { text: "Lemuel", correct: false },
            { text: "Jacó", correct: false },
            { text: "Sam", correct: true }
        ]
    },
    {
        question: "5. O que Morôni 7:47 define como 'o puro amor de Cristo'?",
        answers: [
            { text: "Esperança", correct: false },
            { text: "Fé", correct: false },
            { text: "Caridade", correct: true },
            { text: "Humildade", correct: false }
        ]
    },
    {
        question: "6. Qual profeta foi queimado na fogueira por pregar o arrependimento ao Rei Noé?",
        answers: [
            { text: "Alma", correct: false },
            { text: "Abinádi", correct: true },
            { text: "Mosias", correct: false },
            { text: "Gideão", correct: false }
        ]
    },
    {
        question: "7. O que representa a 'barra de ferro' na visão da Árvore da Vida de Leí?",
        answers: [
            { text: "A lei de Moisés", correct: false },
            { text: "A palavra de Deus", correct: true },
            { text: "As riquezas do mundo", correct: false },
            { text: "O evangelho restaurado", correct: false }
        ]
    },
    {
        question: "8. Quem liderou os 'jovens guerreiros' que prometeram jamais duvidar?",
        answers: [
            { text: "Capitão Morôni", correct: false },
            { text: "Helamã", correct: true },
            { text: "Zerahemnah", correct: false },
            { text: "Amon", correct: false }
        ]
    },
    {
        question: "9. Onde Jesus Cristo apareceu aos nefitas após Sua Ressurreição?",
        answers: [
            { text: "Na Terra de Zaraenla", correct: false },
            { text: "No Templo na Terra de Abundância", correct: true },
            { text: "Em Jerusalém", correct: false },
            { text: "Na Cidade de Néfi", correct: false }
        ]
    },
    {
        question: "10. Qual é a principal promessa feita em Morôni 10:4-5?",
        answers: [
            { text: "Saber a verdade sobre todas as coisas", correct: true },
            { text: "Ser perdoado de todos os pecados", correct: false },
            { text: "Receber o dom de línguas", correct: false },
            { text: "Ter paz nesta vida", correct: false }
        ]
    },
    {
        question: "11. Quem é o último profeta a escrever no Livro de Mórmon?",
        answers: [
            { text: "Néfi", correct: false },
            { text: "Mórmon", correct: false },
            { text: "Morôni", correct: true },
            { text: "Éter", correct: false }
        ]
    },
    {
        question: "12. Qual frase famosa é dita pelo Rei Benjamim sobre servir ao próximo e a Deus?",
        answers: [
            { text: "O homem natural é inimigo de Deus.", correct: false },
            { text: "A iniquidade nunca foi felicidade.", correct: false },
            { text: "Quando estais a serviço de vosso próximo, estais somente a serviço de vosso Deus.", correct: true },
            { text: "Lembrai-vos, lembrai-vos de que é sobre a rocha...", correct: false }
        ]
    },
    {
        question: "13. Qual povo foi poupado de ser morto, pois fizeram um juramento de não mais guerrear e enterraram suas armas?",
        answers: [
            { text: "Os Amonitas (ou Anti-Néfi-Leítas)", correct: true },
            { text: "Os Zoramiitas", correct: false },
            { text: "Os Jareditas", correct: false },
            { text: "Os Mulequitas", correct: false }
        ]
    },
    {
        question: "14. A expressão 'E assim vemos' é frequentemente usada por qual profeta para introduzir uma lição doutrinária?",
        answers: [
            { text: "Jacó", correct: false },
            { text: "Mórmon", correct: false },
            { text: "Alma", correct: true },
            { text: "Enos", correct: false }
        ]
    },
    {
        question: "15. De quem Alma, o Filho, se lembrou quando estava sendo atormentado por seus pecados, o que o levou a orar e se arrepender?",
        answers: [
            { text: "Do profeta Leí", correct: false },
            { text: "De seu pai, Alma", correct: true },
            { text: "Do anjo que apareceu", correct: false },
            { text: "De Mosias", correct: false }
        ]
    },
    {
        question: "16. Qual frase em 1 Néfi 3:7 nos ensina que o Senhor prepara um caminho para cumprirmos Seus mandamentos?",
        answers: [
            { text: "Tenho grande fé no Senhor.", correct: false },
            { text: "Eu irei e cumprirei as ordens do Senhor.", correct: true },
            { text: "Os mandamentos não são difíceis.", correct: false },
            { text: "Seja feita a Sua vontade.", correct: false }
        ]
    },
    {
        question: "17. O que aconteceu com a Cidade de Amonia por causa da iniquidade de seu povo?",
        answers: [
            { text: "Foi inundada pelo mar.", correct: false },
            { text: "Foi atacada pelos lamanitas e destruída em um dia.", correct: true },
            { text: "Foi atingida por um terremoto.", correct: false },
            { text: "O povo foi levado cativo.", correct: false }
        ]
    },
    {
        question: "18. Quem é o autor do Livro de Mórmon que resumiu a história dos nefitas e lamanitas?",
        answers: [
            { text: "Néfi", correct: false },
            { text: "Morôni", correct: false },
            { text: "Mórmon", correct: true },
            { text: "Éter", correct: false }
        ]
    },
    {
        question: "19. Qual a doutrina ensinada em 2 Néfi 2:25, que diz: 'Adão caiu para que os homens existissem'?",
        answers: [
            { text: "A Ressurreição", correct: false },
            { text: "A Queda", correct: true },
            { text: "O Batismo", correct: false },
            { text: "O Sacerdócio", correct: false }
        ]
    },
    {
        question: "20. O que Alma 41:10 ensina ser uma verdade eterna?",
        answers: [
            { text: "A iniquidade nunca foi felicidade.", correct: true },
            { text: "A lei de Moisés é suficiente.", correct: false },
            { text: "O Senhor tarda em perdoar.", correct: false },
            { text: "A salvação é para todos.", correct: false }
        ]
    }
];

// ====================================================================
// 2. REFERÊNCIAS HTML E VARIÁVEIS DE ESTADO
// ====================================================================

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const resultScreen = document.getElementById("result-screen");
const scoreDisplay = document.getElementById("score-display");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

// Variáveis de Áudio (se os IDs estiverem no seu HTML, conforme a correção anterior)
const bgMusic = document.getElementById("background-music");
const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");


// ====================================================================
// 3. FUNÇÕES DE ÁUDIO
// ====================================================================

function playBackgroundMusic() {
    if (bgMusic) {
        bgMusic.volume = 0.3; // Volume baixo
        bgMusic.play().catch(error => {
            // Captura o erro comum de autoplay em navegadores
            console.log("Música de fundo não pôde iniciar automaticamente (requer interação do usuário):", error);
        });
    }
}

function playSoundEffect(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; // Reinicia o som
        audioElement.volume = 1.0;
        audioElement.play();
    }
}


// ====================================================================
// 4. FUNÇÕES PRINCIPAIS DO QUIZ
// ====================================================================

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove("hide");
    resultScreen.classList.add("hide");
    nextButton.classList.add("hide");
    
    showQuestion();
    playBackgroundMusic(); // Tenta iniciar a música
}

function showQuestion() {
    // 1. Limpa o estado anterior
    resetState(); 

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    // 2. Exibe a pergunta
    questionElement.innerHTML = `Pergunta ${questionNo}/${questions.length}: ${currentQuestion.question}`;

    // 3. Cria os botões de resposta
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // Armazena se a resposta é correta no dataset
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    // Esconde o botão "Próxima Pergunta"
    nextButton.classList.add("hide");
    
    // Remove todos os botões de resposta anteriores
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // 1. Aplica o estilo (Acerto/Erro) e toca o som
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        playSoundEffect(soundCorrect);
    } else {
        selectedBtn.classList.add("wrong");
        playSoundEffect(soundWrong);
    }
    
    // 2. Desabilita todos os botões após a escolha
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Mostra qual era a resposta correta
        }
        button.disabled = true;
    });

    // 3. Mostra o botão "Próxima Pergunta"
    nextButton.classList.remove("hide");
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    // Esconde a tela do quiz e mostra a tela de resultado
    quizContainer.classList.add("hide");
    resultScreen.classList.remove("hide");
    
    // Exibe a pontuação final
    scoreDisplay.innerHTML = `${score} de ${questions.length}`;
}


// ====================================================================
// 5. EVENT LISTENERS (LIGANDO OS BOTÕES)
// ====================================================================

nextButton.addEventListener("click", () => {
    handleNextButton();
});

restartButton.addEventListener("click", () => {
    startQuiz(); // Chama a função para reiniciar o quiz
});


// ====================================================================
// 6. INICIA O QUIZ
// ====================================================================

startQuiz();