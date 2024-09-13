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
    prog.setAttribute("data-label", " ");
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
        question: `What is the primary concern regarding women's privacy in the digital world?`,
        answers: [
            {text: `Lack of online presence`, correct: false},
            {text: `Data breaches and personal information exploitation`, correct: true},
            {text: `Overuse of social media`, correct: false},
            {text: `Digital literacy among women`, correct: false},
        ]
    },
    {
        question: `What is the purpose of encryption in digital communication?`,
        answers: [
            {text: `To share files publicly`, correct: false},
            {text: `To allow companies to view private messages`, correct: false},
            {text: `To store personal data unprotected`, correct: false},
            {text: `To keep information secure and unreadable by unauthorized parties`, correct: true},
        ]
    }, {
        question: `Which of the following best describes a VPN's function in protecting privacy?`,
        answers: [
            {text: `It increases your internet speed`, correct: false},
            {text: ` It stores personal information`, correct: false},
            {text: ` It makes social media profiles more visible`, correct: false},
            {text: `It hides your IP address and encrypts your internet traffic`, correct: true}
        ]
    }, {
        question: `How does two-factor authentication improve women's digital security?`,
        answers: [
            {text: `It sends spam to potential hackers`, correct: false},
            {text: `It reduces internet speed`, correct: false},
            {text: `It adds an extra layer of protection beyond just a password`, correct: true},
            {text: `It requires two devices for online access`, correct: false},
        ]
    }, {
        question: `Data anonymization is a technique used to protect users' personal data online, making it harder to identify individuals.`,
        answers: [
            {text: `True`, correct: true},
            {text: `False`, correct: false},
            
        ]
    }, {
        question: `How can companies revolutionize women's privacy online?`,
        answers: [
            {text: `Ignoring gender-specific threats`, correct: false},
            {text: `Increasing their online advertisements`, correct: false},
            {text: `Limiting access to women-only platforms`, correct: false},
            {text: `Developing gender-sensitive privacy policies and tools`, correct: true},
        ]
    },
   
]
