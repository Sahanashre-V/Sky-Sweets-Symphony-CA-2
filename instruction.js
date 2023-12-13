const text = "In a quaint town named Confectionville, a mysterious baker discovers a magical recipe that makes every treat he bakes rain down from the sky. As the town becomes enchanted with sweet surprises, the baker crafts a whimsical basket to catch these heavenly delights. Now, the townsfolk embark on a delightful adventure, skillfully wielding their baskets to capture an array of delectable pastries falling from the enchanted sky.";

let index = 0;
let storybox = document.getElementById("story-box");
let instructionbox = document.getElementById("instruction-box");
let playbtn = document.getElementById("playbtn")
console.log(localStorage.getItem("playername"))
function typeText() {
    const typingText = document.getElementById("typing-text");
    typingText.textContent += text[index];
    index++;

    if (index < text.length) {
        setTimeout(typeText, 30); // Adjust the timeout for typing speed
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeText();
});

let instructionbtn = document.getElementById("instruction-btn");
instructionbtn.addEventListener("click",function(){
    instructionbtn.style.display="none";
    storybox.style.display="none";
    instructionbox.style.display="block";
    playbtn.style.display="block"
})

playbtn.addEventListener("click",function(){
    window.location.href="./newgame.html"

})
