//background music
let bgmSound = new Audio("./assets/Bg.mp3");
bgmSound.loop = true;
bgmSound.play();
bgmSound.volume = 0.4;


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

//mousedown is clicking on the mouse, so that we can drag.
//mousedown is clicking on the mouse, so that we can drag.
if (window.innerWidth <= 600) {
  basket.addEventListener("touchstart", function (event) {
    isDragging = true;
    offsetX = event.touches[0].clientX - basket.getBoundingClientRect().left;
  });

  //dragging the mouse
  document.addEventListener("touchmove", function (event) {
    if (isDragging) {
      const newX = event.touches[0].clientX - offsetX;

      // this is to prevent basket moving off the left edge
      const minLeft = 0;

      // this is to calculate the maximum position allowed for the right edge
      const maxRight = window.innerWidth - basket.clientWidth;
      basket.style.left = Math.min(maxRight, Math.max(minLeft, newX)) + "px";
    }
  });

  //after dragging leaving the mouse, so that it will be in new position 
  document.addEventListener("touchend", function (event) {
    isDragging = false;
  });
}

else{
basket.addEventListener("mousedown", function (event) {
  isDragging = true;
  offsetX = event.clientX - basket.getBoundingClientRect().left;
});

//dragging the mouse
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

//after dragging leaving the mouse, so that it will be in new position 
document.addEventListener("mouseup", function (event) {
  isDragging = false;
});
}
// images which will fall are given in an array
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

//creating a function for random desserts which will fall from the sky
function createSweets() {
  let randomSweets = desserts[Math.floor(Math.random() * desserts.length)];
  // console.log(randomSweets);

  //image tag is created and adding source, id, class to it.
  let newSweet = document.createElement("img");
  newSweet.src = randomSweets;
  newSweet.alt = randomSweets;
  newSweet.className = "skygift";
  newSweet.id = "sweets-" + sweetsId;
  newSweet.style.position = "absolute";
  newSweet.style.width = "6%";
  sweetsContainer.appendChild(newSweet);  

//viewport of the screen
  let translateRandomNumber = Math.floor(Math.random() * (window.innerWidth - newSweet.clientWidth));

  // const screenwidth = window.innerWidth;
  // const dessertwidth = newSweet. clientWidth;
  // const maxTranslateX = screenwidth - dessertwidth;
  // let viewWidth = 
  newSweet.style.left = `${translateRandomNumber}px`;
  check();

  //random number created for animation duration 
  let randomSecondsNumber = Math.floor(Math.random() * (2 - 1)) + 1;
  newSweet.style.animationDuration = `${randomSecondsNumber}s`;


  function check() {
    if (newSweet.getBoundingClientRect().bottom >= 817) {
      sweetsContainer.removeChild(newSweet);  //because sweet crossed the viewpoint at bottom 
      sweetsId++;
      score -= 1;
      scorespan.innerText = "Score:"+score;
    } 
    else if (collisionBetweenBasketAndDessert(newSweet, basket)) {
      collision(newSweet);
    }
  }
  setInterval(check, 30);
}

setInterval(createSweets, 1600);

//during collision
function collision(newSweet) {
  newSweet.style.display = "none";
  score++;
  scorespan.innerText = "Score:"+score;

  // during collision sound 
  let collisionSound = new Audio("./assets/collisionsound.mp3");
  collisionSound.play();
  collisionSound.volume = 0.8;
};

//collision detection
function collisionBetweenBasketAndDessert(element1, element2) {
  let DessertFallingFromSky = element1.getBoundingClientRect();
  let movableBasket = element2.getBoundingClientRect();

  return !(DessertFallingFromSky.right <= movableBasket.left || // these conditions are checking for situations where there is no overlap between dessert and basket.
    DessertFallingFromSky.left >= movableBasket.right || 
    DessertFallingFromSky.bottom <= movableBasket.top ||
    DessertFallingFromSky.top >= movableBasket.bottom);
}

//If the combined condition is true (indicating no overlap), ! makes it false. If the combined condition is false (indicating overlap), ! makes it true.