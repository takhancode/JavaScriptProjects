let currentquestion = 0;
let score = 0;
let answered = false;

let questionplace = document.querySelector("h2");
let questionNumber = document.getElementById("questionNumber");
let nextbtn = document.getElementById("nextButton");
let ansbtn = document.querySelectorAll(".ans");
let result = document.getElementById("result");

let questions = [

    {
        question: "What Does HTML Stand For?",
        answers: [
            "HyperText Markup Language",
            "HyperText Preprocessor",
            "High Text Machine Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Capital City of Pakistan?",
        answers: [
            "Lahore",
            "Islamabad",
            "Karachi",
            "Faisalabad"
        ],
        correct: 1
    },

    {
        question: "Which HTML Tag is used to create Hyperlink?",
        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1
    },

    {
        question: "Who was the first Governor-General of Pakistan?",
        answers: [
            "Quaid-e-Azam",
            "Liaquat Ali Khan",
            "Lord Mountbatten",
            "Rehman Chaudhary"
        ],
        correct: 0
    },

    {
        question: "Which HTML Tag is used to insert an image?",
        answers: [
            "<img>",
            "<div>",
            "<p>",
            "<h1>"
        ],
        correct: 0
    }

];


// Display first question
function showQuestion() {

    questionplace.textContent =
        questions[currentquestion].question;

    questionNumber.textContent =
        `Question ${currentquestion + 1}/${questions.length}`;

    ansbtn.forEach((btn, index) => {

        btn.textContent =
            questions[currentquestion].answers[index];

        btn.disabled = false;

    });

    result.textContent = "";

    answered = false;
}


// Show first question
showQuestion();


// Answer buttons
ansbtn.forEach((btn, index) => {

    btn.addEventListener("click", function () {

        if (answered) {
            return;
        }

        if (index === questions[currentquestion].correct) {

            result.textContent = "Correct!";
            score++;

        } else {

            result.textContent = "Wrong!";

        }

        answered = true;

        // Disable all answer buttons
        ansbtn.forEach((button) => {
            button.disabled = true;
        });

    });

});


// Next button
nextbtn.addEventListener("click", function () {

    currentquestion++;

    if (currentquestion >= questions.length) {
        return;
    }

    showQuestion();

    if (currentquestion === questions.length - 1) {
        nextbtn.disabled = true;
    }

});