// array for dom selectors

import { quizQuestions, DOMselectors } from "./objects";

(function () {
  //IIFE POGGERS

  const init = function () {
    //this funtion displays all of the items based on how many are in the quizQuestion
    const displayItems = quizQuestions.forEach((item) =>
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

      <div class="h-25 w-25">
        <button id="start-quiz-btn">Start</button>
        <button id="next-ques-btn">Next</button>
      </div>

    </div> `
      )
    );
  };

  init();

  const nextQuesBtn = document.querySelector("#next-ques-btn");
  //this function runs everythime  you click the next button
  nextQuesBtn.addEventListener("click", nextQuestion);

  // DOMselectors.displayContainer.insertAdjacentHTML("afterbegin");

  //maybe i can splice and make that into a new array and for loop that 5head

  function nextQuestion() {
    const lengthOfArray = quizQuestions.length;

    const newQuesArray = quizQuestions.slice(lengthOfArray - 1, lengthOfArray);

    //lengthOfArray -lengthOfArray will give me 0 which is the first index const newQuesArray = quizQuestions.slice(lengthOfArray - lengthofArray, lengthOfArray - 1

    // const newQuesArray = quizQuestions.slice(lengthOfArray - 1, lengthOfArray); to keep going down need to subtract to both

    console.log(newQuesArray);
  }
})();
