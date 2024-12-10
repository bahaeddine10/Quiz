const WebDevBtn =document.querySelector("#Webdev-btn");
const RobotDevBtn =document.querySelector("#Robotdev-btn");
const MlBtn=document.querySelector("#Ml-btn");
const AihBtn=document.querySelector("Aih-btn");
 WebDevBtn.addEventListener("click",()=>{
window.location.href="./quizWebDev.html";
    

 })

RobotDevBtn.addEventListener("click",()=>{
  window.location.href="./quizRobotdev.html";  

})

MlBtn.addEventListener("click",()=>{
  window.location.href="./quizAi.html";  
})

AihBtn.addEventListener("click",()=>{  
  window.location.href="./quizAiHealthcare.html";  
})