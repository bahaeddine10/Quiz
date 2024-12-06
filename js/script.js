// import {ChooseQuiz} from "./ChooseQuiz.js"
// import { quizRobotDev } from "./quizRobotDev.js";
// import { quizWebDev } from "./quizWebDev.js";
// customElements.define("choose-quiz",ChooseQuiz);
// customElements.define("robot-dev",quizRobotDev)
// customElements.define("web-dev",quizWebDev);
window.addEventListener("load",()=>{
    window.location.href="https://bahaeddine10.github.io/Quiz/index.html";
})

const WebDevBtn =document.querySelector("#Webdev-btn");
const RobotDevBtn =document.querySelector("#Robotdev-btn");
// const choose=document.querySelector("choose-quiz");
// const web_dev=document.querySelector("web-dev");
// const robot_dev=document.querySelector("robot-dev");

 WebDevBtn.addEventListener("click",()=>{
window.location.href="https://bahaeddine10.github.io/Quiz/index.html/quizWebDev.html";
    

 })

RobotDevBtn.addEventListener("click",()=>{
  window.location.href="https://bahaeddine10.github.io/Quiz/index.html/quizRobotDev.html";  

})

// const startBtn = document.getElementById('start-btn');
// const nextBtn = document.getElementById('next-btn');
// const questionContainer = document.getElementById("question-container");
// let num=0;
// const container = document.querySelector(".container");

// startBtn.addEventListener('click', startGame);
// nextBtn.addEventListener('click', ()=>{
//     currentQuestionIndex++
//     setNextQuestion();
// });
// const questionElement = document.getElementById('question');
// const answerButtons = document.getElementById('answer-buttons');
// let shuffledQuestions , currentQuestionIndex 


// function startGame(){
//     startBtn.classList.add('hide');
    
//     const prog = document.createElement("div");
//     const imgCard=document.createElement("div");
//     imgCard.classList.add("imageLoading");
//     imgCard.innerHTML=`<img src="./img/bg1.png" alt="loading">`
//     container.appendChild(imgCard);
    
//     prog.classList.add("progress-bar");
//     prog.setAttribute("data-label", "Loading");
//     container.appendChild(prog);
//     const progressBar=document.getElementsByClassName("progress-bar")[0];
//     setInterval(() => {
//     const computedStyle = getComputedStyle(progressBar);
//     const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
//     progressBar.style.setProperty("--width", width + 0.2);
// },5)
//     setTimeout(() => {
        
//         shuffledQuestions = questions.sort(() => Math.random() - .5)
//         currentQuestionIndex = 0
       
//         questionContainer.classList.remove('hide');
//         setNextQuestion();   
//         container.removeChild(prog);
//         container.removeChild(imgCard);
      
//     }, 2500);
   
    
    

// }

// function setNextQuestion(){
    
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
//     console.log(num);
    
    
    
// }
// function showQuestion(question){
//     questionElement.innerHTML = `<h2 style="text-align:center;color: #5432D3; text-shadow: 1px 1px #000000">${question.question}</h2>`
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerHTML = `<h3 style="text-align:center"> ${answer.text}</h3>`;
//         button.classList.add('btn')
//         if(answer.correct){
//             button.dataset.correct = answer.correct
            
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtons.appendChild(button)
//     })
// }

// function resetState(){
//     clearStatusClass(document.body)
//     nextBtn.classList.add('hide')
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild)
//     }   
// }
// function selectAnswer(event){
    
//     const selectedButton = event.target
//     console.log(selectedButton)
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtons.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct,selectedButton.innerText)
        
//     })
    
//     if(shuffledQuestions.length > currentQuestionIndex + 1){
//         nextBtn.classList.remove('hide')
//     }else{
//         questionElement.innerHTML = `<h2 style="text-align:center;color: #5432D3; text-shadow: 1px 1px #000000">Your score is ${num} out of ${shuffledQuestions.length}</h2>`
//         while(answerButtons.firstChild){
//             answerButtons.removeChild(answerButtons.firstChild)
//         }   
//         startBtn.innerText = 'Restart'
//         startBtn.classList.remove('hide')
//         num=0;
//     }
// }

    

// function setStatusClass(element, correct,name){
//     clearStatusClass(element)
//     if(correct){
        
//         element.classList.add('correct')
//         if(name==element.innerText){
//             num++;
//         }
        
//     }else{
//         element.classList.add('wrong')

        
//     }
    
    
// }

// function clearStatusClass(element){
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }


// const questions = [
//     {
//         question: `Which tag is used for the most important heading in HTML? `,
//         answers: [
//             {text: `< h6 >`, correct: true},
//             {text: `< p >`, correct: false},
//             {text: `< h1 >`, correct: true},
         
//         ]
//     },
//     {
//         question: `Which CSS property is used to set the text color?`,
//         answers: [
//             {text: `font-color`, correct: false},
//             {text: `color`, correct: true},
//             {text: `text-color`, correct: false},
//             ,
//         ]
//     }, {
//         question: `Which tag is used to create a hyperlink in HTML?
// `,
//         answers: [
//             {text: `< link >  `, correct: false},
//             {text: ` < img >`, correct: false},
//             {text: ` < a > `, correct: true},
            
//         ]
//     }, {
//         question: `What does the 'let' keyword do in JavaScript?`,
//         answers: [
//             {text: `Declares a constant`, correct: false},
//             {text: `Declares a local variable`, correct: true},
//             {text: `Finds an element`, correct: false},
           
//         ]
//     }, {
//         question: `The correct JAVASCRIPT syntax to change the content of the HTML element below?\n
// < p id="demo">This is JavaScript< / p >`,
//         answers: [
//             {text: `document.getElementById("demo").innerHTML="hello";`, correct: true},
//             {text: `#demo.innerHTML="hello"`, correct: false},
//             {text: `document.getelementbyname("p").innerHTML="hello";`, correct: false},
        
            
//         ]
//     }, {
//         question: `Which CSS property sets the background color of an element? `,
//         answers: [
//             {text: `background-color`, correct: true},
//             {text: `color`, correct: false},
//             {text: `font-size`, correct: false},
//            ,
//         ]
//     },
//     {
//         question: `What is the purpose of the 'getElementById' method in JavaScript? `,
//         answers: [
//             {text: `Changes element style`, correct: false},
//             {text: `Declares a variable`, correct: false},
//             {text: `Finds an element by ID`, correct: true},
            
//         ]
//     },
//     {
//         question: `Which Bootstrap class is used to create a responsive table? `,
//         answers: [
//             {text: `table-responsive`, correct: true},
//             {text: `table-striped`, correct: false},
//             {text: `table-bordered`, correct: false},
            
//         ]
//     },
//     {
//         question: `What does the < p > tag define in HTML?`,
//         answers: [
//             {text: `Paragraph`, correct: true},
//             {text: `List`, correct: false},
//             {text: `Heading`, correct: false},
            
//         ]
//     },
//     {
//         question: `Which attribute specifies the path to an image in HTML?`,
//         answers: [
//             {text: `alt`, correct: false},
//             {text: `src`, correct: true},
//             {text: `href`, correct: false},
            
//         ]
//     },
   
// ]
