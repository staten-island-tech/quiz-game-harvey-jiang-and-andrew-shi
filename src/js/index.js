// array for dom selectors

import { quizQuestions, DOMselectors } from "./objects";

(function () {
  let score = 0;
  const lengthOfArray = quizQuestions.length;
  let sliceLengthOne = 3;
  let sliceLengthTwo = 2;
  let newQuesArray;
  let index = 0;

  DOMselectors.displayContainer.classList.add("d-none");

  DOMselectors.startBtn.addEventListener("click", () => {
    DOMselectors.displayContainer.classList.remove("d-none");
    DOMselectors.startBtn.classList.add("d-none");
  });

  //DOMselectors.displayContainer.classList.remove("d-none");

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

  const btns = document.querySelectorAll(".btn-outline-warning");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      init();
      const selectedTarget = e.target;
      const asnwer = e.target.innerHTML;
      if (asnwer === newQuesArray[0].correctAnswer) {
        score++;
        selectedTarget.style.backgroundColor = "green";
        console.log(score);
      } else {
        selectedTarget.style.backgroundColor = "red";
      }

      if (sliceLengthTwo >= 0 && sliceLengthOne >= 1) {
        sliceLengthTwo -= 1;
        sliceLengthOne -= 1;
      } else {
        console.log("else working?");
      }

      index++;
      console.log(index);

      setTimeout(() => {
        selectedTarget.style.backgroundColor = "initial";
        init();
      }, 800);
    });
  });

  //maybe i can splice and make that into a new array and for loop that 5head
})();
