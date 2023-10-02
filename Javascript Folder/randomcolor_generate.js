
const btn = document.querySelector("#btn");

//console.log(btn);

const randomColor = function(){
    let colorvalue = "0123456789ABCDEF";
    let constantvalue = "#";

    for(let i =0;i<6;i++){
        constantvalue = constantvalue + colorvalue[Math.floor(Math.random()*16)];
    }
    return constantvalue;
};
console.log(randomColor());


function changeColor(){
    document.body.style.backgroundColor= randomColor();
}
btn.addEventListener("click",changeColor);