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
    const imgCard=document.createElement("div");
    imgCard.classList.add("imageLoading");
    imgCard.innerHTML=`<img src="./img/bg1.png" alt="loading">`
    container.appendChild(imgCard);
    
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
        container.removeChild(imgCard);
      
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
        question: `Langage de Programmation d'Arduino `,
        answers: [
            {text: `HTML`, correct: false},
            {text: `C/C++`, correct: true},
            {text: `Python`, correct: false},
            {text: `Java`, correct: false},
        ]
    },
    {
        question: `Quelle est la fonction de pinMode() en Arduino ?`,
        answers: [
            {text: `Calculer la distance avec un capteur à ultrasons`, correct: false},
            {text: `Lire la valeur d'une broche`, correct: false},
            {text: `Ecrire une valeursur un broche`, correct: false},
            {text: `Initaliser une broche en entrée ou sortie`, correct: true},
        ]
    }, {
        question: `Quel est le but fonction delay() dans un programme Arduino ?`,
        answers: [
            {text: `Déclencher un signal à une broche spécifique `, correct: false},
            {text: ` Réduire la consommation d'énergie`, correct: false},
            {text: ` Créer un délai entre les exécution du code`, correct: true},
            {text: `Initialiser les entrées/sorties`, correct: false}
        ]
    }, {
        question: `Quelle est la plager de tension que l'Arduino peut accepter sur ses broches d'entrée ?`,
        answers: [
            {text: `0 à 5V`, correct: true},
            {text: `0 à 3.3V`, correct: false},
            {text: `0 à 12V`, correct: false},
            {text: `1 à 5V`, correct: false},
        ]
    }, {
        question: `Que fait la fonction analogWrite()`,
        answers: [
            {text: `Convertir un valeur analogique en numérique`, correct: false},
            {text: `Lire une valeur qnqlogique sur une broche`, correct: false},
            {text: `Ecrire une valeur analogique sur une broche (PWM)`, correct: true},
            {text: `Initialiser une broche en entrée`, correct: false},

            
        ]
    }, {
        question: `Quelle est la fonction de Serial.begin() dans un programme Arduino ? `,
        answers: [
            {text: `Déclare la broche pour la communication série`, correct: false},
            {text: `Envoie un message sur le moniteur série`, correct: false},
            {text: `Reçoit des données sur la communication série`, correct: false},
            {text: `Démarre la communication série à une vitesse donnée`, correct: true},
        ]
    },
    {
        question: `Quelle est la portée du signal PWM(Pulse Width Modulaation) Arduino ? `,
        answers: [
            {text: `0-10V`, correct: false},
            {text: `0-5V`, correct: false},
            {text: `0-1023`, correct: false},
            {text: `0-255`, correct: true},
        ]
    },
    {
        question: `Quel est le rôle de la fonction loop() dans un programme Arduino ? `,
        answers: [
            {text: `Initialiser les variables globales`, correct: false},
            {text: `Arrêter l'exécution du programme`, correct: false},
            {text: `Exécuter le code une seule fois`, correct: false},
            {text: `Exécuter le code en boucle indéfiniment`, correct: true},
        ]
    },
    {
        question: `Comment peut-on lire une valeur numérique sur une broche analogique en Arduino ? `,
        answers: [
            {text: `Avec la fonction readValue()`, correct: false},
            {text: `Avec la fonction analogRead()`, correct: true},
            {text: `Avec la fonction getAnalog()`, correct: false},
            {text: `Avec la fonction digitaalRead()`, correct: false},
        ]
    },
   
]
