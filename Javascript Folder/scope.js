
// function one(){
//     const username = "rishu"

//     function two(){
//          const website = "vs code"
//          console.log(username);
//     }
//     //console.log(website);
//     two();
// }
// one();

// ++++ Function housting++++


// console.log(addone(5));
// function addone(num){
//      return num +1;
// }


// add2(5);  +++here thrown error++

// const add2 = function addtwo(num){   // function expression
//     return num + 2;
// }
//console.log(addtwo(7));
//add2(5);

// ****** this keyword ****

// const user = {
//     username: "sidharth",
//     salary:80000,
//    // username : "rishu",

//     welcomemessage : function (){
//         console.log(`${this.username}, welcome to company`);
//         console.log(this);  // thid talks about cuurent context or value;
//     }
// }
// user.welcomemessage();
// user.username = "rishu";
// user.welcomemessage();


// *******immediate involed function expression (IIFE) ******;

(function one(){
    console.log('DB coonected');     // normal iife
})();

( (name) => {
    console.log(`Db coonneccted two ${name}`)     //arrow iife with parameter
}  )('sidharth')     


