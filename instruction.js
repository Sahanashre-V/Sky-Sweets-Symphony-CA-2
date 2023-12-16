//background music
let bgmSound = new Audio("./assets/Bg.mp3");
bgmSound.loop = true;
bgmSound.play();
bgmSound.volume = 0.4;


let playbtn = document.getElementById("playbtn")
let texts = document.querySelector(".texts")
playbtn.addEventListener("click",function(){
    texts.style.display = "none";
    playbtn.style.display = "none";
    typeText();
    playgame.style.display = "block";        
})


// chocolate shower
function createChocolate() {
    const chocolate = document.createElement('div');
    chocolate.classList.add('chocolate');
    
    chocolate.style.left = Math.random() * 100 + "vw";    // 1vw = 1% of viewport's width
    chocolate.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    chocolate.innerText = '🍫';
    
    document.body.appendChild(chocolate);
    
    setTimeout(() => {
                chocolate.remove();
                }, 5000);
  }
  
  setInterval(createChocolate, 300);


  //typing texts 
  const text = "For Mobile Users: If you are playing on a mobile device, kindly touch and drag the basket to catch the falling sweets. \n \n For Laptop/Desktop Users: If you are using a laptop, click and drag the mouse to catch the falling sweets.";

let index = 0;

function typeText() {
    const typingText = document.getElementById("typing-text");
    typingText.innerHTML += text[index]; 
    typingText.classList.add("floatingletters");
    index++;

    if (index < text.length) {
        setTimeout(typeText, 30); 
    }
}

playgame = document.getElementById("playgame");
playgame.addEventListener("click",function(){
    window.location.href="./newgame.html";
})

