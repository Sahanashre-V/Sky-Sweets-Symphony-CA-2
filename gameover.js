//background sound
let bgmSound = new Audio("./assets/Bg.mp3");
bgmSound.loop = true;
bgmSound.play();
bgmSound.volume = 0.4;


let playagain = document.getElementById("playagain");
let exitgame = document.getElementById("exitgame");
let zeroscore = document.getElementById("congratulations")


playagain.addEventListener("click",function(){
    window.location.href="./newgame.html"
})

exitgame.addEventListener("click",function(){
    window.location.href=("https://kalvium.community/")
})


let scorespan = document.getElementById("scorespan");
let score = localStorage.getItem("score");
if(score<=0){
    zeroscore.innerHTML = "Oops! You missed the sweetness!"
}

let playernameFromStorage = localStorage.getItem("playername")
scorespan.innerText = playernameFromStorage + " your score is " + score;

//creating chocolate shower only when socre is greater than zero
if (score>0){
    createChocolateShower();
    setInterval(createChocolateShower, 300);
}

function createChocolateShower() {
    const chocolate = document.createElement('div');
    chocolate.classList.add('chocolate');
    
    chocolate.style.left = Math.random() * 100 + "vw";
    chocolate.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    chocolate.innerText = '🍬';
    
    document.body.appendChild(chocolate);
    
    setTimeout(() => {
                chocolate.remove();
                }, 5000);
  }
  
