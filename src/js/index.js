// array for dom selectors

import { quizQuestions, DOMselectors } from "./objects";

(function () {
  //IIFE POGGERS

  // simi working needs to change the fucntion init
  DOMselectors.nextQuesBtn.addEventListener("click", nextQuestion);

  function nextQuestion() {
    const lengthOfArray = quizQuestions.length;
    let sliceLengthOne = 3;
    let sliceLengthTwo = 2;

    if (sliceLengthOne >= 1 || sliceLengthTwo > 0) {
      const newQuesArray = quizQuestions.slice(
        lengthOfArray - sliceLengthOne,
        lengthOfArray - sliceLengthTwo
      );
      sliceLengthOne -= 1;
      sliceLengthTwo -= 1;
      console.log(sliceLengthOne);
      return newQuesArray;
    } else {
      console("else working?");
    }

    console.log(sliceLengthTwo);

    //lengthOfArray -lengthOfArray will give me 0 which is the first index const newQuesArray = quizQuestions.slice(lengthOfArray - lengthofArray, lengthOfArray - 1

    // const newQuesArray = quizQuestions.slice(lengthOfArray - 1, lengthOfArray); to keep going down need to subtract to both
  }

  const nextQuestionOne = nextQuestion();
  console.log(nextQuestionOne);

  const init = function () {
    //this funtion displays all of the items based on how many are in the quizQuestion
    const displayItems = nextQuestionOne.forEach((item) =>
      DOMselectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        ` <div id="question" class="" >${item.question}</div>

      <figure class="figure w-25 h-25">
      <img src="${item.img}" class="figure-img img-fluid" alt="sumi">
    </figure>

      <div class="h-50 w-50 justify-content-center align-items-center row row-cols-2"> 
          <div class="col">
            <button type="button" class="btn btn-light btn-outline-secondary">${item.answersChoices.a}</button>
          </div>
          
          <div class="col">
            <button type="button" class="btn btn-light btn-outline-secondary">${item.answersChoices.b}</button>
          </div>

          <div class="col">
            <button type="button" class="btn btn-light  btn-outline-secondary">${item.answersChoices.c}</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-light btn-outline-secondary">${item.answersChoices.d}</button>
          </div>
      </div>



    </div> `
      )
    );
  };

  init();

  //this function runs everythime  you click the next button

  // DOMselectors.displayContainer.insertAdjacentHTML("afterbegin");

  //maybe i can splice and make that into a new array and for loop that 5head
})();
