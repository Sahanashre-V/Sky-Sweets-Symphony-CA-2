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
let score = localStorage.getItem("score")
if(score<=0){
    zeroscore.innerHTML = "Oops! You missed the sweetness!"
}
let playernameFromStorage = localStorage.getItem("playername")
scorespan.innerText = playernameFromStorage + " your score is " + score;
