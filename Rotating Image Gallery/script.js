const imageContainerElem = document.querySelector(".main-container");
const prevBtnElem = document.getElementById("prevBtn");
const nextBtnElem = document.getElementById("nextBtn");


let tracker = 0;
let controlTimer;
prevBtnElem.addEventListener('click', () => {
    clearTimeout(controlTimer)
    tracker = tracker + 45;
    updateTracker()
})
nextBtnElem.addEventListener('click', () => {
    clearTimeout(controlTimer)
    tracker = tracker - 45;
    updateTracker()
})

updateTracker();
function updateTracker() {
imageContainerElem.style.transform = ` 
 perspective(1000px) rotateY(${tracker}deg)`;

  controlTimer = setTimeout(()=>{
    tracker = tracker + 45;
    updateTracker();
 },2000)
}