const errorMessage = document.getElementById('errorMsg');
const inputElem = document.querySelectorAll('input');
const subBtn = document.querySelector('button');




inputElem.forEach((inputs) => {

    inputs.addEventListener('focus',(parentElem)=>{
        console.log(parentElem.target.offsetParent);
        parentElem.target.offsetParent.style.border = `1px solid red`;
    })

    inputs.addEventListener('blur',(parentElem)=>{
        console.log(parentElem.target.offsetParent);
        parentElem.target.offsetParent.style.border = `none`;
    })


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
