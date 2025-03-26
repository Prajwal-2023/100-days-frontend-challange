const toast = document.querySelector('.toast');
const cartButton = document.querySelector('.button_div button');
const sizeButtons = document.querySelectorAll('.size_card div');
const productNameSpan = document.querySelector('.toast span');

let prevCard = null;
sizeButtons.forEach((card) => { 
    card.addEventListener('click', function() { 
        if(prevCard) {
            prevCard.classList.remove('activeCard');
        }
        this.classList.add('activeCard'); 
        prevCard = this;
    });
});

cartButton.addEventListener('click', () => {
    toast.style.transform = `translateX(0px)`;
    toast.style.transition = `0.3s ease-in`;

    setTimeout(() => {
        toast.style.transform = `translateX(500px)`;
        toast.style.transition = `0.3s ease-out`;
    }, 1000);
});