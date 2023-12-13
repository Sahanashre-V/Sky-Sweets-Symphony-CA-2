let playername = document.getElementById("playername");
let playbtn = document.querySelector("form");
let input = document.getElementById("playername");
playbtn.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("here",playername.value)
    localStorage.setItem("playername",playername.value)

    window.location.href = "./instruction.html"
})
