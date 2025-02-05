const quizContainer = document.getElementById('quiz-container');  
const questionElement = document.getElementById('question');  
const optionsContainer = document.getElementById('options-container');  
const nextButton = document.getElementById('next-button');  
const resultContainer = document.getElementById('result-container');  
const scoreElement = document.getElementById('score');  
const restartButton = document.getElementById('restart-button');  
const categoryContainer = document.getElementById('category-container');  

const categories = {  
    math: [  
        {  
            question: "What is 2 + 2?",  
            options: ["3", "4", "5", "6"],  
            answer: "4"  
        },  
        // Add more math questions  
    ],  
    science: [  
        {  
            question: "What is the chemical symbol for water?",  
            options: ["H2O", "O2", "CO2", "H2"],  
            answer: "H2O"  
        },  
        // Add more science questions  
    ],  
    history: [  
        {  
            question: "Who was the first President of the United States?",  
            options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],  
            answer: "George Washington"  
        },  
        // Add more history questions  
    ],  
    literature: [  
        {  
            question: "Who wrote ‘Romeo and Juliet’?",  
            options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],  
            answer: "William Shakespeare"  
        },  
        // Add more literature questions  
    ]  
};  

let currentQuestionIndex = 0;  
let score = 0;  
let selectedCategory = '';  

function initializeCategorySelection() {  
    categoryContainer.addEventListener('click', (event) => {  
        if (event.target.classList.contains('category-btn')) {  
            selectedCategory = event.target.id.split('-')[0]; // Choose category  
            startQuiz(selectedCategory);  
        }  
    });  
}  

function startQuiz(category) {  
    categoryContainer.classList.add('hidden');  
    quizContainer.classList.remove('hidden');  
    currentQuestionIndex = 0;  
    score = 0;  
    loadQuestion();  
}  

function loadQuestion() {  
    const currentQuestion = categories[selectedCategory][currentQuestionIndex];  
    questionElement.textContent = currentQuestion.question;  
    optionsContainer.innerHTML = '';  
    currentQuestion.options.forEach(option => {  
        const button = document.createElement('button');  
        button.textContent = option;  
        button.classList.add('btn');  
        button.addEventListener('click', () => selectOption(option));  
        optionsContainer.appendChild(button);  
    });  
    nextButton.disabled = true;  
}  

function selectOption(selectedOption) {  
    const correctAnswer = categories[selectedCategory][currentQuestionIndex].answer;  
    if (selectedOption === correctAnswer) {  
        score++;  
    }  
    nextButton.disabled = false;  
    Array.from(optionsContainer.children).forEach(button => {  
        button.disabled = true;  
        if (button.textContent === correctAnswer) {  
            button.classList.add('correct');  
        } else if (button.textContent === selectedOption) {  
            button.classList.add('incorrect');  
        }  
    });  
}  

nextButton.addEventListener('click', () => {  
    currentQuestionIndex++;  
    if (currentQuestionIndex < categories[selectedCategory].length) {  
        loadQuestion();  
    } else {  
        displayResult();  
    }  
});  

function displayResult() {  
    quizContainer.classList.add('hidden');  
    resultContainer.classList.remove('hidden');  
    scoreElement.textContent = `${score} out of ${categories[selectedCategory].length}`;  
}  

restartButton.addEventListener('click', () => {  
    currentQuestionIndex = 0;  
    score = 0;  
    resultContainer.classList.add('hidden');  
    categoryContainer.classList.remove('hidden');  
});  

initializeCategorySelection();