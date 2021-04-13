// array for dom selectors

import { quizQuestions, DOMselectors } from "./objects";

(function () {
  let score = 0;
  const lengthOfArray = quizQuestions.length;
  let sliceLengthOne = lengthOfArray;
  let sliceLengthTwo = lengthOfArray - 1;
  let newQuesArray;
  let index = 0;

  DOMselectors.displayContainer.classList.add("d-none");

  DOMselectors.startBtn.addEventListener("click", () => {
    DOMselectors.displayContainer.classList.remove("d-none");
    DOMselectors.startBtn.classList.add("d-none");
  });

  //lengthOfArray -lengthOfArray will give me 0 which is the first index const newQuesArray = quizQuestions.slice(lengthOfArray - lengthofArray, lengthOfArray - 1

  // const newQuesArray = quizQuestions.slice(lengthOfArray - 1, lengthOfArray); to keep going down need to subtract to both

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

  DOMselectors.btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      init();
      const selectedTarget = e.target;
      const asnwer = e.target.innerHTML;
      if (asnwer === newQuesArray[0].correctAnswer) {
        score++;
        selectedTarget.style.backgroundColor = "green";
      } else {
        selectedTarget.style.backgroundColor = "red";
      }

      if (sliceLengthTwo >= 0 && sliceLengthOne >= 1) {
        sliceLengthTwo -= 1;
        sliceLengthOne -= 1;
      }
      index++;

      setTimeout(() => {
        selectedTarget.style.backgroundColor = "initial";
        init();
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
      init();
    });
  }

  //maybe i can splice and make that into a new array and for loop that 5head
})();
