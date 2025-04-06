const errorMessage = document.getElementById('errorMsg');
const inputElem = document.querySelectorAll('input');
const subBtn = document.querySelector('button');

inputElem.forEach((inputs) => {
    inputs.addEventListener('keypress', (e) => {
        if (e.code === 'Space') {
            errorMessage.style.visibility = 'visible';
            subBtn.disabled = 'true';

            setTimeout(() => {
                errorMessage.style.visibility = 'hidden'; d
            }, 900);
        } else {
            errorMessage.style.visibility = 'hidden';
            subBtn.disabled = 'false';
        }
    });

});
