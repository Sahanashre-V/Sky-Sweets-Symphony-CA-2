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

// creating random messages for winner
let randomWinningMessages = [
    "Sweet success! Your dessert-catching skills are unmatched!",
    "Dessert champion! High score and a tasty collection—fantastic!",
    "Top-notch Dessert Catcher! Your basket skills are truly delightful.",
    "You're the Sweet Sky Champion! A heavenly collection of desserts!",
    "You're a dessert-catching virtuoso! Sweet victory is yours!",
    "In the sweet symphony of Confectionville, you're the maestro!"
]

// creating random messages for loser
let randomLoserMessages = [
    "Oops, a miss! Practice makes the perfect Dessert Catcher!",
    "Missed a few, but the next round is your sweet comeback!",
   "A hiccup in the sweetness journey. Ready for the rebound!",
   "Missed a couple, but your dessert-catching journey continues!",
   "Don't let a miss discourage you! The next catch awaits!",
   "A small setback in Confectionville - the sweetness continues!"
]

// creating random number for random winning and losing messages
let randnumForWinOrLose = Math.floor(Math.random()*6)

let scorespan = document.getElementById("scorespan");
let score = localStorage.getItem("score");
if(score<=0){
    
    zeroscore.innerHTML = randomLoserMessages[randnumForWinOrLose]
}

else if (score>0) {
    zeroscore.innerHTML = randomWinningMessages[randnumForWinOrLose]
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
  
