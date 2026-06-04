const questions = [
  {
    question: "Onde foi nosso primeiro encontro?",
    image: "ih.webp",
    answers: [
      "Shopping",
      "DuZé",
      "McDonald's",
      "Ice by Nice"
    ],
    correct: "Ice by Nice",
    wrongMessage: "Você tava lá né???"
  },
  {
    question: "Qual o nome dele?",
    image: "Little_joe.png",
    answers: [
      "Hollow",
      "Little Joe",
      "Joseph",
      "Silksong"
    ],
    correct: "Little Joe",
    wrongMessage: "Nosso filho... :("
  }, 
  {
    question: "Qual Diario de um Banana FALTA na minha coleção?",
    image: "diario-de-um-banana.webp",
    answers: [
      "Diario de um Banana - Dias de Cão",
      "Diario de um Banana - Rodrick é o Cara",
      "Diario de um Banana - A Verdade Nua e Crua",
      "Diario de um Banana - A Gota D'água"
    ],
    correct: "Diario de um Banana - Rodrick é o Cara",
    wrongMessage: "Dica: é o segundo livro da série"
  },
    {
    question: "Qual desses sobrenomes NÃO são da minha familia?",
    image: "nomes.png",
    answers: [
      "Lima",
      "Melo",
      "Silva",
      "Facciroli"
    ],
    correct: "Silva",
    wrongMessage: "Eitchaaaa essa é fácil..."
  },
    {
    question: "Qual o nome desse jogo?",
    image: "it_takes.webp",
    answers: [
      "It takes Two",
      "Two in the Work",
      "Jogo de casal",
      "Guerra da Romenia🇷🇴"
    ],
    correct: "It takes Two",
    wrongMessage: "Presta atenção..."
  },
    {
    question: "Onde eu nasci?",
    image: "lulashouse.jpg",
    answers: [
      "Franca",
      "Bragança Paulista",
      "Ituiti",
      "Ribeirao Preto"
    ],
    correct: "Ituiti",
    wrongMessage: "Quase..."
  },
  {
    question: "Em que ano foi lançado o Nintendo DS?",
    image: "ds.jpeg",
    answers: [
      "2002",
      "2003",
      "2004",
      "2005"
    ],
    correct: "2004",
    wrongMessage: "Quase..."
  },
   {
    question: "Momento feedback do quiz: O que esta achando do quiz até agora?",
    image: "feedback.jpg",
    answers: [
      "Show de bola, amando cada segundo",
      "Queria que tivesse mais perguntas",
      "Podia ter acabado faz tempo",
      "Só quero chegar no final"
    ],
    correct: "Queria que tivesse mais perguntas",
    wrongMessage: "Sim, existem respostas erradas :P"
  },
  {
    question: "Qual são as nossas alturas?",
    image: "vitin gizao.webp",
    answers: [
      "V-1,90m G-1,40m",
      "V-1,70m G-1,50m",
      "V-1,75m G-1,60m",
      "V-1,87m G-1,57m"
    ],
    correct: "V-1,75m G-1,60m",
    wrongMessage: "Seu maior inimigo...a régua"
  },
    {
    question: "Açúcar?",
    image: "acucar.webp",
    answers: [
      "Açúcar",
      "Açúcar!",
      "Açúcar....",
      "Água com sabão"
    ],
    correct: "Açúcar!",
    wrongMessage: "Pensa comigo.... se alguem fala 'água com sabão'...."
  },
  {
    question: "(Teste de atenção) Qual a Bandeira da Romenia?",
    image: "flags.avif",
    answers: [
      "🇷🇴",
      "🇧🇪",
      "🇦🇩",
      "🇷🇴"
    ],
    correct: "🇷🇴",
    wrongMessage: "Algúem não esta levando isso a sério..."
  },
  {
    question: "Onde foi nosso aniversário de namoro em 2025?",
    image: "big_house.jpg",
    answers: [
      "Casa da sua Vó",
      "Chacara",
      "Casa da minha Vó",
      "Casarão"
    ],
    correct: "Casarão",
    wrongMessage: "Dica: foi em uma casa"
  },
    {
    question: "Quem disse 'Eu te amo' primeiro?",
    image: "i-love-you.webp",
    answers: [
      "Vitor",
      "Vitor",
      "Vitor",
      "Nós dois"
    ],
    correct: "Nós dois",
    wrongMessage: "Vou deixar você ganhar essa...(mas sabemos a verdade :P)"
  },  
  {
    question: "Onde foi nosso pedido de namoro?",
    image: "vinho.jpg",
    answers: [
      "Aplicativo Whatsapp",
      "Shopping Franca",
      "Tecnicamente foi no Whatsapp, mas foi na minha casa",
      "Torre eiffel"
    ],
    correct: "Torre eiffel",
    wrongMessage: "Dica: foi em um lugar romantico"
  },
    {
    question: "(Valendo 1000 pontos) Quem ama mais? (Sim, estavamos contando pontos)",
    image: "us.jpeg",
    answers: [
      "Vitor",
      "GiBogas",
      "Os dois",
      "≥"
    ],
    correct: "≥",
    wrongMessage: "Você sabe o certo..."
  }
];

const questionTitle = document.getElementById("question");
const image = document.getElementById("question-image");
const answerButtons = document.querySelectorAll(".answer-btn");
const feedback = document.getElementById("feedback-text");
const quizCard = document.querySelector(".quiz-card");

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];

  questionTitle.textContent = q.question;
  image.src = q.image;

  answerButtons.forEach((button, index) => {
    button.textContent = q.answers[index];
  });
}

function showFinalScreen() {
  quizCard.innerHTML = `
    <h1>Parabéns amor!</h1>
    <h2>Agora você ta quase entendendo o quanto eu te amo.</h2>
    <h3>Te amo muito, minha Princesa</h3>
    <br>
    <p>Você venceu o seu maior desafio de todos os tempos</p>
    <p>Feliz dia dos namorados, meu amor!</p>
    <img src="stitch.gif"">

  `;
}

function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const selectedAnswer = q.answers[selectedIndex];

  if (selectedAnswer === q.correct) {
    feedback.textContent = "CORRETO!!!";

    currentQuestion++;

    if (currentQuestion >= questions.length) {
      setTimeout(showFinalScreen, 1000);
      return;
    }

    setTimeout(() => {
      loadQuestion();
      feedback.textContent = "Proximo desafio...";
    }, 1000);

  } else {
    feedback.textContent = q.wrongMessage;

    quizCard.classList.add("shake");

    setTimeout(() => {
      quizCard.classList.remove("shake");
    }, 400);
  }
}

answerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    checkAnswer(index);
  });
});

loadQuestion();