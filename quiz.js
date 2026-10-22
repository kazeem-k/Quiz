
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Machine Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        answer: 1
    },
    {
        question: "Which language makes web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: 2
    },
    {
        question: "Which HTML tag creates a paragraph?",
        options: ["<h1>", "<p>", "<div>", "<img>"],
        answer: 1
    },
    {
        question: "Which HTML tag displays an image?",
        options: ["<image>", "<picture>", "<img>", "<src>"],
        answer: 2
    },
    {
        question: "Which CSS property changes text colour?",
        options: ["font-size", "background", "color", "text-style"],
        answer: 2
    },
    {
        question: "Which CSS property changes background colour?",
        options: ["background-color", "font-color", "text-color", "background-text"],
        answer: 0
    },
    {
        question: "Which symbol selects an ID in CSS?",
        options: [".", "#", "*", "&"],
        answer: 1
    },
    {
        question: "Which symbol selects a class in CSS?",
        options: ["#", ".", "@", "$"],
        answer: 1
    },
    {
        question: "Which is the largest standard HTML heading?",
        options: ["<h6>", "<head>", "<h1>", "<heading>"],
        answer: 2
    },
    {
        question: "Which keyword can declare a variable in JavaScript?",
        options: ["variable", "let", "define", "int"],
        answer: 1
    },
    {
        question: "Which symbol starts a single-line JavaScript comment?",
        options: ["<!--", "**", "//", "##"],
        answer: 2
    },
    {
        question: "Which method writes a message to the browser console?",
        options: ["console.log()", "print.page()", "show.message()", "message.log()"],
        answer: 0
    },
    {
        question: "Which data type represents true or false?",
        options: ["String", "Number", "Boolean", "Array"],
        answer: 2
    },
    {
        question: "Which operator checks strict equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "Which HTML tag creates a link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
    },
    {
        question: "What does URL stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Record Link",
            "Unified Reference Language",
            "User Resource Location"
        ],
        answer: 0
    },
    {
        question: "Which of these is a web browser?",
        options: ["Windows", "Google Chrome", "Microsoft Word", "Python"],
        answer: 1
    },
    {
        question: "Which company develops Windows?",
        options: ["Apple", "Google", "Microsoft", "Meta"],
        answer: 2
    },
    {
        question: "What is a keyboard mainly used for?",
        options: [
            "Displaying pictures",
            "Entering text and commands",
            "Printing documents",
            "Playing sound"
        ],
        answer: 1
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Utility",
            "Central Program User",
            "Control Processing Usage"
        ],
        answer: 0
    },
    {
        question: "Which device moves the pointer on a computer?",
        options: ["Printer", "Scanner", "Mouse", "Speaker"],
        answer: 2
    },
    {
        question: "Which is an operating system?",
        options: ["HTML", "Windows 11", "Google Chrome", "JavaScript"],
        answer: 1
    },
    {
        question: "What is the internet?",
        options: [
            "A type of keyboard",
            "A global network of connected computers",
            "A programming language",
            "A computer screen"
        ],
        answer: 1
    },
    {
        question: "Which HTML attribute specifies a link destination?",
        options: ["src", "alt", "href", "class"],
        answer: 2
    },
    {
        question: "Which HTML attribute provides alternative text for an image?",
        options: ["href", "alt", "target", "class"],
        answer: 1
    },
    {
        question: "Which CSS layout system arranges items along one direction?",
        options: ["Flexbox", "SQL", "HTML", "Local Storage"],
        answer: 0
    },
    {
        question: "Which method selects an element using its ID?",
        options: [
            "document.getElementById()",
            "document.getClass()",
            "window.getElement()",
            "document.selectID()"
        ],
        answer: 0
    },
    {
        question: "What does HTTP stand for?",
        options: [
            "Hyper Text Transfer Protocol",
            "High Transfer Text Program",
            "Hyper Tool Tracking Process",
            "Home Text Transfer Protocol"
        ],
        answer: 0
    },
    {
        question: "Which language is commonly used to query relational databases?",
        options: ["SQL", "CSS", "HTML", "XML"],
        answer: 0
    }
];


const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

const questionCountInput = document.getElementById("question-count");
const startButton = document.getElementById("start-quiz");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const questionBox = document.getElementById("question-box");

const previousButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

const resultsBox = document.getElementById("results");
const retryButton = document.getElementById("retry-quiz");


let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];


function startQuiz() {
    const count = Number(questionCountInput.value);

    if (!Number.isInteger(count) || count < 1 || count > 30) {
        alert("Please enter a number between 1 and 30.");
        return;
    }


    quizQuestions = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

    currentQuestionIndex = 0;
    userAnswers = new Array(count).fill(null);

    startContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    showQuestion();
}


function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    progressText.textContent =
        `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

    const progress =
        ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

    progressBar.style.width = `${progress}%`;

  
    questionBox.innerHTML = "";

    // Create the question heading
    const heading = document.createElement("h3");
    heading.textContent = question.question;
    questionBox.appendChild(heading);


    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "option";
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

      
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
            button.setAttribute("aria-pressed", "true");
        } else {
            button.setAttribute("aria-pressed", "false");
        }

        // Save the selected answer when clicked
        button.addEventListener("click", () => {
            userAnswers[currentQuestionIndex] = index;
            showQuestion();
        });

        questionBox.appendChild(button);
    });

   
    previousButton.classList.toggle(
        "hidden",
        currentQuestionIndex === 0
    );

    nextButton.classList.toggle(
        "hidden",
        currentQuestionIndex === quizQuestions.length - 1
    );

    submitButton.classList.toggle(
        "hidden",
        currentQuestionIndex !== quizQuestions.length - 1
    );
}


function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}


function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}


function showResults() {
    const unanswered = userAnswers.filter(
        answer => answer === null
    ).length;

    if (unanswered > 0) {
        const continueQuiz = confirm(
            `You have ${unanswered} unanswered question(s). Submit anyway?`
        );

        if (!continueQuiz) {
            const firstUnanswered = userAnswers.findIndex(
                answer => answer === null
            );

            currentQuestionIndex = firstUnanswered;
            showQuestion();
            return;
        }
    }

    let score = 0;

    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });

    const percentage = Math.round(
        (score / quizQuestions.length) * 100
    );

    let message;

    if (percentage >= 80) {
        message = "Excellent work! You know your technology.";
    } else if (percentage >= 50) {
        message = "Good effort! Keep practising.";
    } else {
        message = "Keep learning. Try again to improve your score!";
    }

    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    resultsBox.innerHTML = `
        <h3>Your Score: ${score} / ${quizQuestions.length}</h3>
        <p>Percentage: ${percentage}%</p>
        <p>${message}</p>
    `;
}


function resetQuiz() {
    resultContainer.classList.add("hidden");
    quizContainer.classList.add("hidden");
    startContainer.classList.remove("hidden");

    questionBox.innerHTML = "";
    resultsBox.innerHTML = "";
    progressBar.style.width = "0%";
    questionCountInput.value = "10";
}


startButton.addEventListener("click", startQuiz);
previousButton.addEventListener("click", previousQuestion);
nextButton.addEventListener("click", nextQuestion);
submitButton.addEventListener("click", showResults);
retryButton.addEventListener("click", resetQuiz);
