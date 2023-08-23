//three steps
/*
1-select
2-choose event 
3-Action


*/

var myImages = Array.from(document.querySelectorAll(".item img"));
var myCaption = Array.from(document.querySelectorAll(".item .img-caption "));

var lightBoxContainer = document.querySelector("#lightBoxContainer");
var lightBoxImage = document.querySelector("#lightBox");
var closeBtn = document.querySelector("#closeBtn");
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
console.log(nextBtn);
var currentIndex = 0;

var startPosX = 0;
var isDragging = false;

// pubbling => stopPropagation يمنع التدفق من جوة لبره
// pubbling => capturing  العكس

for (var i = 0; i < myImages.length; i++) {
  myImages[i].addEventListener("click", function (eventinfo) {
    var currentImageSrc = eventinfo.target.getAttribute("src");
    console.log(currentImageSrc);
    // console.log(eventinfo.target);
    currentIndex = myImages.indexOf(eventinfo.target);
    // "url("+currentImageSrc +")"
    lightBoxImage.style.backgroundImage = `url(${currentImageSrc})`;
    lightBoxContainer.classList.replace("d-none", "d-flex");
  });
}

document.addEventListener("keyup", function (e) {
  if (lightBoxContainer.classList.contains("d-flex")) {
    console.log(e);
    switch (e.key) {
      case "ArrowRight":
        nextSlide();
        break;

      case "ArrowLeft":
        PrevSlide();
        break;

      case "Escape":
        closeSlide();
        break;
    }
  }
});

// TODO mouse click out the image close the popup
document.addEventListener("click", function (e) {
  if (lightBoxContainer.classList.contains("d-flex")) {
    console.log(e.target.getAttribute("id") === "lightBoxContainer");

    if (e.target.getAttribute("id") === "lightBoxContainer") {
      closeSlide();
    }
  }
});

closeBtn.addEventListener("click", function () {
  closeSlide();
});
nextBtn.addEventListener("click", function () {
  nextSlide();
});
prevBtn.addEventListener("click", function () {
  PrevSlide();
});

lightBoxImage.addEventListener("touchstart", function () {
  nextSlide();
});

function closeSlide() {
  lightBoxContainer.classList.add("d-none");
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= myImages.length) currentIndex = 0;
  console.log(myImages[currentIndex].getAttribute("src"));
  lightBoxImage.style.backgroundImage = `url(${myImages[
    currentIndex
  ].getAttribute("src")})`;
}

function PrevSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = myImages.length - 1;
  console.log(myImages[currentIndex].getAttribute("src"));
  lightBoxImage.style.backgroundImage = `url(${myImages[
    currentIndex
  ].getAttribute("src")})`;
}

// lightBoxImage.addEventListener('touchend ', function(e) {
//   console.log("Start",e);
//   nextSlide();
//   if (e.cancelable) e.preventDefault();

//   });
