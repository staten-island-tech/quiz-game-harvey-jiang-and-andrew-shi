const quizQuestions = [
  {
    img:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66439990-408d-44fc-988a-2375b88d6183/de7cg0p-e2dcc2c3-b548-4c51-808e-b44efc8ca690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjY0Mzk5OTAtNDA4ZC00NGZjLTk4OGEtMjM3NWI4OGQ2MTgzXC9kZTdjZzBwLWUyZGNjMmMzLWI1NDgtNGM1MS04MDhlLWI0NGVmYzhjYTY5MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7Qe7SGvhwWqLbrh5ALVBTn1a-lDJNh0v1IbDinvuBy0" id="img" class="img-fluid" alt="sumi">',
    question: "Who is this girl?",
    answersChoices: [
      { a: "Chizuru Ichinose" },
      { b: "Ruka Sarashina" },
      { c: "Sumi Sakurasawa" },
      { d: "Mami Nanami" },
    ],
    correctAnswer: "Sumi Sakurasawa",
  },
  {
    img:
      '<img src="https://cdn.discordapp.com/attachments/686048772857397451/831297245172465684/image0.jpg" id="img" class="img-fluid" alt="Lucy Heartfilia">',

    question: "Who is this girl?(from fariy tale)",
    answersChoices: [
      { a: "Natsu Dragneel" },
      { b: "Happy" },
      { c: "Lucy Heartfilia" },
      { d: "Juvia Lockser" },
    ],
    correctAnswer: "Lucy Heartfilia",
  },

  {
    img:
      '<img src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/04/Featured-Image-Shirou-and-Saber-Cropped.jpg?q=50&fit=crop&w=943&h=500" id="img" class="img-fluid" alt="Fate">',
    question: "Which anime series is this character from?",
    answersChoices: [
      { a: "Fate" },
      { b: "Fairy tale" },
      { c: "black clover" },
      { d: "Rent a girlfriend" },
    ],
    correctAnswer: "Fate",
  },

  {
    img:
      '<img src="https://i1.wp.com/anitrendz.net/news/wp-content/uploads/2020/09/Horimiya-Feature-Image.png?w=636&ssl=1" id="img" class="img-fluid" alt="Izumi Miyamura">',
    question: "What is the name of the boy in the image?",
    answersChoices: [
      { a: "kyouko Hori" },
      { b: "Izumi Miyamura" },
      { c: "Yuki Yoshikawa" },
      { d: "Kakeru Sengoku" },
    ],
    correctAnswer: "Izumi Miyamura",
  },

  {
    img:
      '<img src="https://i.pinimg.com/originals/c3/d5/06/c3d5066c1f9ca74e32c19ed029fef4bd.jpg"id="img" class="img-fluid" alt="sumi Miskasa Ackerman">',
    question: "What is the name of the girl in the image?",
    answersChoices: [
      { a: "Levi" },
      { b: "Historia Reiss" },
      { c: "Miskasa Ackerman" },
      { d: "Hange Zoe" },
    ],
    correctAnswer: "Miskasa Ackerman",
  },
];

const DOMselectors = {
  btns: document.querySelectorAll(".btn-light"),
  quizQuestion: document.querySelector("#question"),
  quizImg: document.querySelector("#img-container"),
  displayContainer: document.querySelector("#question-container"),
  startPage: document.querySelector("#start-page"),
  startBtn: document.querySelector("#start-quiz-btn"),
  redoQuizBtn: document.querySelector("#redo-quiz-btn"),
  score: document.querySelector("#score"),
  endPage: document.querySelector("#end-page"),
  choiceA: document.querySelector("#button-a"),
  choiceB: document.querySelector("#button-b"),
  choiceC: document.querySelector("#button-c"),
  choiceD: document.querySelector("#button-d"),
};

export { quizQuestions, DOMselectors };
