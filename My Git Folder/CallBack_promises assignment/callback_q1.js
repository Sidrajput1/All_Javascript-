
// function returnDouble(arr,calling){  
//     const doublearr = arr.map( (num) =>{
//         return calling(num);  //2
//     } );
//     return doublearr;  // 3
// }

// const realarray = [2,3,4,5,6,7];

// function callback(num){
//      return num *2;  //4

// }
// const doublearr = returnDouble(realarray,callback);  //1
// console.log(doublearr);  //5

function manipulateString(str,callback){
     const dstr = str.map( (ch) => {
        return callback(ch);
     });
     return dstr;
}
const realstr = ["sidharth shekhar"];

function logString(ch){
    console.log(`The mainpulate string are: ${ch.toUpperCase()}`);
    //return ch.toUpperCase();
}
const dstr = manipulateString(realstr,logString);
//console.log(dstr);