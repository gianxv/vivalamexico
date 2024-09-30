let questions = [
    {
    numb: 1,
    question: "In which year were the Olympic Games held in Mexico?",
    answer: "1968",
    options: [
      "1968",
      "1967",
      "1966",
      "1942"
    ]
  },
    {
    numb: 2,
    question: " What is the capital of Mexico?",
    answer: "Mexico City",
    options: [
      "Columbia",
      "Mexico Town",
      "Mexico City",
      "Manila"
    ]
  },
    {
    numb: 3,
    question: "What is the principal religion of Mexico?",
    answer: "Roman Catholic",
    options: [
      "Roman Catholic",
      "Christian",
      "Buddhism",
      "Iglesia ni Cristo"
    ]
  },
    {
    numb: 4,
    question: "What are the three colours of the Mexican Flag?",
    answer: "Green, White, & Red",
    options: [
      "Red, White, & Blue",
      "Green, White, & Red",
      "Yellow and Blue",
      "Red, Yellow, Blue, and White"
    ]
  },
    {
    numb: 5,
    question: "What is the Mexican currency?",
    answer: "Mexican Peso",
    options: [
      "Dolyar",
      "Mexican Dollar",
      "Mexican Peso",
      "Peso"
    ]
  }
];

// Selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}

quit_quiz.onclick = () => {
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

// Show questions and options
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = `<span>${
