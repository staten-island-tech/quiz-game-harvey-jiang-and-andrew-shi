console.log("uwu hi cuttie");

const quizQuestions = [
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66439990-408d-44fc-988a-2375b88d6183/de7cg0p-e2dcc2c3-b548-4c51-808e-b44efc8ca690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjY0Mzk5OTAtNDA4ZC00NGZjLTk4OGEtMjM3NWI4OGQ2MTgzXC9kZTdjZzBwLWUyZGNjMmMzLWI1NDgtNGM1MS04MDhlLWI0NGVmYzhjYTY5MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7Qe7SGvhwWqLbrh5ALVBTn1a-lDJNh0v1IbDinvuBy0",
    question: "who is this girl",
    answersChoices: {
      a: "Chizuru Ichinose",
      b: "Ruka Sarashina",
      c: "Sumi Sakurasawa",
      d: "Mami Nanami",
    },
    correctAnswer: "c",
  },
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66439990-408d-44fc-988a-2375b88d6183/de7cg0p-e2dcc2c3-b548-4c51-808e-b44efc8ca690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjY0Mzk5OTAtNDA4ZC00NGZjLTk4OGEtMjM3NWI4OGQ2MTgzXC9kZTdjZzBwLWUyZGNjMmMzLWI1NDgtNGM1MS04MDhlLWI0NGVmYzhjYTY5MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7Qe7SGvhwWqLbrh5ALVBTn1a-lDJNh0v1IbDinvuBy0",
    question: "any cuties AYAYA?",
    answersChoices: {
      a: "Chizuru Ichinose",
      b: "Ruka Sarashina",
      c: "Sumi Sakurasawa",
      d: "Mami Nanami",
    },
    correctAnswer: "d",
  },
];

const DOMselectors = {
  displayContainer: document.querySelector("#question-container"),
  startBtn: document.querySelector("#start-quiz-btn"),
  nextQuesBtn: document.querySelector("#next-ques-btn"),
};

export { quizQuestions, DOMselectors };