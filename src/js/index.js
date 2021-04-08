// array for dom selectors

import { quizQuestions, DOMselectors } from "./objects";

(function () {
  let score = 0;
  const lengthOfArray = quizQuestions.length;
  let sliceLengthOne = 3;
  let sliceLengthTwo = 2;
  let newQuesArray;
  let answerChoice = false;
  const Index = 0;

  function nextQuestion() {
    if (sliceLengthOne >= 1) {
      sliceLengthOne -= 1;
      return sliceLengthOne;
    } else {
      console.log("else working?");
    }

    //lengthOfArray -lengthOfArray will give me 0 which is the first index const newQuesArray = quizQuestions.slice(lengthOfArray - lengthofArray, lengthOfArray - 1

    // const newQuesArray = quizQuestions.slice(lengthOfArray - 1, lengthOfArray); to keep going down need to subtract to both
  }

  function nextQuestionB() {
    // can only return 1 so need 2 funs prob can combine
    if (sliceLengthTwo >= 0) {
      sliceLengthTwo -= 1;
      return sliceLengthTwo;
    } else {
      console.log("else working?");
    }
  }

  const init = function () {
    newQuesArray = quizQuestions.slice(
      lengthOfArray - sliceLengthOne,
      lengthOfArray - sliceLengthTwo
    );

    console.log(newQuesArray[0]);

    DOMselectors.quizQuestion.innerHTML = newQuesArray[0].question;
    DOMselectors.quizImg.innerHTML = newQuesArray[0].img;

    DOMselectors.choiceA.innerHTML = newQuesArray[0].answersChoices[0].a;
    DOMselectors.choiceB.innerHTML = newQuesArray[0].answersChoices[1].b;
    DOMselectors.choiceC.innerHTML = newQuesArray[0].answersChoices[2].c;
    DOMselectors.choiceD.innerHTML = newQuesArray[0].answersChoices[3].d;
  };

  DOMselectors.choiceA.addEventListener("click", (e) => {
    init();
    nextQuestion();
    nextQuestionB();

    console.log(e.target);
    const asnwer = e.target.innerHTML;
    if (asnwer === newQuesArray[0].correctAnswer) {
      score++;
      console.log(score);
    }
  });
  DOMselectors.choiceB.addEventListener("click", (e) => {
    init();
    nextQuestion();
    nextQuestionB();

    console.log(e.target);
    const asnwer = e.target.innerHTML;
    if (asnwer === newQuesArray[0].correctAnswer) {
      score++;
      console.log(score);
    }
  });

  DOMselectors.choiceC.addEventListener("click", (e) => {
    init();
    nextQuestion();
    nextQuestionB();

    console.log(e.target);
    const asnwer = e.target.innerHTML;
    if (asnwer === newQuesArray[0].correctAnswer) {
      score++;
      console.log(score);
    }
  });

  DOMselectors.choiceD.addEventListener("click", (e) => {
    init();
    nextQuestion();
    nextQuestionB();

    console.log(e.target);
    const asnwer = e.target.innerHTML;
    if (asnwer === newQuesArray[0].correctAnswer) {
      score++;
      console.log(score);
    }
  });

  //function quizScore() {
  //if (newQuesArray[0].answersChoices[0].correct === true) {
  //score++;
  //}
  //}

  //Array.from(DOMselectors.answersChoices).forEach(function (/choice) {
  // choice.addEventListener("click", function (e) {
  // const selectedTarget = e.target;
  //  const selectedChoice = selectedTarget.innerHTML;
  //   if (selectedChoice === Quizquestions[index].correctAnswer) {
  //      score++;
  //    }
  //  });
  // });
  //this funtion displays all of the items based on how many are

  //DOMselectors.nextQuesBtn.addEventListener("click", () => {});

  console.log(answerChoice);

  //this function runs everythime  you click the next button

  // DOMselectors.displayContainer.insertAdjacentHTML("afterbegin");

  //maybe i can splice and make that into a new array and for loop that 5head
})();
