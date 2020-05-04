const startButton =  document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const currentQuestion = document.getElementById('current-question')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
const testContainerElement = document.getElementById('test-container')
const feedback = document.getElementById('feedback')
const result = document.getElementById('result')
var shuffleQuestions,totalquestions,test,nextQuestionId;


//Fetching Tests

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
        button.onclick = function() {
            test = item.id;
              fetchQuestion(0);
              testContainerElement.classList.add('hide');
              //startButton.classList.remove('hide')
              nextButton.classList.remove('hide');
              correctAnswers = [];
              questionContainerElement.classList.remove('hide')

        }
        testContainerElement.appendChild(button); 
        }
     });
        

 startButton.addEventListener('click', () => {
     questionContainerElement.classList.add('hide');
     result.classList.add('hide');
     feedback.classList.add('hide');
     startButton.classList.add('hide');
     testContainerElement.classList.remove('hide');
   })
   

nextButton.addEventListener('click', () => {
     // make question container visible
    fetchQuestion(nextQuestionId);
})

//Next Question
function setNextQuestion() { //functionality for the when the next btn is pressed
    feedback.classList.add('hide');
    resetState();
    showQuestion(shuffleQuestions);
}

function showQuestion(question){ //functionality to show the question
    questionElement.innerText = question.question //set question text to random question in questions array
    question.answers.forEach(answer => { //for each text element in the answers array create a new btn
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn') //give the dynamically created btn the class of btn to get the styling as the btn class
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
    const selectedButton = element.target;
    
    fetchAnswer(shuffleQuestions.id,selectedButton)
           nextButton.classList.remove('hide')

    //Result
     if(totalquestions > nextQuestionId ) { // if there are more questions left
        nextButton.classList.remove('hide')
    } else { // if they are no more questions left
        console.log(correctAnswers.length+"/"+totalquestions)
        const percent = correctAnswers.length/totalquestions*100;
        if(percent > 80){
            var performance = "Exellent Performance";
        }
        else if (percent > 50) {
            var performance = "Average Performance";
        } else if(percent < 50){
            var performance = "Poor Performance";
        }

        result.innerText='RESULT :    ' + performance +" ,   "+ correctAnswers.length+"  Out of  "+totalquestions;
        result.classList.remove('hide');
        nextButton.classList.add('hide');
        startButton.classList.remove('hide');
        startButton.innerText="Restart";
        
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


//Fetch Question One by one Related to Quiz
function fetchQuestion(currentQuestionsIndex){
    $.get( "http://localhost:3000/Questions/Sub/"+test+"/"+currentQuestionsIndex, function( data ) {
        shuffleQuestions = data.question;
        totalquestions = data.totalquestions;
        nextQuestionId = data.meta;
        setNextQuestion()

    });
    }

    function fetchAnswer(questionId,givenAns){
        $.get( "http://localhost:3000/Answers/"+questionId+"/"+givenAns.innerText, function( data ) {
            feedback.classList.remove('hide');
            feedback.innerText = data.correct + ", Correct Answer is " + data.feedback;
            if(data.correct == "True"){
                givenAns.style.background = "green";
                correctAnswers.push(1);
            }else if(data.correct == "False"){
                givenAns.style.background = "red";

            }    
        });
        }
