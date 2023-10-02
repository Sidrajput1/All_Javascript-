// const checkarray = function(input){
//     if(toString.call(input)==="[object array]"){
//         return true;
//     }else
//     return false;
// };
// console.log(checkarray("How are you"));
// console.log(checkarray([1,2,4,5,6]));

// let arr1 = [1,2,3,4];
// console.log("Original array");
// console.log(arr1);
// let arr2 = [arr1[3],...arr1];
// console.log("clone arrray ");
// console.log(arr2);

// * and also a similar way to clone an array
// let arr1 = [1,2,3,50,60,70,"rishu"];
// let arr2 = Array.from(arr1);
// console.log(arr2);
// question number - 3
let arr = [9,4,6,78,9,99];
// function firstletter(arr,n){
//    // return arr[0];
//    return [];
//     return arr.slice(4,n);

// }
// console.log(firstletter([4,5,6,7,8],2));
// x = firstletter(arr);
// console.log(x);

// question--n = 4
// function lastletter(arr){
//     return arr[arr.length-1];
// }
// y = lastletter(arr);
// console.log(y);

//question no ->5

// let myColor = ["Red", "Green", "White", "Black"];

// let color1 = myColor.join(" ");
// let color2 = myColor.join(" + ");
// let color3 = myColor.join(" , ");
// console.log(color1);
// console.log(color2);
// console.log(color3);

//quetion  number - 6

let num = [2,3,4,5,6,7,8]
const str=[];
for(let i = 0;i<num.length;i++){
    if(num[i]%2===0){
        str.push('-',str[i]);
    }else{
        str.push(str[i]);
    }

}
console.log(str[i]);

