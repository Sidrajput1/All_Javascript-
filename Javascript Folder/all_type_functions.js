
// function formalgreetings(){
//     console.log("How are you");
// }
// function casualgreetings(){
//     console.log("Whats up!");
// }
// function greet()
function formalGreeting() {
    console.log("How are you?");
  }
  function casualGreeting() {
    console.log("What's up?");
  }
  function greet(type, greetFormal, greetCasual) {
    if(type === 'formal') {
      greetFormal();
    } else if(type === 'casual') {
      greetCasual();
    }
  }
  // prints 'What's up?'
 // greet('casual', formalGreeting, casualGreeting);
 //greet("formal", formalGreeting,casualGreeting);
 
 // Higher order function

 const arr1 = [1,2,3];
 let sum =0;

//  arr1.forEach(function(item,index,array){
    //console.log(item,index,array);
    //console.log(index);
 //})
 arr1.map(function(item){
     sum = sum+item;
    //console.log("using map we get same item",item,index,array);
    // console.log(sum);
    return sum;
 })
 console.log(sum);

//  const arr2 = arr1.map(function(item){
//     return item*2;
//  });
//  console.log(arr2);
//  const arr3 = arr1.map(item => item*3);
//  console.log(arr3);

 const year = [1990,1992,1989,1985,1943];
//Normal method
//  const ages = [];
//  for(let i = 0; i<year.length;i++){
//     let age = 2023-year[i];
//     ages.push(age);
//  }
//  console.log(ages);

// with high order function 'map' map methods take element , index and array;

// const ages1 = year.map(year => 2023-year);
// console.log(ages1);

// const ages = year.map(function(year){
//        return 2023-year;

// })
// console.log(ages);



// filter method Attay.prototype.filter it creates new array ,it also takes element , index and array;
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];

  // without higher fuction
// const fullage = [];

// for(let i = 0;i<persons.length;i++){
//     if(persons[i].age>=18){
//         fullage.push(persons[i]);
//     }
// }
// console.log(fullage);

// with higher function using filter method

// const newage = persons.filter(persons => persons.age>=18)
// console.log(newage);

const above18 = persons.filter(function(persons){
    return persons.age>=18;
})
console.log(above18);


