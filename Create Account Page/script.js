const errorMessage = document.getElementById('errorMsg');
const inputElem = document.querySelectorAll('input');
const subBtn = document.querySelector('button');




inputElem.forEach((inputs) => {

    inputs.addEventListener('focus',(parentElem)=>{
        const inputActiveBorder = parentElem.target.offsetParent;
        const inputLabelColor = parentElem.target.nextSibling.parentElement;
        // console.log(parentElem.target.nextSibling.parentElement);  - to get label
        // console.log(parentElem.target.offsetParent); - to get Parent Div
        inputActiveBorder.style.border = `1px solid red`;
        inputLabelColor.style.color = `black`;
    })

    inputs.addEventListener('blur',(parentElem)=>{
        const inputActiveBorder = parentElem.target.offsetParent;
        const inputLabelColor = parentElem.target.nextSibling.parentElement;
        inputActiveBorder.style.border = `none`;
        inputLabelColor.style.color = `#646464`;
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
