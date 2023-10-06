


// let newPromise = new Promise( (resolve,reject) =>{
//     const greeting = `Hello ,${name}`;
//     resolve(greeting);
// }  )
function takeInput(name){
    // return name;
    return new Promise( (resolve,reject) =>{
        const greeting = `Hello ,${name}`;
        resolve(greeting);
    }  )
}
//newPromise.then((print)=>{console.log(print)} );
takeInput("sidharth").then((print)=>console.log(print) );
//takeInput("143").then((print)=>console.log(print) );