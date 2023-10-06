function creatPromise(){
   return new Promise( function execute(resolve,reject){
        // Your codes goes here
        setTimeout(function f(){
            console.log("timer done");
            resolve(10);
        },3000);
        
   } );
}

console.log("start");
let x = creatPromise();
console.log("Got a new Promise");
x.then(  function f(value){
   console.log('promise done',value); 
})
.catch( function g(value){
    console.log("handled",value);
}  ).finally( function fn(){
    console.log("finally");
} )
console.log("ennd");