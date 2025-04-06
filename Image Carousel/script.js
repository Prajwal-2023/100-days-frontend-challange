    const leftBtn = document.querySelector('#leftBtn');
    const rightBtn = document.querySelector('#rightBtn');
    const mainImage = document.querySelector('.image_container_div .showing_image img');
    const carouselImagesList = document.querySelectorAll('.carousel_div .showing_image img');
    const dotContainer =  document.querySelectorAll('.dotContainer');

    let currentIndex = 6;
    mainImage.src = carouselImagesList[currentIndex].src;

    function updateIndex(index) {
        mainImage.src = carouselImagesList[index].src;
    }

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselImagesList.length) % carouselImagesList.length;
        updateIndex(currentIndex);
    })
    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselImagesList.length;
        updateIndex(currentIndex);
    })