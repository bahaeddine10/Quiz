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
        question: `when the term Artificial Intelligent was used for the first time ?`,
        answers: [
            {text: `1955`, correct: true},
            {text: `1989`, correct: false},
            {text: `2020`, correct: false},
           
        ]
    },
    {
        question: `how exactly AI helps in Neurology ?`,
        answers: [
            {text: `Personalized Treatments`, correct: true},
            {text: `Detects when someone is in bad mental state`, correct: true},
            {text: `Cognitive Behavioral Therapy`, correct: true},
            
        ]
    }, {
        question: `What are the proteins that form the DNA?`,
        answers: [
            {text: `valine,cytosine,leucine,adenine`, correct: false},
            {text: `adenine,cytosine,thymine,guanine`, correct: true},
            {text: `tryptophan,actin,guanine,valine`, correct:false},
            
        ]
    }, {
        question: `CRISPR was originally inspired from :`,
        answers: [
            {text: `bacterias`, correct: true},
            {text: `viruses`, correct: false},
            {text: `fish`, correct: false},
            
        ]
    }, {
        question: `Which AI's quality encoraged researchers most to use it in genetics field `,
        answers: [
            {text: `its ability to predict`, correct: false},
            {text: `its ability to analyse massive data in short time`, correct: true},
            {text: `performance`, correct: false},

            
        ]
    }, {
        question: `What does EEG stands for in Neurology?`,
        answers: [
            {text: `Electroencephalography`, correct: false},
            {text: `Event-Related EEG`, correct: false},
            {text: `Electroencephalographic Signal Processing`, correct: true},
        ]
    },
    {
        question: `Who is the scientist that is considered as the father of AI ? `,
        answers: [
            {text: `Albert Einstein`, correct: false},
            {text: `John McCarthy`, correct: true},
            {text: `Marie Curie`, correct: false},
        ]
    },
    
   
]