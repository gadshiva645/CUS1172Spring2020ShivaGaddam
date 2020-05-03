const startButton =  document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const currentQuestion = document.getElementById('current-question')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
const testContainerElement = document.getElementById('test-container')
const result = document.getElementById('result')


//Fetching 

    $.get( "http://localhost:3000/Subjects", function(data) {
        startButton.classList.add('hide') //add hide to start-btn classlist so the btn will no longer be visible
        data.forEach(myFunction);
        function myFunction(item, index) {
        var button = document.createElement('BUTTON');  
        button.className="start-btn btn";
        button.style.marginLeft = "5px";
        button.style.cursor = "Pointer";
        var text = document.createTextNode(item.name); 
        button.appendChild(text);
        button.id = item.id;
        button.onclick = function(){
            $.get( "http://localhost:3000/Questions/Sub/"+item.id, function( data ) {
                questions = data;
                console.log(questions.length);
              });
              testContainerElement.classList.add('hide');
              startButton.classList.remove('hide')
        }
        testContainerElement.appendChild(button); 
        }
     });
        
    





let shuffleQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame) //when startbtn is clicked run startGame function
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    correctAnswers = [];
    result.classList.add('hide');
    //functionality for the when the start btn is pressed
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
   
    if(correct){
        correctAnswers.push(1);
    }


    // setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if(shuffleQuestions.length  > currentQuestionsIndex + 1) { // if there are more questions left
        console.log(currentQuestionsIndex)
        nextButton.classList.remove('hide')
    } else { // if they are no more questions left
        console.log(currentQuestionsIndex)
        console.log(correctAnswers.length+"/"+questions.length)
        const percent = correctAnswers.length/questions.length*100;
        if (percent > 50) {
            var performance = "Average Performance";
        }else if(percent > 80){
            var performance = "Exellent Performance";
        }else if(percent < 50){
            var performance = "Poor Performance";
        }


        result.innerText='RESULT :    ' + performance +" ,   "+ correctAnswers.length+"  Out of  "+questions.length;
        startButton.innerText = 'Restart Game'
        startButton.classList.remove('hide')
        result.classList.remove('hide')
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


 
