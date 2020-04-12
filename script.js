const startButton =  document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const currentQuestion = document.getElementById('current-question')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame) //when startbtn is clicked run startGame function
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() { //functionality for the when the start btn is pressed
    startButton.classList.add('hide') //add hide to start-btn classlist so the btn will no longer be visible
    shuffleQuestions = questions.sort(() => Math.random() - .5) //shuffle the questions array so we get a random question object
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide') // make question container visible
    setNextQuestion()
}

function setNextQuestion() { //functionality for the when the next btn is pressed
    resetState()
    showQuestion(shuffleQuestions[currentQuestionsIndex])
}

function showQuestion(question){ //functionality to show the question
    questionElement.innerText = question.question //set question text to random question in questions array
    question.answers.forEach(answer => { //for each text element in the answers array create a new btn
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn') //give the dynamically created btn the class of btn to get the styling as the btn class
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() { 
    nextButton.classList.add('hide') //hide the next btn
    while (answerButtonElement.firstChild) { //delete answer btn element and replace with first child
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(element) { //functionality when you select the answer
    const selectedButton = element.target 
    const correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if(shuffleQuestions.length  > currentQuestionsIndex + 1) { // if there are more questions left
        console.log(currentQuestionsIndex)
        nextButton.classList.remove('hide')
    } else { // if they are no more questions left
        console.log(currentQuestionsIndex)
        startButton.innerText = 'Restart Game'
        startButton.classList.remove('hide')
    }
}
 
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [

    {
        question: 'What is the result of 4+2+"7"',
        answers: [
            { text: '67', correct:true},
            { text: '6"7"', correct:false},
        ]
    },
    {
        question: 'Which of the following is not a example of pop up boxes in javascript',
        answers: [
            { text: 'Alert', correct:false},
            { text: 'Confirm', correct:false},
            { text: 'Prompt', correct:false},
            { text: 'Delete', correct:true},
        ]
    },
    {
        question: 'Which of the following is not a example of javascript data types',
        answers: [
            { text: 'String', correct:false},
            { text: 'Bit', correct:true},
            { text: 'Boolean', correct:false},
            { text: 'Undefined', correct:false},
        ]
    },      
    {
        question: 'Which of the following are not examples of looping structures in javascript?',
        answers: [
            { text: 'For', correct:false},
            { text: 'While', correct:false},
            { text: 'do-while', correct:false},
            { text: 'if', correct:true},
        ]
    },    
    {
        question: 'What is the use of type of operator?',
        answers: [
            { text: 'It is an operator which returns a string description of the type of a variable.', correct:true},
            { text: 'It is a javascript data type', correct:false},
        ]
    },      
    {
        question: 'What does NaN stand for in JavaScript?',
        answers: [
            { text: 'It stands for Not a Number', correct:true},
            { text: 'It stands for No Asynchronous Number', correct:false},
        ]
    },
    {
        question: 'What is a prompt box in JavaScript?',
        answers: [
            { text: 'It is a button that you click', correct:false},
            { text: 'A prompt box is a box which allows the user to enter input by providing a text box.', correct:true},
        ]
    },    
    {
        question: 'Is it true that Netscape is the software company who developed JavaScript.',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },              
    {
        question: 'Is it true that the This keyword refers to the object from where it was called.',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },  
    {
        question: 'Break statement continues with next statement of the loop.',
        answers: [
            { text: 'True', correct:false},
            { text: 'False', correct:true},
        ]
    },  
    {
        question: 'Blur function is used to remove the focus from the specified object.',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },  
    {
        question: 'Which of the following are not ways to define a variable in JavaScript?',
        answers: [
            { text: 'Var', correct:false},
            { text: 'Const', correct:false},
            { text: 'Let', correct:false},
            { text: 'Int', correct:true},
        ]
    },  
    {
        question: 'What does DOM stand for?',
        answers: [
            { text: 'DOM stands for Document Object Model', correct:true},
            { text: 'DOM stands for Document Off Mode', correct:false},
        ]
    },  
    {
        question: 'What are not access modifiers in Java?',
        answers: [
            { text: 'Private', correct:false},
            { text: 'Public', correct:false},
            { text: 'Default', correct:false},
            { text: 'Intialized', correct:true},
        ]
    }, 
    {
        question: 'Which symbol is not used for comments in Javascript?',
        answers: [
            { text: '//', correct:false},
            { text: '/* */', correct:false},
            { text: '<!-->', correct:true},
        ]
    }, 
    {
        question: 'Is React a javascript framework?',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    },  
    {
        question: 'Does the NaN in javascript stand for Not a Number?',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    }, 
    {
        question: 'The Var keyword is block scoped, the let keyword is function scoped. ',
        answers: [
            { text: 'True', correct:false},
            { text: 'False', correct:true},
        ]
    }, 
    {
        question: 'Is it true that a callback is a function of Javascript which can be passed as an option or argument of JavaScript? ',
        answers: [
            { text: 'True', correct:true},
            { text: 'False', correct:false},
        ]
    }, 
    {
        question: 'How can negative infinity be derived in javascript?',
        answers: [
            { text: 'By dividing a negative number by zero', correct:false},
            { text: 'By adding a negative number to zero', correct:true},
        ]
    },
    
]


