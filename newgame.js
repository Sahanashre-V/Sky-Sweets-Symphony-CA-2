let timer = document.getElementById("time");
let scorespan = document.getElementById("score");
let timeoutId;
let score = 0;

//timer part
let referenceTime = undefined;
function ResetTime() {
  let Time = 30;
  timer.innerText = Time;
  referenceTime = setInterval(() => {
    Time = Time - 1;
    timer.innerText = Time;
    if (Time == 0) {
      localStorage.setItem('score', score);
      window.location.href = './gameover.html';
    }
  }, 1000);
}
ResetTime();

// basket movement
let isDragging = false;
let offsetX;

let basketdiv = document.getElementById("basketdiv");
let basket = document.getElementById("basket");

basket.addEventListener("mousedown", function (event) {
  isDragging = true;
  offsetX = event.clientX - basket.getBoundingClientRect().left;
});

document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    const newX = event.clientX - offsetX;

    // this is to prevent basket moving off the left edge
    const minLeft = 0;

    // this is to calculate the maximum position allowed for the right edge
    const maxRight = document.documentElement.clientWidth - basket.clientWidth;
    basket.style.left = Math.min(maxRight, Math.max(minLeft, newX)) + "px";
  }
});

document.addEventListener("mouseup", function (event) {
  isDragging = false;
});

let desserts = [
  "./assets/Image1.png",
  "./assets/Image2.png",
  "./assets/Image3.png",
  "./assets/Image4.png",
  "./assets/Image5.png",
  "./assets/Image6.png"
];

let sweetsId = 0;

let sweetsContainer = document.getElementById("sweets");

function createSweets() {
  let randomSweets = desserts[Math.floor(Math.random() * desserts.length)];
  console.log(randomSweets);
  let newSweet = document.createElement("img");
  newSweet.src = randomSweets;
  newSweet.alt = randomSweets;
  newSweet.className = "skygift";
  newSweet.id = "sweets-" + sweetsId;
  newSweet.style.position = "absolute";
  newSweet.style.width = "6%";
  console.log(sweetsContainer, newSweet);
  sweetsContainer.appendChild(newSweet);

  let translateRandomNumber = Math.floor(Math.random() * (1100 - 210)) + 210;
  newSweet.style.left = `${translateRandomNumber}px`;
  check();

  let randomSecondsNumber = Math.floor(Math.random() * (2 - 1)) + 1;
  newSweet.style.animationDuration = `${randomSecondsNumber}s`;

  function check() {
    if (newSweet.getBoundingClientRect().bottom >= 817) {
      sweetsContainer.removeChild(newSweet);
      sweetsId++;
      score -= 1;
      scorespan.innerText = "Score:"+score;
      // createSweets()
    } else if (detectCollision(newSweet, basket)) {
      collision(newSweet);
    }
  }
  setInterval(check, 30);
}

setInterval(createSweets, 1600);

//collision occurs
function collision(newSweet) {
  newSweet.style.display = "none";
  score++;
  scorespan.innerText = "Score:"+score;
}

function detectCollision(element1, element2) {
  let rect1 = element1.getBoundingClientRect();
  let rect2 = element2.getBoundingClientRect();

  return !(rect1.right <= rect2.left ||
    rect1.left >= rect2.right ||
    rect1.bottom <= rect2.top ||
    rect1.top >= rect2.bottom);
}
