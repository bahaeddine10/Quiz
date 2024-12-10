const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById("question-container");
let num=0;
const container = document.querySelector(".container");

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion();
});
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
let shuffledQuestions , currentQuestionIndex 


function startGame(){
    startBtn.classList.add('hide');
    
    const prog = document.createElement("div");
 

    prog.classList.add("progress-bar");
    prog.setAttribute("data-label", "Loading");
    container.appendChild(prog);
    const progressBar=document.getElementsByClassName("progress-bar")[0];
    setInterval(() => {
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
    progressBar.style.setProperty("--width", width + 0.2);
},5)
    setTimeout(() => {
        
        shuffledQuestions = questions.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
       
        questionContainer.classList.remove('hide');
        setNextQuestion();   
        container.removeChild(prog);
        
      
    }, 2500);
   
    
    

}

function setNextQuestion(){
    
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    console.log(num);
    
    
    
}
function showQuestion(question){
    questionElement.innerHTML = `<h2 style="text-align:center;color: #5432D3; text-shadow: 1px 1px #000000">${question.question}</h2>`
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = `<h3 style="text-align:center"> ${answer.text}</h3>`;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
            
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }   
}
function selectAnswer(event){
    
    const selectedButton = event.target
    console.log(selectedButton)
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct,selectedButton.innerText)
        
    })
    
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide')
    }else{
        questionElement.innerHTML = `<h2 style="text-align:center;color: #5432D3; text-shadow: 1px 1px #000000">Your score is ${num} out of ${shuffledQuestions.length}</h2>`
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }   
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
        num=0;
    }
}

    

function setStatusClass(element, correct,name){
    clearStatusClass(element)
    if(correct){
        
        element.classList.add('correct')
        if(name==element.innerText){
            num++;
        }
        
    }else{
        element.classList.add('wrong')

        
    }
    
    
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: `What is machine learning? `,
        answers: [
            {text: `A type of computer programming`, correct: false},
            {text: `A method for creating video games`, correct: false},
            {text: `A subset of artificial intelligence that allows systems to learn from data`, correct: true},
            {text: `A way to store data`, correct: false},
        ]
    },
    {
        question: `Which of the following is an example of supervised learning?`,
        answers: [
            {text: `Playing a game and learning from feedback`, correct: false},
            {text: `Predicting house prices based on historical data`, correct: true},
            {text: `Clustering customers based on buying habits`, correct: false},
            {text: `Finding patterns in social media usage`, correct: false},
        ]
    }, {
        question: `What is the primary purpose of data preparation in machine learning?`,
        answers: [
            {text: `To make the data look pretty`, correct: false},
            {text: `To ensure the data is clean and ready for analysis`, correct: true},
            {text: `To collect as much data as possible`, correct: false},
            {text: `To visualize the data in charts`, correct: false}
        ]
    }, {
        question: `Which application uses natural language processing (NLP)?`,
        answers: [
            {text: `Voice-activated assistants`, correct: true},
            {text: `Weather forecasting models`, correct: false},
            {text: `Image recognition software`, correct: false},
            {text: `Data encryption tools`, correct: false},
        ]
    }, {
        question: `What is a common technique used in unsupervised learning?`,
        answers: [
            {text: `Clustering`, correct: true},
            {text: `Regression analysis`, correct: false},
            {text: `Classification`, correct: false},
            {text: `Time series analysis`, correct: false},

            
        ]
    }, {
        question: `Which of the following best describes overfitting in machine learning? `,
        answers: [
            {text: `The model is too simple to capture the underlying patterns`, correct: false},
            {text: `The model performs well on training data but poorly on unseen data`, correct: true},
            {text: `The model is trained on too little data`, correct: false},
            {text: `The model is able to generalize well to new data`, correct: false},
        ]
    },
    {
        question: `What is a common application of machine learning that involves understanding and interpreting visual data? `,
        answers: [
            {text: `Self-driving cars`, correct: true},
            {text: `Chatbots and virtual assistants`, correct: false},
            {text: `Image recognition software`, correct: false},
            {text: `Music recommendation systems`, correct: false},
        ]
    },
    {
        question: `In machine learning, what does the term 'training set' refer to? `,
        answers: [
            {text: `Data used to evaluate how well a model works`, correct: false},
            {text: `Data that is not used at all`, correct: false},
            {text: `Data used to train the model to make predictions`, correct: true},
            {text: `Data that has been cleaned and processed`, correct: false},
        ]
    },
    {
        question: `What is the primary characteristic of reinforcement learning? `,
        answers: [
            {text: `Learning through trial and error with feedback from the environment`, correct: true},
            {text: `Learning by observing others`, correct: false},
            {text: `Learning from labeled datasets only`, correct: false},
            {text: `Learning without any data at all`, correct: false},
        ]
    },
    {
        question: `Why is clean and well-processed data crucial for machine learning models? `,
        answers: [
            {text: `It helps improve the accuracy and effectiveness of the model.`, correct: true},
            {text: `It reduces the amount of data needed.`, correct:false},
            {text: `LIt makes the model look good.`, correct: false},
            {text: `It is not important at all.`, correct: false},
        ]
    },   
]