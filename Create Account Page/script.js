const inputElem = document.querySelectorAll('input');

inputElem.forEach((inputs)=>{
    inputs.addEventListener('keypress',(e)=>{
        e.target.key === "SPACE" ?
         console.log(e.target.key):
         console.log(e.target.key)

    })
})