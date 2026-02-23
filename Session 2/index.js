const numberPrompt = "Please enter a number:";

let continuePrompt = "",
  currentQuestion = 0;

do {
  promptUserForQuestionNumber();

  switch (currentQuestion) {
    case "1":
      questionOne();
      promptUserToContinue();
      break;
    case "2":
      questionTwo();
      promptUserToContinue();
      break;
    case "3":
      questionThree();
      promptUserToContinue();
      break;
    case "4":
      questionFour();
      promptUserToContinue();
      break;
    case "5":
      questionFive();
      promptUserToContinue();
      break;
    default:
      console.log("Invalid question, please try again");
      continuePrompt = "y";
      break;
  }
} while (continuePrompt === "y");

function promptUserForQuestionNumber() {
  currentQuestion = window.prompt(
    "Please select a question by submitting a number from 1 to 5:",
  );
}

function promptUserToContinue() {
  continuePrompt = window
    .prompt(
      "Do you wish to select another question?\nY: yes\nAny other character/word: Exit",
    )
    .toLowerCase();
}

function questionOne() {
  let num = window.prompt(numberPrompt);
  console.log(num);
}

function questionTwo() {
  let num = window.prompt(numberPrompt);
  if (num % 3 == 0 && num % 4 == 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function questionThree() {
  let num1 = window.prompt("Please enter the first number:");
  let num2 = window.prompt("Please enter the second number:");
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

function questionFour() {
  let num = window.prompt(numberPrompt);
  if (num >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

function questionFive() {
  let num1 = window.prompt("Please enter the first number:");
  let num2 = window.prompt("Please enter the second number:");
  let num3 = window.prompt("Please enter the third number:");

  if (num1 > num2 && num1 > num3 && num2 > num3) {
    console.log("Max number is: " + num1 + "\n" + "Min number is: " + num3);
  } else if (num1 > num2 && num1 > num3 && num2 < num3) {
    console.log("Max number is: " + num1 + "\n" + "Min number is: " + num2);
    // Num1 > Num2 & Num3 with both min cases
    //   ---------------------------------------------------
  } else if (num1 < num2 && num2 > num3 && num1 < num3) {
    console.log("Max number is: " + num2 + "\n" + "Min number is: " + num1);
  } else if (num1 < num2 && num2 > num3 && num1 > num3) {
    console.log("Max number is: " + num2 + "\n" + "Min number is: " + num3);
    // Num2 > Num1 & Num3 with both min cases
    //   ---------------------------------------------------
  } else if (num1 < num3 && num2 < num3 && num1 < num2) {
    console.log("Max number is: " + num3 + "\n" + "Min number is: " + num1);
  } else {
    console.log("Max number is: " + num3 + "\n" + "Min number is: " + num2);
  }
  // Num3 > Num1 & Num2 with both min cases
  //   ---------------------------------------------------
}
