const quizQuestions = [
  {
    img:
      '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66439990-408d-44fc-988a-2375b88d6183/de7cg0p-e2dcc2c3-b548-4c51-808e-b44efc8ca690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjY0Mzk5OTAtNDA4ZC00NGZjLTk4OGEtMjM3NWI4OGQ2MTgzXC9kZTdjZzBwLWUyZGNjMmMzLWI1NDgtNGM1MS04MDhlLWI0NGVmYzhjYTY5MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7Qe7SGvhwWqLbrh5ALVBTn1a-lDJNh0v1IbDinvuBy0" id="img" class="figure-img img-fluid" alt="sumi">',
    question: "who is this girl",
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
      '<img src="https://i.redd.it/loerq2qqr4n51.png" id="img" class="figure-img img-fluid" alt="sumi">',

    question: "any cuties AYAYA?",
    answersChoices: [
      { a: "Wosaodjka" },
      { b: "RUKA" },
      { c: " Sakurasawa" },
      { d: "Nanami" },
    ],
    correctAnswer: "Wosaodjka",
  },

  {
    img:
      '<img src="https://upload.wikimedia.org/wikipedia/en/9/95/BCS4KeyVisual.jpg" id="img" class="figure-img img-fluid" alt="sumi">',
    question: "So many Cuties in chat today EHEHE?",
    answersChoices: [
      { a: "asdasda" },
      { b: " Sarashina" },
      { c: "Sumi" },
      { d: "Mami" },
    ],
    correctAnswer: "Mami",
  },
];

const DOMselectors = {
  quizQuestion: document.querySelector("#question"),
  quizImg: document.querySelector(".figure"),
  displayContainer: document.querySelector("#question-container"),
  startBtn: document.querySelector("#start-quiz-btn"),

  choiceA: document.querySelector("#button-a"),
  choiceB: document.querySelector("#button-b"),
  choiceC: document.querySelector("#button-c"),
  choiceD: document.querySelector("#button-d"),
};

export { quizQuestions, DOMselectors };
