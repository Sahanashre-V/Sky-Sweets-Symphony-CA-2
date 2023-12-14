let playbtn = document.querySelector("form");

playbtn.addEventListener("submit", function (e) {
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


