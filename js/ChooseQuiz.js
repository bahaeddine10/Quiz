export class ChooseQuiz extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML=`
         <div class="container">
        <h1 class="Quiz ">Choose your Quiz</h1>
        
        <div class="controls">
            
            <button id="Webdev-btn" class=" btn">Webdev</button>
            <button id="Robotdev-btn" class="btn ">Robotdev</button>
        </div>
        </div>
        `;
        
    }
}