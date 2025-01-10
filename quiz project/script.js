const questions =[
    {
        question:"which of the following can read and render HTML web pages.",
        answers:[
                { text:"Server",correct:false },
                { text:"head tak",correct:false },
                { text:"web browser",correct:true },
                { text:"empty",correct:false },
        ]
    },
    {
        question:"Among the following operators identify the one which is used to allocate memory to array variables in javascript.",
        answers:[
                { text:"new",correct:true },
                { text:"new malloc",correct:false },
                { text:"alloc",correct:false },
                { text:"malloc",correct:false },
        ]
    },
    {
        question:"the latest HTML standard is",
        answers:[
                { text:"HTML 4.0",correct:false },
                { text:"HTML 5.0",correct:true },
                { text:"XML",correct:false },
                { text:"SGML",correct:false },
        ]
    },
    {
        question:"Why were cookies designed?",
        answers:[
                { text:"for server-side programming",correct:true },
                { text:"for client-side programming",correct:false },
                { text:"both a and b",correct:false },
                { text:"None",correct:false },
        ]  
    },
    {
        question:"what are variables used in javascript programs",
        answers:[
                { text:"varying randomly",correct:false },
                { text:"storing numbers,dates,and other values",correct:true },
                { text:"used as header files",correct:false },
                { text:"none of the above",correct:false },
        ]
    },
    {
        question:"Simple network management protocol uses which of the following port number",
        answers:[
                { text:"164",correct:false },
                { text:"163",correct:false },
                { text:"160",correct:false },
                { text:"161",correct:true },
        ]
    },
    {
        question:"The MINE text file is saved with which of the following extension",
        answers:[
                { text:"THM extension",correct:false },
                { text:"HTML extension",correct:true },
                { text:"HTM extension",correct:false },
                { text:"None",correct:false },
        ]
    },
    {
        question:"Which of the following attributes is used for merging  two or more adjacent columns?",
        answers:[
                { text:"ROWSPAN",correct:false },
                { text:"CELLSPACING",correct:false},
                { text:"COLSPAN",correct:true },
                { text:"CELLPADDING",correct:false },
        ]
    },
    {
        question:"Which of the following is used to transmit information on the world wide web?",
        answers:[
                { text:"HPPT",correct:false },
                { text:"HTTP",correct:true },
                { text:"HTTTP",correct:false },
                { text:"HTPP",correct:false },
        ]
    },
    {
        question:"Identified among the following which creates push button",
        answers:[
                { text:"RESET",correct:true },
                { text:"CHECK BOX",correct:false},
                { text:"INPUT",correct:false },
                { text:"RADIO",correct:false },
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
            
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});
startQuiz();