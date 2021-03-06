// array for dom selectors

import { quizQuestions, DOMselectors } from "./objects";

(function () {
  let score = 0;
  const lengthOfArray = quizQuestions.length;
  let sliceLengthOne = lengthOfArray;
  let sliceLengthTwo = lengthOfArray - 1;
  let newQuesArray;
  let index = 0;

  // starting padge add
  DOMselectors.startBtn.addEventListener("click", () => {
    DOMselectors.displayContainer.classList.remove("d-none");
    DOMselectors.startPage.classList.add("d-none");
    displayQues();
  });

  //lengthOfArray -lengthOfArray will give me 0 which is the first index const newQuesArray = quizQuestions.slice(lengthOfArray - lengthofArray, lengthOfArray - 1

  // const newQuesArray = quizQuestions.slice(lengthOfArray - 1, lengthOfArray); to keep going down need to subtract to both

  // displays questions
  const displayQues = function () {
    newQuesArray = quizQuestions.slice(
      lengthOfArray - sliceLengthOne,
      lengthOfArray - sliceLengthTwo
    );

    DOMselectors.quizQuestion.innerHTML = newQuesArray[0].question;

    DOMselectors.quizImg.innerHTML = newQuesArray[0].img;

    DOMselectors.choiceA.innerHTML = newQuesArray[0].answersChoices[0].a;
    DOMselectors.choiceB.innerHTML = newQuesArray[0].answersChoices[1].b;
    DOMselectors.choiceC.innerHTML = newQuesArray[0].answersChoices[2].c;
    DOMselectors.choiceD.innerHTML = newQuesArray[0].answersChoices[3].d;
  };

  // for each button add a event lister that goes green when correct red when not

  DOMselectors.btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selectedTarget = e.target;
      const asnwer = e.target.innerHTML;
      if (asnwer === newQuesArray[0].correctAnswer) {
        score++;
        selectedTarget.classList.remove("btn-light");
        selectedTarget.classList.add("btn-success");
      } else {
        selectedTarget.classList.remove("btn-light");
        selectedTarget.classList.add("btn-danger");
      }

      if (sliceLengthTwo >= 0 && sliceLengthOne >= 1) {
        sliceLengthTwo -= 1;
        sliceLengthOne -= 1;
      }
      index++;

      // will run after 700 mil
      setTimeout(() => {
        if (selectedTarget.classList === "btn-success") {
          selectedTarget.classList.add("btn-light");
          selectedTarget.classList.remove("btn-success");
        } else {
          selectedTarget.classList.add("btn-light");
          selectedTarget.classList.remove("btn-danger");
        }
        displayQues();
      }, 700);

      endResultPage();
    });
  });

  function endResultPage() {
    if (index === lengthOfArray) {
      DOMselectors.endPage.classList.remove("d-none");
      DOMselectors.displayContainer.classList.add("d-none");
      DOMselectors.score.innerHTML =
        "you got a " + (score / index) * 100 + " out of 100";
    }
    DOMselectors.redoQuizBtn.addEventListener("click", () => {
      index = 0;
      score = 0;
      sliceLengthOne = lengthOfArray;
      sliceLengthTwo = lengthOfArray - 1;
      DOMselectors.displayContainer.classList.remove("d-none");
      DOMselectors.endPage.classList.add("d-none");
      displayQues();
    });
  }

  //maybe i can splice and make that into a new array and for loop that 5head
})();
