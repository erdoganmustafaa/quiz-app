const correctAnswers = ["D","C","D","B","C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const remainingTime = document.querySelector(".remaining-time");
const questionOne = document.querySelector(".question-one");
const questionTwo = document.querySelector(".question-two");
const questionThree = document.querySelector(".question-three");
const questionFour = document.querySelector(".question-four");
const questionFive = document.querySelector(".question-five");
let submitBtn = document.querySelector(".next-btn");
let questionCount = 1;
submitBtn.classList.add("d-none");

    let time = 60;
    let timeAnimation = setInterval(()=>{
    remainingTime.textContent = `${time}`;
    if(time==0){
       clearInterval(timeAnimation);
    }
    else{
          time--;  
    }
    },1000)

function stopTimer(){
    clearInterval(timeAnimation);
} 


function startQuiz(){

    document.querySelector("#ready").classList.add("d-none");
    document.querySelector(".start-btn").remove();
    submitBtn.classList.remove("d-none");
    questionOne.classList.remove("d-none");
}

function showNextQuestion(){
    
    if(questionCount==1){
        questionTwo.classList.remove("d-none");
        questionOne.classList.add("d-none");
        questionCount++;
    }  
    else if(questionCount==2){
        questionThree.classList.remove("d-none");
        questionTwo.classList.add("d-none");
        questionCount++;
    }
    else if(questionCount==3){
        questionThree.classList.add("d-none");
        questionFour.classList.remove("d-none");
        questionCount++;
    }
    else if(questionCount==4){
       
        questionFour.classList.add("d-none");
        questionFive.classList.remove("d-none");
        questionCount++;
        submitBtn.value="Sonuçlar göster";
    }
    else if(questionCount==5){
        submitBtn.setAttribute("type","submit");
    }
}


form.addEventListener("submit",e =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.s1.value,form.s2.value,form.s3.value,form.s4.value,form.s5.value,];

    userAnswers.forEach((answer,index)=>{
        if(answer==correctAnswers[index]){
            score+=20;
        }
       
    })
    result.querySelector("span").textContent = `${"%"+score}`;
    result.classList.remove("d-none");
    scrollTo(0,0);
    stopTimer();
    submitBtn.disabled = true;
   
    


}
)