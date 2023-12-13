let playagain = document.getElementById("playagain");
let exitgame = document.getElementById("exitgame");
playagain.addEventListener("click",function(){
    window.location.href="./newgame.html"
})
exitgame.addEventListener("click",function(){
    window.location.href=("https://kalvium.community/")
})

let scorespan = document.getElementById("scorespan");
let score = localStorage.getItem("score")
let playernameFromStorage = localStorage.getItem("playername")
scorespan.innerText = playernameFromStorage + " your score is " + score;
