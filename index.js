
let bgmSound = new Audio("./assets/Bg.mp3");

// using event listener to wait for audio to be ready to play
bgmSound.addEventListener("canplaythrough", function () {
    bgmSound.play(); //play background music when it is ready
});

document.addEventListener("click", function () {
    //checking if background music is paused
    if (bgmSound.paused) {
        bgmSound.play();  //if paused play again 
    }
});

bgmSound.loop = true;
bgmSound.volume = 0.2;



let playbtn = document.querySelector("form");

playbtn.addEventListener("submit", function (e) {
    //when form is submitted, browser will reload the page. This is default form submission process. Prevent default prevents the default behaviour(it stops the page reload).
    e.preventDefault();

    let playername = document.getElementById("playername");
    let nickname = document.getElementById("nickname");

    if (playername.value === "") {
        alert("Please enter your name before playing");
    } else if (nickname.value === "") {
        alert("Please enter your nick name");
    } else {
        localStorage.setItem("playername", playername.value);
        window.location.href = "./instruction.html";
    }
});


