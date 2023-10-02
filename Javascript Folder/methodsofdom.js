
let head1 = document.querySelector("h1");
let newElement = document.createElement("p");
let aDiv = document.createElement("div");
head1.appendChild(aDiv);
console.log(aDiv);

console.log(head1);

head1.appendChild(newElement);
newElement.append("Hello")
aDiv.append("hiii")  //  add a text in html tag

console.log(newElement);

const mybtn = document.querySelector("button")

console.log(mybtn);

function onClick(){
    alert("button clicked!");
} 
mybtn.addEventListener('click',onClick,{once:true});

// for remove
//mybtn.removeEventListener('click',onClick);

