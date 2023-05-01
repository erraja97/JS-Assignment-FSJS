//get dom elements
const userScore = document.getElementById("userScoreVal");
const compScore = document.getElementById("compScoreVal");

const resultUser = document.getElementById("result-user-stat");
const resultComp = document.getElementById("result-comp-stat");
const resultFinal = document.getElementById("result-final-stat");

//getting all buttons to use with for each to bind evenlistener
const selctionButtons = document.querySelectorAll(".choice");

//variables
let compScoreVal = 0;
let userScoreVal = 0;
let compChoice = null;
let userChoice = null;
let winnerMember = null;

//computer choice
const computerChoose = () => {
  const randNum = Math.floor(Math.random() * 3) + 1;
  let compMsg;

  if (randNum === 1) {
    compMsg = "Computer: Rock";
    resultComp.innerHTML = compMsg;
    return (compChoice = "r");
  } else if (randNum === 2) {
    compMsg = "Computer: Paper";
    resultComp.innerHTML = compMsg;
    return (compChoice = "p");
  } else {
    compMsg = "Computer: Scissor";
    resultComp.innerHTML = compMsg;
    return (compChoice = "s");
  }
};

//user choice
const userChoose = (choice) => {
  let userMsg;

  if (choice === "r") {
    userMsg = "User: Rock";
    resultUser.innerHTML = userMsg;
    return (userChoice = choice);
  } else if (choice === "p") {
    userMsg = "User: Paper";
    resultUser.innerHTML = userMsg;
    return (userChoice = choice);
  } else if (choice === "s") {
    userMsg = "User: Scissor";
    resultUser.innerHTML = userMsg;
    return (userChoice = choice);
  }
};

//winner logic
const winnerResult = (compChoice, userChoice) => {
  if (compChoice === userChoice) {
    resultFinal.innerHTML = "Winner: Match Draw";
    return (winnerMember = null);
  }

  if (userChoice === "r" && compChoice === "p") {
    resultFinal.innerHTML = "Winner: Computer Win";
    return (winnerMember = "comp");
  } else if (userChoice === "p" && compChoice === "s") {
    resultFinal.innerHTML = "Winner: Computer Win";
    return (winnerMember = "comp");
  } else if (userChoice === "s" && compChoice === "r") {
    resultFinal.innerHTML = "Winner: Computer Win";
    return (winnerMember = "comp");
  } else if (userChoice === "r" && compChoice === "s") {
    resultFinal.innerHTML = "Winner: User Win";
    return (winnerMember = "user");
  } else if (userChoice === "p" && compChoice === "r") {
    resultFinal.innerHTML = "Winner: User Win";
    return (winnerMember = "user");
  } else if (userChoice === "s" && compChoice === "p") {
    resultFinal.innerHTML = "Winner: User Win";
    return (winnerMember = "user");
  }
};

//update counter
const updateCounter = (member) => {
  if (member === "user") {
    userScoreVal = userScoreVal + 1;
    userScore.innerHTML = userScoreVal;
  }
  if (member === "comp") {
    compScoreVal = compScoreVal + 1;
    compScore.innerHTML = compScoreVal;
  }
};

//adding evenlistener
selctionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //getting computer choice first
    computerChoose();

    //getting user choice as per button clicked
    userChoose(button.getAttribute("id"));

    console.log("user choice", userChoice);
    console.log("comp choice", compChoice);
    console.log("test", userChoice === compChoice);

    //winnerResult declaration
    winnerResult(compChoice, userChoice);

    //update counter of result
    updateCounter(winnerMember);
  });
});
