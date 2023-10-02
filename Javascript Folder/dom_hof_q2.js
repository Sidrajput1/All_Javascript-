
const books =[
   {
     title:"My experince with truth",
     author:"Mk Gandhi",
     publish:1975,
   },
   {
     title:'The white tiger',
     author:'Aravinda Adiga',
     publish:2018,
   },
   {
    title:"poos ki raat",
    author:'premchand',
    publish:1936,
   },
   {
    title:"The god of small things",
    author:'Arundati roy',
    publish:1997,
   },
   {
    title: "Midnight's Children",
    author: "Salman Rushdie",
    publish:1981,
   },
];

const oldbook =books.filter( (item) =>{
    return item.publish<2000;
} )
//console.log(oldbook);
const result = oldbook.map( (book) => {
    return{  // high order function
        ...book,
        author : book.author.toUpperCase(),
    };
}  );
console.log(result);