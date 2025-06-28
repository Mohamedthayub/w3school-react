const heading = document.querySelector("#head");
let color = "blue"

heading. addEventListener("click",() =>{
    // color  = "blue";
    if(color){
        heading.innerText = `the color is ${color}`;
        heading.style.color = color;
    }
    else{
        alert(`color is ${color}`);
    }
})