const questions = [
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 1
	},
  {
		question: "Who wrote 'Romeo and Juliet'?",
		options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
		answer: 0
	},
  {
		question: "Which chemical element has the symbol 'O'?",
		options: ["Oxygen", "Gold", "Silver", "Helium"],
		answer: 0
	},
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2
    },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
    },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
    answer: 0
    },
  {
		question: "What is the square root of 64?",
		options: ["6", "7", "8", "9"],
		answer: 2
	},
  {
		question: "In which year did the Titanic sink?",
		options: ["1902", "1912", "1922", "1932"],
		answer: 1
	},
  {
		question: "What is the boiling point of water at sea level (in Celsius)?",
		options: ["90", "100", "110", "120"],
		answer: 1
	},
  {
		question: "Which country is home to the kangaroo?",
		options: ["India", "Australia", "Brazil", "South Africa"],
		answer: 1
	},
  {
		question: "What is the smallest prime number?",
		options: ["0", "1", "2", "3"],
		answer: 2
	},
  {
		question: "Who is known as the 'Father of Computers'?",
		options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
		answer: 0
	},
	
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const options = document.querySelectorAll('.option');
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  options.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
    option.style.backgroundColor = '#e1e1e1';
  });
}

function selectOption(selectedOptionIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const options = document.querySelectorAll('.option');
  if (selectedOptionIndex === currentQuestion.answer) {
    score++;
    options[selectedOptionIndex].style.backgroundColor = '#4caf50';
  } else {
    options[selectedOptionIndex].style.backgroundColor = '#f44336';
  }
  document.getElementById('score').textContent = `Score: ${score}`;
  currentQuestionIndex++;
  setTimeout(() => {
    if (currentQuestionIndex < questions.length) {
      updateProgressBar();
      loadQuestion();
    } else {
      showFinalScore();
    }
  }, 1000);
}

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

function showFinalScore() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `<h2>Your final score is ${score} out of ${questions.length}</h2>`;
}

window.onload = () => {
  loadQuestion();
  updateProgressBar();
};