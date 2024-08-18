// ROCK PAPER SISSOR GAME
let US=document.querySelector('#player_score');//INITIAL IS SET 0 IN HTML
let CS=document.querySelector('#computer_score');

let choices = document.querySelectorAll('.choice');
let usrChoosen = document.querySelector('#player_choosen');
let compChoosen = document.querySelector('#computer_choosen');
let message = document.querySelector('.message');

function getCompChoice() {
    let c = ["rock","paper","sissors"];
    let i = Math.floor(Math.random()*3);//Math.random():-Generates no. from 0-1 eg 0.3543.. So to get upto 2 multiply by 3 the take floor.
    return c[i];
}
function play(usrC,compC) {
    if (usrC==compC) {
        return "draw";
    }
    else if (usrC=="rock" && compC=="paper") {
        return "computer";
    }
    else if (usrC=="paper" && compC=="sissors") {
        return "computer";
    }
    else if (usrC=="sissors" && compC=="rock") {
        return "computer";
    }
    else return "user";
}

choices.forEach((c)=>{
    c.addEventListener("click",()=>{
        let id = c.getAttribute('id');
        let compC = getCompChoice();
        let str=`url(/img/${id}.png)`; // For changing choosen background
        usrChoosen.style.backgroundImage = str;
        str = `url(/img/${compC}.png)`;
        compChoosen.style.backgroundImage = str;
        let result = play(id,compC);
        if (result=="draw") {
            message.innerText="Oops!! Round Draw \nChoose Again!"; // updating message
        }
        else if(result=="user"){
            US.innerText++;
            message.innerText="YOU WON !!";
        }
        else {
            CS.innerText++;
            message.innerText="You LOST !!";
        }
    })
});