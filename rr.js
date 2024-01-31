let user_score=0;
let comp_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
user=document.querySelector("#user-score");
comp=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["paper","scissors","rock"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Draw";
}

const showWinner=(userWin)=>{
    if(userWin){
        user_score++;
        user.innerText=user_score;
        console.log("You win");
        msg.innerText="You Won!!";
    }
    else{
        comp_score++;
        comp.innerText=comp_score;
        console.log("You loose");
        msg.innerText="You Loose";
    }
}
const playGame=(userChoice)=>{
    console.log("choice was clicked",userChoice);
    const compChoice=genCompChoice();
    console.log(compChoice);

    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        }
        if(userChoice=="scissors"){
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log(choice);
        const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
});